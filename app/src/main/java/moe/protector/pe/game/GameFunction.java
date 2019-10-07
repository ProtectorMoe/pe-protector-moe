package moe.protector.pe.game;

import android.util.Log;
import android.util.SparseArray;

import com.alibaba.fastjson.JSON;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;

import moe.protector.pe.bean.DismantleBean;
import moe.protector.pe.bean.FastRepairBean;
import moe.protector.pe.bean.GetExploreBean;
import moe.protector.pe.bean.LoginServerListBean;
import moe.protector.pe.bean.RepairCompleteBean;
import moe.protector.pe.bean.RubdownBean;
import moe.protector.pe.bean.StartExploreBean;
import moe.protector.pe.bean.SupplyBean;
import moe.protector.pe.bean.common.PveExploreVo;
import moe.protector.pe.bean.common.RepairDockVo;
import moe.protector.pe.bean.common.UserShipVO;
import moe.protector.pe.exception.HmException;
import moe.protector.pe.interfaces.FirstLoginCallBack;
import moe.protector.pe.interfaces.ReloginCallBack;
import moe.protector.pe.interfaces.SecondLoginCallBack;
import moe.protector.pe.util.CommonUtil;
import moe.protector.pe.util.Config;
import moe.protector.pe.util.DateUtil;
import moe.protector.pe.util.Holder;
import moe.protector.pe.util.StringUtil;
import moe.protector.pe.util.Util;


public class GameFunction {
    private static final String TAG = "GameFunction";

    private GameFunction() {
    }

    private static GameFunction gameFunction;

    public static GameFunction getInstance() {
        if (gameFunction == null) {
            gameFunction = new GameFunction();
        }
        return gameFunction;
    }

    private static NetSender netSender = NetSender.getInstance();
    private static UserData userData = UserData.getInstance();
    private static GameConstant gameConstant = GameConstant.getInstance();

    /**
     * 检查远征信息
     *
     * @throws HmException Hm游戏服务器问题
     */
    public void checkExplore() throws HmException {
        try {
            List<String> finish = new ArrayList<>();
            long time = new Date().getTime() / 1000;
            for (String exploreId : userData.allExplore.keySet()) {
                PveExploreVo.Levels explore = userData.allExplore.get(exploreId);
                if (explore != null && explore.endTime != 0 && explore.endTime != -1 && time > explore.endTime) {
                    finish.add(explore.exploreId);
                }
            }
            if (finish.size() != 0) {
                StartExploreBean startExploreJson = null;
                for (String key : finish) {
                    //收远征
                    CommonUtil.delay(2000);
                    String exploreData = netSender.exploreGetResult(key);

                    GetExploreBean exploreJson = JSON.parseObject(exploreData, GetExploreBean.class);
                    if (exploreJson.bigSuccess == 1) {
                        Log.i(TAG, "[远征] 远征大成功 " + key);
                        UIUpdate.log("[远征] 远征大成功 " + key.replace("000", "-"));
                    } else {
                        Log.i(TAG, "[远征] 远征成功 " + key);
                        UIUpdate.log("[远征] 远征成功 " + key.replace("000", "-"));
                    }
                    //分析远征数据
                    userData.userVoUpdate(exploreJson.userResVo);
                    CommonUtil.delay(3000);
                    //重新派出远征
                    PveExploreVo.Levels levels = userData.allExplore.get(key);
                    String fleet = levels.fleetId;
                    String startExploreData = netSender.exploreStart(fleet, key);
                    startExploreJson = JSON.parseObject(startExploreData, StartExploreBean.class);
                    Log.i(TAG, "[远征] 开始远征 " + startExploreJson.exploreId);
                }
                //更新远征信息
                if (startExploreJson != null) {
                    userData.exploreSetAll(startExploreJson.pveExploreVo.levels);
                }
            }
        } catch (HmException e) {
            Log.e(TAG, "[错误] 检测远征出现错误:" + e.getMessage());
            throw new HmException(e);
        } catch (Exception e) {
            Log.e(TAG, "[错误] 检测远征出现错误:" + e.getMessage());
            e.printStackTrace();
        }
    }

    /**
     * 对已经修理完的出浴
     *
     * @throws HmException 错误代码
     */
    public void repairComplete() throws HmException {
        Log.i(TAG, "检测出浴...");
        RepairCompleteBean repairCompleteBean = null;
        long nowTime = new Date().getTime() / 1000;
        for (RepairDockVo d : userData.repairDockVo) {
            if (d.locked == 0) {
                int endTime = Integer.valueOf(d.endTime);
                if (endTime > 0 && endTime < nowTime && d.shipId != null) {
                    // 说明需要出浴
                    String repairCompleteString = netSender.repairComplete(d.id, d.shipId);
                    repairCompleteBean = JSON.parseObject(repairCompleteString, RepairCompleteBean.class);
                    String data = "[修理] 出浴:" + gameConstant.getShipName(userData.allShip.get(Integer.valueOf(d.shipId)).shipCid);
                    Log.i(TAG, data);
                    UIUpdate.log(data);
                    // 更新出浴船只信息
                    userData.allShip.put(repairCompleteBean.shipVO.id, repairCompleteBean.shipVO);
                    CommonUtil.delay(3000);
                }
            }
        }
        if (repairCompleteBean != null) {
            userData.setRepairDockVo(repairCompleteBean.repairDockVo);
        }
    }


