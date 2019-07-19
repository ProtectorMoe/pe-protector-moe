package ink.z31.liverprotector.game;

import android.util.Log;
import android.util.SparseIntArray;

import com.alibaba.fastjson.JSON;

import org.litepal.LitePal;

import java.util.HashMap;
import java.util.List;

import ink.z31.liverprotector.bean.DealtoBean;
import ink.z31.liverprotector.bean.GetResultBean;
import ink.z31.liverprotector.bean.PathConfigBean;
import ink.z31.liverprotector.bean.SkipWarBean;
import ink.z31.liverprotector.bean.SpyBean;
import ink.z31.liverprotector.bean.TaskBean;
import ink.z31.liverprotector.bean.common.FleetVo;
import ink.z31.liverprotector.bean.common.PveNode;
import ink.z31.liverprotector.bean.common.ShipVO;
import ink.z31.liverprotector.bean.common.UserShipVO;
import ink.z31.liverprotector.exception.HmException;
import ink.z31.liverprotector.exception.OperateException;
import ink.z31.liverprotector.sqlite.MapConfigBean;
import ink.z31.liverprotector.util.CommonUtil;

public class GameChallenge extends GameBattle {
    private static final String TAG = "GameChallenge";
    private GameFunction gameFunction = GameFunction.getInstance();
    private UserData userData = UserData.getInstance();
    private NetSender netSender = NetSender.getInstance();
    private GameConstant gameConstant = GameConstant.getInstance();

    private String configName;
    private String fleet;
    private String head = "pve";
    private int repair;
    private PathConfigBean configBean;
    private TaskBean taskBean;
    private String map;

