package moe.protector.pe.game;

import android.util.Log;
import android.util.SparseIntArray;

import com.alibaba.fastjson.JSON;

import org.litepal.LitePal;

import java.util.HashMap;
import java.util.List;

import moe.protector.pe.bean.DealtoBean;
import moe.protector.pe.bean.GetResultBean;
import moe.protector.pe.bean.PathConfigBean;
import moe.protector.pe.bean.SkipWarBean;
import moe.protector.pe.bean.SpyBean;
import moe.protector.pe.bean.TaskBean;
import moe.protector.pe.bean.common.FleetVo;
import moe.protector.pe.bean.common.PveNode;
import moe.protector.pe.bean.common.ShipVO;
import moe.protector.pe.bean.common.UserShipVO;
import moe.protector.pe.exception.HmException;
import moe.protector.pe.exception.OperateException;
import moe.protector.pe.sqlite.MapConfigBean;
import moe.protector.pe.util.CommonUtil;
import moe.protector.pe.util.Util;

public class GameChallenge extends GameBattle {
    private static final String TAG = "GameChallenge";
    private GameFunction gameFunction = GameFunction.getInstance();
    private UserData userData = UserData.getInstance();
    private NetSender netSender = NetSender.getInstance();
    private GameConstant gameConstant = GameConstant.getInstance();

    private String fleet;
    private int repair;
    private PathConfigBean configBean;
    private String map;

    public GameChallenge(TaskBean taskBean) throws OperateException{
        // 初始化数据
        head = "pve";
        String configName = taskBean.name;
        this.fleet = String.valueOf(taskBean.battleData.fleet);
        this.repair = taskBean.battleData.repair;
        // 读取配置名称
        List<MapConfigBean> list = LitePal
                .limit(1)
                .where("name=?", configName)
                .find(MapConfigBean.class);
        if (list.size() != 0) {
            String config = list.get(0).data;
            configBean = JSON.parseObject(config, PathConfigBean.class);
            this.map = configBean.map;
        } else {
            throw new OperateException("解析任务失败");
        }
    }

    // 返回值
    public enum Finish{
        FINISH, SL, REPAIR, BROKEN, DISMANTLE, ERROR
    }
    // 当前数据寄存