    /**
     * 寻找所有船只的泡澡信息
     *
     * @throws HmException 参数错误信息
     */
    public void checkShower() throws HmException {
        Log.i(TAG, "寻找泡澡船只...");
        int ableDock = 0;
        List<Integer> waitShowerShip = new ArrayList<>();
        List<Integer> showingShip = new ArrayList<>();
        // 遍历澡堂数据
        for (RepairDockVo d : userData.repairDockVo) {
            if (d.locked == 0) {
                if (d.shipId != null) {
                    showingShip.add(Integer.valueOf(d.shipId));
                }
                long nowTime = new Date().getTime() / 1000;
                int endTime = Integer.valueOf(d.endTime);
                if (endTime == 0) {
                    ableDock++;
                } else if ((endTime < nowTime && endTime > 0)) {
                    netSender.repairComplete(d.id, d.shipId);
                    UIUpdate.log("[修理] 泡澡船只: " + userData.allShip.get(Integer.valueOf(d.shipId)).title);
                    CommonUtil.delay(3000);
                    ableDock++;
                }
            }
        }
        // 遍历船只数据
        if (ableDock != 0) {
            for (int i = 0; i < userData.allShip.size(); i++) {
                int key = userData.allShip.keyAt(i);

                if (showingShip.indexOf(key) != -1) {
                    continue;
                }
                UserShipVO ship = userData.allShip.get(key);
                if (ship.fleet_id != 0 && !Config.isRepairFleet) {
                    continue;
                }
                int hp = ship.battleProps.hp;
                int hpMax = ship.battlePropsMax.hp;
                if (hp != hpMax) {
                    waitShowerShip.add(key);
                }
            }
        }
        RubdownBean rubdownBean = null;
        int min = Math.min(ableDock, waitShowerShip.size());
        for (int i = 0; i < min; i++) {
            CommonUtil.delay(2000);
            int ship = waitShowerShip.get(i);
            netSender.boatRepair(ship);
            Log.d(TAG, "[修理] 泡澡:" + gameConstant.getShipName(userData.allShip.get(ship).shipCid));
            UIUpdate.log("[修理] 泡澡:" + userData.allShip.get(ship).title);
            CommonUtil.delay(3000);
            String rubdownString = netSender.boatRubdown(ship);
            rubdownBean = JSON.parseObject(rubdownString, RubdownBean.class);
            for (RepairDockVo repairDockVo : rubdownBean.repairDockVo) {
                if (repairDockVo.shipId != null && Integer.valueOf(repairDockVo.shipId) == ship) {
                    Log.i(TAG, "[修理] 搓澡:" + userData.allShip.get(ship).title + " 到 " + DateUtil.timeStamp2Date(String.valueOf(repairDockVo.endTime), "HH:mm"));
                }
            }
        }
        if (rubdownBean != null) {
            userData.setRepairDockVo(rubdownBean.repairDockVo);
        }
    }

    public void checkSupply(List<Integer> ships) throws HmException {
        try {
            Log.i(TAG, "[出征] 检测船只补给情况...");
            List<Integer> needSupply = new ArrayList<>();
            // 寻找需要补给的船只
            for (int ship : ships) {
                UserShipVO userShipVO = userData.allShip.get(ship);
                if (userShipVO != null) {
                    if (userShipVO.battleProps.oil != userShipVO.battlePropsMax.oil) {
                        needSupply.add(ship);
                        continue;
                    }
                    if (userShipVO.battleProps.ammo != userShipVO.battlePropsMax.ammo) {
                        needSupply.add(ship);
                        continue;
                    }
                    if (userShipVO.battleProps.aluminium != userShipVO.battlePropsMax.aluminium) {
                        needSupply.add(ship);
                    }
                }
            }
            // 整合需要补给的船只
            if (needSupply.size() != 0) {
                CommonUtil.delay(2000);
                String supplyData = netSender.boatSupplyBoats(needSupply);
                SupplyBean supplyBean = JSON.parseObject(supplyData, SupplyBean.class);
                // 更新船只信息
                userData.userVoUpdate(supplyBean.userVo);
                userData.allShipSetAllShipVO(supplyBean.shipVO);
            }
        } catch (Exception e) {
            Log.e(TAG, "检测补给出错:" + e.getMessage());
            throw new HmException(e);
        }
    }

