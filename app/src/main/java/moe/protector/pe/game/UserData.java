package moe.protector.pe.game;

import android.support.v4.util.LongSparseArray;
import android.util.Log;
import android.util.SparseArray;
import android.util.SparseIntArray;

import com.alibaba.fastjson.JSON;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import moe.protector.pe.bean.UserDataBean;
import moe.protector.pe.bean.challenge.PeventBean;
import moe.protector.pe.bean.challenge.PveDataBean;
import moe.protector.pe.bean.common.EquipmentVo;
import moe.protector.pe.bean.common.FleetVo;
import moe.protector.pe.bean.common.PackageVo;
import moe.protector.pe.bean.common.PveBuff;
import moe.protector.pe.bean.common.PveExploreVo;
import moe.protector.pe.bean.common.PveLevel;
import moe.protector.pe.bean.common.PveNode;
import moe.protector.pe.bean.common.RepairDockVo;
import moe.protector.pe.bean.common.ShipVO;
import moe.protector.pe.bean.common.UserResVo;
import moe.protector.pe.bean.common.UserShipVO;
import moe.protector.pe.bean.common.UserVo;
import moe.protector.pe.bean.task.TaskVo;
import moe.protector.pe.bean.task.UpdateTaskVo;
import moe.protector.pe.util.Config;
import moe.protector.pe.util.EventBusUtil;

public class UserData {
    private static final String TAG = "UserData";
    private static UserData userData = new UserData();
    private GameConstant gameConstant = GameConstant.getInstance();

    private UserData() {
    }

    public static UserData getInstance() {
        return userData;
    }

    //获取用户数据
    // 常量代号
    public static final int OIL = 2;
    public static final int AMMO = 3;
    public static final int STEEL = 4;
    public static final int AL = 9;
    // 用户数据
    public String uid;
    public String username;
    public int level;
    public int shipNumTop;
    public int equipmentNumTop;
    public UserDataBean userBaseData = null;


    // ------------------- 解析用户数据 ----------------------
    public void parseUserData(String user_data) {
        userBaseData = JSON.parseObject(user_data, UserDataBean.class);
        //获取用户基础数据
        this.uid = userBaseData.userVo.uid;
        this.username = userBaseData.userVo.username;
        this.level = userBaseData.userVo.level;
        this.shipNumTop = userBaseData.userVo.shipNumTop;
        this.equipmentNumTop = userBaseData.userVo.equipmentNumTop;
        // 用户舰队
        this.fleetSetAll(userBaseData.fleetVo);
        // 用户船只
        this.allShipSetAllUserShipVO(userBaseData.userShipVO);
        // 远征数据
        this.exploreSetAll(userBaseData.pveExploreVo.levels);
        // 包裹信息
        this.packageSet(userBaseData.packageVo);
        // 澡堂信息
        this.setRepairDockVo(userBaseData.repairDockVo);
        // 解锁船只信息
        this.unlockedShipSet(userBaseData.unlockShip);
        // 任务信息
        this.setTaskVo(userBaseData.taskVo);
        // 装备信息
        this.equipmentSetAll(userBaseData.equipmentVo);
        // 记录数据
        if (Config.isFirstLogin) {
            Counter counter = Counter.getInstance();
            counter.init(userBaseData.userVo.oil,
                    userBaseData.userVo.ammo,
                    userBaseData.userVo.steel,
                    userBaseData.userVo.aluminium);
            Config.isFirstLogin = false;
        }
    }

    // ----------------- 更新用户数据--------------
    public void userVoUpdate(UserVo userVo) {
        userBaseData.userVo.ammo = userVo.ammo;
        userBaseData.userVo.oil = userVo.oil;
        userBaseData.userVo.aluminium = userVo.aluminium;
        userBaseData.userVo.steel = userVo.steel;
        new EventBusUtil(TAG + "userVoUpdate", EventBusUtil.EVENT_RES_CHANGE).post();
    }

