package ink.z31.liverprotector.game;

import android.support.v4.util.LongSparseArray;
import android.util.SparseArray;
import android.util.SparseIntArray;

import com.alibaba.fastjson.JSON;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import ink.z31.liverprotector.bean.PveDataBean;
import ink.z31.liverprotector.bean.UserDataBean;
import ink.z31.liverprotector.bean.common.EquipmentVo;
import ink.z31.liverprotector.bean.common.FleetVo;
import ink.z31.liverprotector.bean.common.PackageVo;
import ink.z31.liverprotector.bean.common.PveExploreVo;
import ink.z31.liverprotector.bean.common.PveNode;
import ink.z31.liverprotector.bean.common.RepairDockVo;
import ink.z31.liverprotector.bean.common.ShipVO;
import ink.z31.liverprotector.bean.common.UserShipVO;
import ink.z31.liverprotector.bean.common.UserVo;


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
        for (Object o : userBaseData.unlockShip) {
            this.addUnlockedShip(Integer.valueOf(String.valueOf(o)).longValue());
        }
        // 装备信息
        this.equipmentSetAll(userBaseData.equipmentVo);
    }

    // ----------------- 更新用户数据--------------
    public void UserVoUpdata(UserVo userVo) {
        userBaseData.userVo.ammo = userVo.ammo;
        userBaseData.userVo.oil = userVo.oil;
        userBaseData.userVo.aluminium = userVo.aluminium;
        userBaseData.userVo.steel = userVo.steel;
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

    /**
     * 获取最新的点数信息
     *
     * @param pveStringData String类型的数据,由登录传过来
     */
    public void pveNodeGet(String pveStringData) {
        pveData.clear();
        PveDataBean pveDataBean = JSON.parseObject(pveStringData, PveDataBean.class);
        for (PveNode node : pveDataBean.pveNode) {
            this.pveData.put(node.id, node);
        }
    }


    public PveNode getNode(String id) {
        return pveData.get(id);
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
        allShip.put(ship.id, ship);
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

    /**
     * 添加一个远征数据
     *
     * @param explore
     */
    public void addExplore(PveExploreVo.Levels explore) {
        allExplore.put(explore.exploreId, explore);
    }

    /**
     * 删除一个远征数据
     *
     * @param exploreId
     */
    public void delExplore(String exploreId) {
        allExplore.remove(exploreId);
    }

    // ---------------------已经拥有船只信息-------------------
    public List<Long> unlockedShip = new ArrayList<>();

    /**
     * 添加一个船只信息
     *
     * @param shipCid
     */
    public void addUnlockedShip(Long shipCid) {
        unlockedShip.add(shipCid);
    }

    /**
     * 设置已经解锁的用户船只信息
     *
     * @param s
     */
    public void unlockedShipSet(List<Object> s) {
        unlockedShip.clear();
        for (Object e : s) {
            unlockedShip.add(Long.valueOf(String.valueOf(e)));
        }
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
        for (PackageVo packageVo1 : packageVo) {
            packages.put(packageVo1.itemCid, packageVo1.num);
        }
    }

    public int packageGet(int cid) {
        return packages.get(cid);
    }
}