    public GameChallenge(TaskBean taskBean) throws OperateException{
        // 初始化数据
        this.taskBean = taskBean;
        this.configName = taskBean.name;
        this.fleet = String.valueOf(taskBean.battle_data.fleet);
        this.repair = taskBean.battle_data.repair;
        // 读取配置名称
        List<MapConfigBean> list = LitePal
                .limit(1)
                .where("name=?", this.configName)
                .find(MapConfigBean.class);
        if (list.size() != 0) {
            String config = list.get(0).data;
            configBean = JSON.parseObject(config, PathConfigBean.class);
            this.map = configBean.map;
        } else {
            throw new OperateException("解析");
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

        try {
            //-------------战前准备页面---------------
            // 进行出征前准备
            UIUpdate.detailLog(TAG, "[出征] 准备开始出征");
            CommonUtil.delay(2000);
            fleetVo = userData.getFleet().get(fleet);
            ships = fleetVo.ships;
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
            CommonUtil.delay(2000);
            netSender.battleChallenge(this.head, this.map, this.fleet);
            while (true) {  // 出征总循环
                // ----------------选路页面-------------
                UIUpdate.detailLog(TAG, "[出征] 进行选路");
                CommonUtil.delay(2000);
                nowNode = challengeNewNext();  // 获取当前路径点
                counter.nodeNumAdd();
                pveNode = userData.getNode(nowNode);  // 获取当前点数据
                nowFlag = pveNode.flag;  // 当前点旗帜
                isLastPoint = isLastNode(pveNode);  // 是否为最后一点
                UIUpdate.detailLog(TAG, String.format("[出征] 进点%s → %s", nowFlag, configBean.detail.containsKey(nowFlag)? "继续": "SL"));
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
                // 1:普通点, 2:BOSS点, 3:资源点 4:待机点, 5:收费站
                if (nodeType == 1 || nodeType == 2) {
                    // --------------开始索敌-------------
                    CommonUtil.delay(2000);
                    UIUpdate.detailLog(TAG, "[出征] 进行索敌");
                    SpyBean spyBean = challengeSpy();  // 获取索敌数据

                    // 索敌失败SL
                    if (spyBean.enemyVO.isFound == 0 && nodeDetail.spyFailSl) {
                        UIUpdate.detailLog(TAG, "[出征] 索敌失败, 设置需要SL");
                        throw new ChallengeException(ChallengeException.EXCEPTION_SL);
                    }
                    // 取得敌人数量
                    SparseIntArray enemyNum = new SparseIntArray();
                    for (ShipVO shipVO: spyBean.enemyVO.enemyShips) {
                        int type = shipVO.type;
                        if (enemyNum.indexOfKey(type) > 0) {
                            enemyNum.put(type, enemyNum.get(type) + 1);
                        } else {
                            enemyNum.put(type, 1);
                        }
                    }
                    // 判断是否需要SL
                    for (PathConfigBean.NodeDetail detail: flagDetails) {
                        if (enemyNum.indexOfKey(detail.enemy) >= 0) {
                            int num = enemyNum.get(detail.enemy);
                            if ((detail.num <=6 && num >= detail.num) || (detail.num>=6 && num<=detail.num-6)) {
                                if (detail.deal == 0) {
                                    UIUpdate.detailLog(TAG, "[出征] 发现设置敌人, 进行SL");
                                    throw new ChallengeException(ChallengeException.EXCEPTION_SL);
                                } else {
                                    nowFormat = String.valueOf(detail.deal);
                                }
                            }
                        }
                    }
                    // 判断是否需要迂回
                    if (nodeDetail.round_about && roundabout == 1) {
                        UIUpdate.detailLog(TAG, "[出征] 尝试进行SL");
                        SkipWarBean skipWarBean = challengeSkipWar();
                        if (skipWarBean.isSuccess == 0) {
                            skipFailCount++;
                            if (configBean.skipMax <= skipFailCount) {
                                UIUpdate.detailLog(TAG, "[出征] 迂回次数达到最大, 进行SL");
                                throw new ChallengeException(ChallengeException.EXCEPTION_SL);
                            }
                        }
                    }
                }
                // ------------------开始战斗----------------
                CommonUtil.delay(2000);
                DealtoBean dealtoBean = challengeDealTo(nowNode, this.fleet, nowFormat);
                if (nodeType == 1 || nodeType == 2) {
                    // 正常点需要延迟
                    counter.battleNumAdd();
                    int randomInt = CommonUtil.randomInt(15, 25);
                    UIUpdate.detailLog(TAG, "[出征] 开始战斗, 等待" + randomInt + "s");
                    CommonUtil.delay(randomInt*1000);
                } else if (nodeType == 3 || nodeType == 4) {
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
                    }
                    if (nodeDetail.sl) {  // 资源点进行SL
                        UIUpdate.detailLog(TAG, "[出征] 资源点, 进行SL");
                        throw new ChallengeException(ChallengeException.EXCEPTION_SL); //  进行SL
                    }
                }
                // -------------进行夜战结算-----------
                CommonUtil.delay(2000);
                UIUpdate.detailLog(TAG, "[出征] 准备进行夜战或结算");
                GetResultBean resultBean = challengeGetWarResult(nodeDetail.night && dealtoBean.warReport.canDoNightWar == 1);  // 判断是否进行夜战
                if (nodeDetail.night && dealtoBean.warReport.canDoNightWar == 1) {
                    int randomInt = CommonUtil.randomInt(15, 25);
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
                            UIUpdate.log(String.format("[重要] 出新船 %s 锁船", gameConstant.getShipName(shipVO.shipCid)));
                            CommonUtil.delay(2000);
                            netSender.boatLock(shipVO.id);
                        }
                    }
                }
                String log = String.format("[出征] %s点%s 评价:%s MVP:%s 出:%s", this.map.replace("0", "-"), nowFlag, resultLevel, mvp, newShipName);
                UIUpdate.log(TAG, log);
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
                    return Finish.FINISH;
                } else {
                    UIUpdate.detailLog(TAG, "[出征] 完成任务, 进行下一点");

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
            UIUpdate.log("[出征] 错误:" + e.getMessage());
            e.printStackTrace();
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
     * @throws HmException
     * @throws ChallengeException
     */
    private void checkRepair(List<Integer> ships)throws HmException, ChallengeException {
        int present;
        switch (this.repair) {
            case 0:
                present = 50;
                break;
            case 1:
                present = 75;
                break;
            default:
                present = 0;
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