    /**
     * 检测分解
     *
     * @throws HmException 错误信息
     */
    public boolean checkDismantle() throws HmException {
        if (userData.allShip.size() < userData.shipNumTop) {
            return true;
        }
        if (Setting.getInstance().isDismantleSwitch()) {
            List<Integer> needDismantle = new ArrayList<>();
            Set<String> type = Setting.getInstance().getDismantleType();
            Set<String> saveStar = Setting.getInstance().getDismantleStar();
            boolean isSave = Setting.getInstance().isDismantleEquipment();

            for (int i = 0; i < userData.allShip.size(); i++) {
                UserShipVO userShipVO = userData.allShip.valueAt(i);
                // 分析船只信息
                if (!type.contains("0") && !type.contains(String.valueOf(userShipVO.type))) {
                    continue;
                }
                if (!saveStar.contains(String.valueOf(gameConstant.getStar(userShipVO.shipCid)))) {
                    continue;
                }
                if (userShipVO.isLocked == 1 || userShipVO.fleet_id != 0) {
                    continue;
                }
                needDismantle.add(userShipVO.id);
            }
            if (needDismantle.size() != 0) {
                // 输出消息
                List<String> shipNames = new ArrayList<>();
                for (int i : needDismantle) {
                    shipNames.add(userData.getShipName(i));
                }
                String shipName = StringUtil.listJoinString(" ", shipNames);
                // 开始分解
                String dismantleData = netSender.dismantleBoat(needDismantle, isSave);
                DismantleBean dismantleBean = JSON.parseObject(dismantleData, DismantleBean.class);
                // 更新信息
                userData.userVoUpdate(dismantleBean.userVo);
                if (dismantleBean.equipmentVo != null) {
                    userData.equipmentSetAll(dismantleBean.equipmentVo);
                }
                for (int del : dismantleBean.delShips) {
                    userData.allShipDel(del);
                }
                UIUpdate.log("[分解] 分解船只:" + shipName);
                CommonUtil.delay(2000);
            }
        }
        // 判断是否可以出去
        return userData.allShip.size() < userData.shipNumTop;
    }

    /**
     * 检测快速修理
     *
     * @param shipList 维修船只的编号
     * @param present  修理血量百分比
     */
    public void checkFastRepair(List<Integer> shipList, int present) throws HmException {
        Log.i(TAG, "[修理] 进行修理检测");
        List<Integer> needRepair = new ArrayList<>();
        for (int ship : shipList) {
            UserShipVO userShipVO = userData.allShip.get(ship);
            if (userShipVO != null) {
                if ((float)userShipVO.battleProps.hp / (float)userShipVO.battlePropsMax.hp * 100 <= present) {
                    needRepair.add(userShipVO.id);
                }
            }
        }
        if (needRepair.size() != 0) {
            CommonUtil.delay(2000);
            String repairData = netSender.boatInstantRepairShips(needRepair);
            FastRepairBean fastRepairBean = JSON.parseObject(repairData, FastRepairBean.class);
            // 更新快修信息
            userData.packageSet(fastRepairBean.packageVo);
            // 更新船只信息
            userData.allShipSetAllShipVO(fastRepairBean.shipVOS);
            // 更新用户信息
            userData.userVoUpdate(fastRepairBean.userVo);
            // 获取快修船只
            List<String> shipNames = new ArrayList<>();
            for (int i : needRepair) {
                shipNames.add(userData.getShipName(i));
            }
            String shipName = StringUtil.listJoinString(" ", shipNames);
            Log.i(TAG, "[修理] 修理船只:" + shipName);
            UIUpdate.log("[修理] 修理船只:" + shipName);
        }
    }


    private void reLogin(final ReloginCallBack callBack) {
        FirstLogin firstLogin = FirstLogin.getInstance();
        SecondLogin secondLogin = SecondLogin.getInstance();
        firstLogin.readLogin(new FirstLoginCallBack() {
            @Override
            public void onFinish(SparseArray<LoginServerListBean.ServerList> serverList, int defaultServer) {
                secondLogin.login(new SecondLoginCallBack() {
                    @Override
                    public void onFinish() {
                        callBack.onFinish();
                    }

                    @Override
                    public void onError(String errMsg) {
                        callBack.onError(errMsg);
                    }
                });
            }

            @Override
            public void onError(String errMsg) {
                callBack.onError(errMsg);
            }
        }, (data) -> {

        });
    }

    public boolean reLogin() {
        final Holder holder = new Holder(false);
        holder.setHoldInt(0);
        while (!holder.isHoldBool()) {
            if (holder.getHoldInt() >= 5) {
                UIUpdate.log("[致命] 登录游戏重试次数过多, 停止任务");
                return false;
            }
            gameFunction.reLogin(new ReloginCallBack() {
                @Override
                public void onFinish() {
                    holder.setHoldBool(true);
                }

                @Override
                public void onError(String errMsg) {
                    Util.putErrMsg(errMsg);
                    UIUpdate.log("[错误] 重新登录游戏出错");
                    holder.setHoldInt(holder.getHoldInt() + 1);
                }
            });
            UIUpdate.detailLog("[错误] 登录游戏出错, 进行重试");
        }
        return true;
    }



}