    public Finish execute() {
        int skipFailCount = 0;
        String nowNode;
        String nowFlag;
        FleetVo fleetVo;
        List<Integer> ships;
        PveNode pveNode;
        boolean isLastPoint;
        Counter counter = Counter.getInstance();
        String mapName;

        try {
            //-------------战前准备页面---------------
            // 进行出征前准备
            UIUpdate.detailLog(TAG, "[出征] 准备开始出征");
            CommonUtil.delay(2000);
            fleetVo = userData.getFleet().get(fleet);
            ships = fleetVo.ships;
            mapName = userData.getLevel(this.map).title;
            // 活动关的设置舰队
            if (Integer.valueOf(this.map) > 1000) {
                netSender.setFleet(1);
                netSender.setFleet(2);
                netSender.setFleet(3);
                netSender.setFleet(4);
            }
            // -----------进行补给------------
            UIUpdate.detailLog(TAG, "[出征] 补给检测");
            gameFunction.checkSupply(ships);
            // -----------检测修理----------
            UIUpdate.detailLog(TAG, "[出征] 修理检测");
            checkRepair(ships);
            // -------------检测船舱-------------
            if (!gameFunction.checkDismantle()) {
                return Finish.DISMANTLE;
            }
            // ----------------出征页面---------------------
            // 开始出征
            UIUpdate.detailLog(TAG, "[出征] 开始出征");
            CommonUtil.delay(2000);
            challengeStart(this.map, this.fleet);
            while (true) {  // 出征总循环
                // ----------------选路页面-------------
                CommonUtil.delay(1000);
                nowNode = challengeNewNext();  // 获取当前路径点
                counter.nodeNumAdd();
                pveNode = userData.getNode(nowNode);  // 获取当前点数据
                nowFlag = pveNode.flag;  // 当前点旗帜
                isLastPoint = isLastNode(pveNode);  // 是否为最后一点
                UIUpdate.detailLog(TAG, String.format("[出征] 进点%s → %s", nowFlag, configBean.detail.containsKey(nowFlag)? "继续": "SL"));
                CommonUtil.delay(1000);
                if (!configBean.detail.containsKey(nowFlag)) {  // 当前点是否为期望点
                    throw new ChallengeException(ChallengeException.EXCEPTION_SL); //  进行SL
                }
                int nodeType = Integer.valueOf(pveNode.nodeType);  // 当前点的类型
                int roundabout = Integer.valueOf(pveNode.roundabout);  // 当前点是否可以迂回
                PathConfigBean.Detail nodeDetail = configBean.detail.get(nowFlag);  // 当前点的全部数据
                if (nodeDetail == null) {
                    throw new OperateException("读取详细信息失败!");
                }
                String nowFormat = nodeDetail.format;  // 初始化阵形数据
                List<PathConfigBean.NodeDetail> flagDetails = nodeDetail.detail;  // 当前点的路径数据
                // 选择战况
                if (pveNode.buff.size() != 0) {
                    netSender.selectBuff(configBean.buff);
                    UIUpdate.detailLog(TAG, String.format("[出征] 选择战况 %s", userData.getBuff(configBean.buff)));
                }
                // 1:普通点, 2:BOSS点, 3:资源点 4:待机点, 5:收费站
                if (nodeType == 1 || nodeType == 2) {
                    // --------------开始索敌-------------
                    UIUpdate.detailLog(TAG, "[出征] 进行索敌");
                    CommonUtil.delay(2000);
                    SpyBean spyBean = challengeSpy();  // 获取索敌数据

                    // 索敌失败SL
                    if (spyBean.enemyVO.isFound == 0 && nodeDetail.spyFailSl) {
                        UIUpdate.detailLog(TAG, "[出征] 索敌失败, 设置需要SL");
                        CommonUtil.delay(2000);
                        throw new ChallengeException(ChallengeException.EXCEPTION_SL);
                    }
                    // 取得敌人数量
                    SparseIntArray enemyNum = new SparseIntArray();
                    for (ShipVO shipVO: spyBean.enemyVO.enemyShips) {
                        int type = shipVO.type;
                        if (enemyNum.indexOfKey(type) >= 0) {
                            enemyNum.put(type, enemyNum.get(type) + 1);
                        } else {
                            enemyNum.put(type, 1);
                        }
                    }
                    // 判断是否需要SL
                    for (PathConfigBean.NodeDetail detail: flagDetails) {
                        int num = enemyNum.indexOfKey(detail.enemy) != -1? enemyNum.get(detail.enemy): 0;
                        if ((detail.num <=6 && num >= detail.num) || (detail.num>6 && num<detail.num-6)) {
                            if (detail.deal == 0) {
                                UIUpdate.detailLog(TAG, "[出征] 舰船SL启动, 进行SL");
                                throw new ChallengeException(ChallengeException.EXCEPTION_SL);
                            } else {
                                nowFormat = String.valueOf(detail.deal);
                            }
                        }
                    }
                    // 判断是否需要迂回
                    if (nodeDetail.round_about && roundabout == 1) {
                        UIUpdate.detailLog(TAG, "[出征] 尝试进行迂回");
                        CommonUtil.delay(1000);
                        SkipWarBean skipWarBean = challengeSkipWar();
                        if (skipWarBean.isSuccess == 0) {
                            UIUpdate.detailLog(TAG, "[出征] 迂回失败, 开始判定");
                            CommonUtil.delay(1000);
                            skipFailCount++;
                            if (configBean.skipMax <= skipFailCount) {
                                UIUpdate.detailLog(TAG, "[出征] 迂回次数达到最大, 进行SL");
                                CommonUtil.delay(1000);
                                throw new ChallengeException(ChallengeException.EXCEPTION_SL);
                            }
                        } else {
                            UIUpdate.detailLog(TAG, "[出征] 迂回成功");
                            CommonUtil.delay(1000);
                            continue;
                        }
                    }
                }
                // ------------------开始战斗----------------
                CommonUtil.delay(2000);
                DealtoBean dealtoBean = challengeDealTo(nowNode, this.fleet, nowFormat);
                if (nodeType == 1 || nodeType == 2) {
                    // 正常点需要延迟
                    counter.battleNumAdd();
                    int randomInt = CommonUtil.randomInt(10, 15);
                    UIUpdate.detailLog(TAG, "[出征] 开始战斗, 等待" + randomInt + "s");
                    CommonUtil.delay(randomInt*1000);
                } else if (nodeType == 3 || nodeType == 5) {
                    // 资源点或收费站
                    if (pveNode.gain != null || pveNode.loss != null) {
                        String access = pveNode.gain != null? "获得": "损失";
                        HashMap<String, Integer> res = pveNode.gain != null ? pveNode.gain: pveNode.loss;
                        String log = "";
                        for (String resId: res.keySet()) {
                            String resName = gameConstant.getResName(resId);
                            log += resName != null? (resName + ":" + res.get(resId) + " "): "";
                        }
                        log = String.format("[出征] 资源点, %s %s", access, log);
                        Log.i(TAG, log);
                        UIUpdate.log(log);
                        CommonUtil.delay(2000);
                    }
                    if (nodeDetail.sl) {  // 资源点进行SL
                        UIUpdate.detailLog(TAG, "[出征] 资源点, 进行SL");
                        CommonUtil.delay(2000);
                        return Finish.FINISH;
                    }
                    if (isLastPoint) {
                        // 完成任务, 回港
                        UIUpdate.detailLog(TAG, "[出征] 完成任务, 回港");
                        CommonUtil.delay(2000);
                        return Finish.FINISH;
                    }
                    continue;
                } else if (nodeType == 4) {  // 空点, 继续走
                    continue;
                }
                // -------------进行夜战结算-----------
                UIUpdate.detailLog(TAG, "[出征] 准备进行夜战或结算");
                CommonUtil.delay(2000);
                GetResultBean resultBean = challengeGetWarResult(head,nodeDetail.night && dealtoBean.warReport.canDoNightWar == 1);  // 判断是否进行夜战
                if (nodeDetail.night && dealtoBean.warReport.canDoNightWar == 1) {
                    int randomInt = CommonUtil.randomInt(10, 20);
                    UIUpdate.detailLog(TAG, "[出征] 夜战中, 等待" + randomInt + "s");
                    CommonUtil.delay(randomInt*1000);
                }
                String [] assess = {"-", "SS", "S", "A", "B", "C", "D"};
                String resultLevel = assess[resultBean.warResult.resultLevel];
                // 获取mvp
                String mvp = "-";
                for (int i=0; i<ships.size(); i++) {
                    GetResultBean.ShipResult result = resultBean.warResult.selfShipResults.get(i);
                    if (result.isMvp == 1) {
                        mvp = userData.getShipName(ships.get(i));
                    }
                }
                String newShipName = "-";
                if (resultBean.newShipVO != null) {  // 出新船
                    ShipVO shipVO = resultBean.newShipVO.get(0);
                    newShipName = gameConstant.getShipName(resultBean.newShipVO.get(0).shipCid);
                    // 出船的显示和锁船
                    if (shipVO != null) {
                        userData.allShipAdd(shipVO);
                        if (!userData.isUnlock(shipVO.shipCid)) {
                            // 出新船
                            UIUpdate.log(String.format("[重要] 出新船 <%s> 锁船", gameConstant.getShipName(shipVO.shipCid)));
                            CommonUtil.delay(2000);
                            netSender.boatLock(shipVO.id);
                        }
                    }
                }
                UIUpdate.log(TAG, String.format("[出征] %s点%s 评价:%s MVP:%s 出:<%s>", mapName, nowFlag, resultLevel, mvp, newShipName));
                CommonUtil.delay(1000);
                // 战利品测试
                if (resultBean.dropSpoils != null && resultBean.dropSpoils.equals("1")) {
                    UIUpdate.log(TAG, "[出征] 获得 战利品 *1");
                }
                // 血量更新与判断
                userData.allShipSetAllShipVO(resultBean.shipVO);
                for (Integer ship : ships) {
                    UserShipVO userShipVO = userData.allShip.get(ship);
                    if (userShipVO.battleProps.hp < userShipVO.battlePropsMax.hp / 4.0) {  // 大破回港
                        throw new ChallengeException(ChallengeException.EXCEPTION_BROKEN);
                    }
                }
                // 是否应该回港
                if (isLastPoint) {
                    // 完成任务, 回港
                    UIUpdate.detailLog(TAG, "[出征] 完成任务, 回港");
                    CommonUtil.delay(2000);
                    return Finish.FINISH;
                } else {
                    UIUpdate.detailLog(TAG, "[出征] 完成, 进行下一点");
                    CommonUtil.delay(2000);
                }
            }

        } catch (OperateException e) {
            Log.e(TAG,"[出征] 出征" + e.getMessage());
        } catch (HmException e) {
            UIUpdate.log("[出征] 错误:" + e.toString());
            return Finish.ERROR;
        } catch (ChallengeException e) {
            switch (e.getCode()) {
                case ChallengeException.EXCEPTION_REPAIR:
                    return Finish.REPAIR;
                case ChallengeException.EXCEPTION_SL:
                    counter.slNumAdd();
                    return Finish.SL;
                case ChallengeException.EXCEPTION_BROKEN:
                    return Finish.BROKEN;
            }
        } catch (Exception e) {
            UIUpdate.log("[出征] 错误:" + e.getMessage() + "\n" + "可在错误日志内查看具体错误");
            Util.getErrMsg(e);
            return Finish.ERROR;
        } finally {
            CommonUtil.delay(2000);
            try {
                backToPort();
            } catch (Exception e) {
                Log.e(TAG, "[出征] 回港出现问题");
            }
        }
        return Finish.FINISH;

    }