    public void userVoUpdate(UserResVo userVo) {
        userBaseData.userVo.ammo = userVo.ammo;
        userBaseData.userVo.oil = userVo.oil;
        userBaseData.userVo.aluminium = userVo.aluminium;
        userBaseData.userVo.steel = userVo.steel;
        new EventBusUtil(TAG + "userVoUpdate", EventBusUtil.EVENT_RES_CHANGE).post();
    }

    // ----------------- 装备信息 -----------------
    public LongSparseArray<EquipmentVo> allEquipment = new LongSparseArray<>();

    public void equipmentSet(EquipmentVo equipmentVo) {
        if (equipmentVo != null) {
            allEquipment.put(equipmentVo.equipmentCid, equipmentVo);
        }
    }

    public void equipmentSetAll(List<EquipmentVo> equipmentVos) {
        allEquipment.clear();
        for (EquipmentVo equipmentVo : equipmentVos) {
            allEquipment.put(equipmentVo.equipmentCid, equipmentVo);
        }
    }

    public int equipmentSize() {
        int sum = 0;
        for (int i = 0; i < allEquipment.size(); i++) {
            sum += allEquipment.valueAt(i).num;
        }
        return sum;
    }


    // ----------------- 点数数据 -----------------
    private HashMap<String, PveNode> pveData = new HashMap<>();
    private HashMap<String, PveLevel> pveLevel = new HashMap<>();
    private HashMap<String, PveBuff> pveBuff = new HashMap<>();

    /**
     * 获取最新的点数信息
     *
     * @param pveStringData String类型的数据,由登录传过来
     */
    public void pveNodeGet(String pveStringData) {
        PveDataBean pveDataBean = JSON.parseObject(pveStringData, PveDataBean.class);
        for (PveNode node : pveDataBean.pveNode) {
            this.pveData.put(node.id, node);
        }
        for (PveLevel level : pveDataBean.pveLevel) {
            this.pveLevel.put(level.id, level);
        }
        for (PveBuff buff : pveDataBean.pveBuff) {
            this.pveBuff.put(buff.id, buff);
        }
    }

    public void peventNodeGet(String data) {
        PeventBean pveDataBean = JSON.parseObject(data, PeventBean.class);
        try {
            if (pveDataBean.pveNode != null) {
                for (PveNode node : pveDataBean.pveNode) {
                    this.pveData.put(node.id, node);
                }
            }
            if (pveDataBean.pveEventLevel != null) {
                for (PveLevel level : pveDataBean.pveEventLevel) {
                    this.pveLevel.put(level.id, level);
                }
            }
        } catch (Exception e) {
            Log.e(TAG, "解析Pve数据失败");
        }
    }


    public PveNode getNode(String id) {
        return pveData.get(id);
    }

    public PveLevel getLevel(String id) {
        return pveLevel.get(id);
    }

    public PveBuff getBuff(String id) {
        return pveBuff.get(id);
    }


    // -------------------用户舰队------------------
    public HashMap<String, FleetVo> fleet = new HashMap<>();

    public HashMap<String, FleetVo> getFleet() {
        return fleet;
    }

    /**
     * 设置所有的fleet信息
     *
     * @param fleetVo
     */
    public void fleetSetAll(List<FleetVo> fleetVo) {
        fleet.clear();
        for (FleetVo f : fleetVo) {
            fleet.put(f.id, f);
        }
    }

    public void setSingalFleet(FleetVo fleetVo) {
        fleet.put(fleetVo.id, fleetVo);
    }

    public int getShipHp(int id) {
        UserShipVO shipVO = userData.allShip.get(id);
        return shipVO != null ? shipVO.battleProps.hp : 0;
    }

    public int getShipMaxHp(int id) {
        UserShipVO shipVO = userData.allShip.get(id);
        return shipVO != null ? shipVO.battlePropsMax.hp : 0;
    }

    public String getShipName(int id) {
        UserShipVO shipVO = userData.allShip.get(id);
        return gameConstant.getShipName(shipVO.shipCid);
    }

    // -------------------用户船只------------------
    public SparseArray<UserShipVO> allShip = new SparseArray<>();

