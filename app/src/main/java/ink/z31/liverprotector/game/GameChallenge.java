package ink.z31.liverprotector.game;

import android.util.Log;
import android.util.SparseIntArray;

import com.alibaba.fastjson.JSON;

import org.litepal.LitePal;

import java.util.ArrayList;
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

    public GameChallenge(TaskBean taskBean, String fleet, int repair) throws OperateException{
        // 初始化数据
        this.taskBean = taskBean;
        this.configName = taskBean.name;
        this.fleet = fleet;
        this.repair = repair;
        // 读取配置名称
        List<MapConfigBean> list = LitePal
                .limit(1)
                .where("name=?", this.configName)
                .find(MapConfigBean.class);
        String config;
        if (list.size() != 0) {
            config = list.get(0).data;
            configBean = JSON.parseObject(config, PathConfigBean.class);
            this.map = configBean.map;
        } else {
            throw new OperateException("解析");
        }
    }

    // 返回值
    public enum Finish{
        FINISH, SL, STOP500, ERROR, CRITICAL, REPAIR
    }



    // 当前数据寄存
    private int skipFailCount = 0;
    private String nowNode;
    private String nowFlag;
    private FleetVo fleetVo;
    private List<Integer> ships;
    private PveNode pveNode;
    private boolean isLastPoint;
    private int nodeType;
    private boolean needSL;

    public Finish execute() {

        try {
            //-------------战前准备页面---------------
            // 进行出征前准备
            fleetVo = userData.getFleet().get(fleet);
            ships = fleetVo.ships;
            // -----------进行补给------------
            gameFunction.checkSupply(ships);
            // -----------检测修理----------
            checkRepair();
            // -------------检测船舱-------------

            // ----------------出征页面---------------------
            // 开始出征
            netSender.battleChallenge(this.head, this.map, this.fleet);
            try {
                while (true) {  // 出征总循环
                    // ----------------选路页面-------------
                    Log.i(TAG, "出征 -- 进行选路");
                    nowNode = challengeNewNext();  // 获取当前路径点
                    pveNode = userData.getNode(nowNode);  // 获取当前点数据
                    nowFlag = pveNode.flag;  // 当前点旗帜
                    isLastPoint = isLastNode();  // 是否为最后一点
                    if (!configBean.detail.containsKey(nowFlag)) {  // 当前点是否为期望点
                        throw new ChallengeException(ChallengeException.EXCEPTION_SL); //  进行SL
                    }
                    int nodeType = Integer.valueOf(pveNode.nodeType);  // 当前点的类型
                    int roundabout = Integer.valueOf(pveNode.roundabout);  // 当前点是否可以迂回
                    PathConfigBean.Detail nodeDetail = configBean.detail.get(nowNode);  // 当前点的全部数据
                    if (nodeDetail == null) {
                        throw new OperateException("读取详细信息失败!");
                    }
                    String nowFormat = nodeDetail.format;  // 初始化阵形数据
                    List<PathConfigBean.NodeDetail> flagDetails = nodeDetail.detail;  // 当前点的路径数据
                    // 1:普通点, 2:BOSS点, 3:资源点 4:待机点, 5:收费站
                    if (nodeType == 1 || nodeType == 2) {
                        // --------------开始索敌-------------
                        Log.i(TAG, "出征 -- 进行索敌");
                        SpyBean spyBean = challengeSpy();  // 获取索敌数据

                        // 索敌失败SL
                        if (spyBean.enemyVO.isFound == 0 && nodeDetail.spyFailSl) {
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
                            if (enemyNum.indexOfKey(detail.enemy) > 0 && enemyNum.get(detail.enemy) > detail.num) {
                                if (detail.deal == 0) {
                                    throw new ChallengeException(ChallengeException.EXCEPTION_SL);
                                } else {
                                    nowFormat = String.valueOf(detail.deal);
                                }
                            }
                        }
                        // 判断是否需要迂回
                        if (nodeDetail.round_about && roundabout == 1) {
                            SkipWarBean skipWarBean = challengeSkipWar();
                            if (skipWarBean.isSuccess == 0) {
                                skipFailCount++;
                                if (configBean.skipMax <= skipFailCount) {
                                    throw new ChallengeException(ChallengeException.EXCEPTION_SL);
                                }
                            }
                        }
                    }
                    // ------------------开始战斗----------------
                    DealtoBean dealtoBean = challengeDealTo(nowNode, this.fleet, nowFormat);
                    if (nodeType == 1 || nodeType == 2) {
                        // 正常点需要延迟
                        CommonUtil.delay(CommonUtil.randomInt(15, 20));
                    } else if (nodeType == 3 || nodeType == 4) {
                        // 资源点或收费站
                        if (pveNode.gain != null || pveNode.loss != null) {
                            // TODO 资源变动
                        }
                        if (nodeDetail.sl) {  // 资源点进行SL
                            throw new ChallengeException(ChallengeException.EXCEPTION_SL); //  进行SL
                        }
                    }
                    // -------------进行夜战-----------
                    GetResultBean resultBean = challengeGetWarResult(nodeDetail.night || dealtoBean.warReport.canDoNightWar == 1);  // 判断是否进行夜战
                    String [] assess = {"-", "SS", "S", "A", "B", "C", "D"};
                    String resultLevel = assess[resultBean.warResult.resultLevel];
                    String mvp = "-";
                    for (int i=0; i<ships.size(); i++) {
                        GetResultBean.ShipResult result = resultBean.warResult.selfShipResults.get(i);
                        if (result.isMvp == 1) {
                            mvp = userData.getShipName(ships.get(i));
                        }
                    }
                    userData.allShipSetAllShipVO(resultBean.newShipVO);
                    String newShipName = resultBean.newShipVO.size() > 0? newShipName = gameConstant.getShipName(resultBean.newShipVO.get(0).shipCid): "-";
                    // TODO 出新船的显示和锁船

                    // TODO 显示评价和MVP和打捞
                    Log.i(TAG, String.format("出征 -- 结算 完成%s的点%s,评价:%s MVP:%s 打捞:%s", nowFlag, this.map, resultLevel, mvp, newShipName));
                    // TODO 血量判断

                    // TODO 是否应该回港


                }
            } catch (ChallengeException e) {
                // TODO 回港处理

                // TODO SL处理

            }








        } catch (OperateException e) {
            Log.e(TAG,"出征" + e.getMessage());
        } catch (HmException e) {
            Log.e(TAG,"出征错误" + e.toString());
        } catch (ChallengeException e) {
            switch (e.getCode()) {
                case ChallengeException.EXCEPTION_REPAIR:
                    return Finish.REPAIR;
            }
        }






        return null;

    }

    /**
     * 检测修理
     * @throws HmException
     * @throws ChallengeException
     */
    private void checkRepair()throws HmException, ChallengeException {
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
        List<Integer> lowHp = new ArrayList<>();
        for (int i=0; i<ships.size(); i++) {
            if (userData.getShipHp(ships.get(i)) < 25) {
                lowHp.add(1);
            }
        }
        if (lowHp.size() > 0) {
            throw new ChallengeException(ChallengeException.EXCEPTION_REPAIR);
        }

    }

    /**
     * 当前点是否为最后一点
     * @return
     */
    private boolean isLastNode() {
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