    /**
     * 检测修理
     * @throws ChallengeException, HmException
     */
    private void checkRepair(List<Integer> ships)throws HmException, ChallengeException {
        int present;
        switch (this.repair) {
            case 0:
                present = 50;
                break;
            case 1:
                present = 25;
                break;
            default:
                present = 0;
                break;
        }
        gameFunction.checkFastRepair(ships, present);
        // ----------更新船只血量信息---------
        for (int i=0; i<ships.size(); i++) {
            if ((float)userData.getShipHp(ships.get(i)) / userData.getShipMaxHp(ships.get(i)) < 0.25) {
                throw new ChallengeException(ChallengeException.EXCEPTION_REPAIR);
            }
        }

    }

    /**
     * 当前点是否为最后一点
     * @return 是否
     */
    private boolean isLastNode(PveNode pveNode) {
        if (pveNode.nextNode.size() == 0) {
            return true;
        } else {
            for (int node: pveNode.nextNode) {
                if (configBean.detail.containsKey(userData.getNode(String.valueOf(node)).flag)) {
                    return false;
                }
            }
            return true;
        }
    }

}

class ChallengeException extends Exception {
    public static final int EXCEPTION_REPAIR = 0;
    public static final int EXCEPTION_SL = 1;
    public static final int EXCEPTION_BROKEN = 2;

    private int code;
    public ChallengeException(int code) {
        this.code = code;
    }
    public ChallengeException(ChallengeException e) {
        this.code = e.code;
    }
    public int getCode() {
        return this.code;
    }
}