    /**
     * 重置所有船只信息
     *
     * @param ships
     */
    public void allShipSetAllUserShipVO(List<UserShipVO> ships) {
        for (UserShipVO ship : ships) {
            allShip.put(ship.id, ship);
        }
    }

    public void allShipSetAllShipVO(List<ShipVO> ships) {
        for (ShipVO ship : ships) {
            allShip.put(ship.id, ship);
        }
    }

    /**
     * 添加一个船只信息
     *
     * @param ship 传过来的信息需要反射复制
     */
    public void allShipAdd(UserShipVO ship) {
        if (ship != null) {
            allShip.put(ship.id, ship);
        }
    }

    //删除一个船只数据
    public void allShipDel(int id) {
        allShip.remove(id);
    }

    // ----------------------远征数据-----------------
    public Map<String, PveExploreVo.Levels> allExplore = new HashMap<>();

    /**
     * 设置所有远征的数据
     *
     * @param explores 远征的列表
     */
    public void exploreSetAll(List<PveExploreVo.Levels> explores) {
        allExplore.clear();
        for (PveExploreVo.Levels explore : explores) {
            allExplore.put(explore.exploreId, explore);
        }
    }


    // ---------------------已经拥有船只信息-------------------
    public List<Integer> unlockedShip = new ArrayList<>();

    /**
     * 添加一个船只信息
     *
     * @param shipCid
     */
    public void addUnlockedShip(int shipCid) {
        unlockedShip.add(shipCid);
    }

    /**
     * 设置已经解锁的用户船只信息
     *
     * @param s
     */
    public void unlockedShipSet(List<String> s) {
        unlockedShip.clear();
        for (String e : s) {
            unlockedShip.add(Integer.valueOf(e));
        }
    }

    public boolean isUnlock(int cid) {
        return this.unlockedShip.contains(cid);
    }

    // -----------------------澡堂数据-------------------------
    public List<RepairDockVo> repairDockVo = new ArrayList<>();

    /**
     * 解析澡堂数据
     *
     * @param dockVos
     */
    public void setRepairDockVo(List<RepairDockVo> dockVos) {
        repairDockVo.clear();
        repairDockVo = dockVos;
    }

    // ---------------------package的数据----------------------
    public static final int PACKAGE_FAST_REPAIR = 541;  // 快修
    public static final int PACKAGE_FAST_BUILD = 141;  // 快建
    public static final int PACKAGE_BLUE_MAP_SHIP = 241;  // 船只蓝图
    public static final int PACKAGE_BLUE_MAP_EQUIPMENT = 741;  //装备蓝图

    public static final int PACKAGE_CV_CUBE = 10141;
    public static final int PACKAGE_BB_CUBE = 10241;
    public static final int PACKAGE_CL_CUBE = 10341;
    public static final int PACKAGE_DD_CUBE = 10441;
    public static final int PACKAGE_SS_CUBE = 10541;


    public SparseIntArray packages = new SparseIntArray();

    /**
     * 解析package数据
     *
     * @param packageVo
     */
    public void packageSet(List<PackageVo> packageVo) {
        if (packageVo != null) {
            for (PackageVo packageVo1 : packageVo) {
                packages.put(packageVo1.itemCid, packageVo1.num);
            }
        }
    }

    public int packageGet(int cid) {
        return packages.get(cid);
    }

    // ------------------------ 任务数据 --------------------------
    public HashMap<String, TaskVo> taskVo = new HashMap<>();
    public void setTaskVo(List<TaskVo> vo) {
        for (TaskVo o : vo) {
            taskVo.put(o.taskCid, o);
        }
    }
    public void updateTaskVo(List<UpdateTaskVo> updateTaskVo) {
        for (UpdateTaskVo vo : updateTaskVo) {
            TaskVo t = taskVo.get(vo.taskCid);
            if (t != null) {
                t.condition = vo.condition;
            }
        }
    }

    void updateTaskVos(List<TaskVo> updateTaskVos) {
        for (TaskVo vo : updateTaskVos) {
            taskVo.put(vo.taskCid, vo);
        }
    }
}
