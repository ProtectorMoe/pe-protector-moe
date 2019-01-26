package ink.z31.liverprotector.game;

import android.util.SparseArray;

import com.google.gson.Gson;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import ink.z31.liverprotector.bean.apiInitGame.FleetVo;
import ink.z31.liverprotector.bean.apiInitGame.Levels;
import ink.z31.liverprotector.bean.apiInitGame.PackageVo;
import ink.z31.liverprotector.bean.apiInitGame.RepairDockVo;
import ink.z31.liverprotector.bean.apiInitGame.UserDataBean;
import ink.z31.liverprotector.bean.apiInitGame.UserShipVO;
import ink.z31.liverprotector.bean.pveGetPveData.PveDataBean;
import ink.z31.liverprotector.bean.pveGetPveData.PveNode;

public class UserData {
    private static UserData userData = new UserData();
    private UserData(){}
    public static UserData getInstance(){
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
    public long oil;
    public long ammo;
    public long steel;
    public long aluminium;
    public int shipNumTop;
    // ------------------- 解析用户数据 ----------------------
    public void parseUserData(String user_data){
        UserDataBean userBaseData = (new Gson()).fromJson(user_data, UserDataBean.class);
        //获取用户基础数据
        this.uid = userBaseData.userVo.uid;
        this.username = userBaseData.userVo.username;
        this.level = userBaseData.userVo.level;
        this.oil = userBaseData.userVo.oil;
        this.ammo =  userBaseData.userVo.ammo;
        this.steel = userBaseData.userVo.steel;
        this.aluminium = userBaseData.userVo.aluminium;
        this.shipNumTop = userBaseData.userVo.shipNumTop;
        //用户舰队
        this.setFleet(userBaseData.fleetVo);
        //用户船只
        this.setAllShip(userBaseData.userShipVO);
        //远征数据
        this.setAllExplore(userBaseData.pveExploreVo.levels);
        // 包裹信息
        this.setPackage(userBaseData.packageVo);
        // 澡堂信息
        this.setRepairDockVo(userBaseData.repairDockVo);
    }
    // ----------------- 点数数据 -----------------
    public HashMap<String, PveNode> pveData = new HashMap<>();
    public void getPveNode(String pveStringData){
        pveData.clear();
        PveDataBean pveDataBean = (new Gson()).fromJson(pveStringData, PveDataBean.class);
        for(PveNode node: pveDataBean.pveNode){
            this.pveData.put(node.id, node);
        }
    }
    // -------------------用户舰队------------------
    public SparseArray<List<Integer>> fleet = new SparseArray<>();
    //刷新船只的舰队信息
    public void setFleet(List<FleetVo> fl)
    {
        fleet.clear();
        for(int i=0; i<fl.size(); i++){
            fleet.put(i, fl.get(i).ships);
        }
    }
    // -------------------用户船只------------------
    public SparseArray<UserShipVO> allShip = new SparseArray<>();
    //重置所有船只信息
    public void setAllShip(List<UserShipVO> ships)
    {
        allShip.clear();
        for (UserShipVO ship: ships)
        {
            allShip.put(ship.id, ship);
        }
    }
    //添加一个新的船只
    public void addAllShip(UserShipVO ship)
    {
        allShip.put(ship.id, ship);
    }
    //删除一个船只数据
    public void delAllShip(int id)
    {
        allShip.remove(id);
    }

    // ----------------------远征数据-----------------
    public Map<String, Levels> allExplore = new HashMap<>();
    //刷新远征数据
    public void setAllExplore(List<Levels> explores)
    {
        allExplore.clear();
        for (Levels explore: explores)
        {
            allExplore.put(explore.exploreId, explore);
        }
    }
    //添加一个远征数据
    public void addAllExplore(Levels explore)
    {
        allExplore.put(explore.exploreId, explore);
    }
    //删除一个远征数据
    public void delAllExplore(String exploreId)
    {
        allExplore.remove(exploreId);
    }
    // ---------------------已经拥有船只信息-------------------
    public List<Long> unlockedShip = new ArrayList<>();
    //添加一个船只
    public void addUnlockedShip(Long shipCid)
    {
        unlockedShip.add(shipCid);
    }
    //设置船只信息
    public void setUnlockedShip(List<Object> s)
    {
        unlockedShip.clear();
        for (Object e: s){
            unlockedShip.add(Long.valueOf(String.valueOf(e)));
        }
    }
    // -----------------------澡堂数据-------------------------
    public List<RepairDockVo> repairDockVo = new ArrayList<>();
    // 解析澡堂数据
    public void setRepairDockVo(List<RepairDockVo> dockVos){
        repairDockVo.clear();
        repairDockVo = dockVos;
    }

    // ---------------------package的数据----------------------
    private static final int FAST_REPAIR_PACKAGE = 541;  // 快修
    private static final int FAST_BUILD_PACKAGE = 141;  // 快建
    private static final int BLUE_MAP_SHIP_PACKAGE = 241;  // 船只蓝图
    private static final int BLUE_MAP_EQUIPMENT_PACKAGE = 741;  //装备蓝图

    private static final int CV_CUBE_PACKAGE = 10141;
    private static final int BB_CUBE_PACKAGE = 10241;
    private static final int CL_CUBE_PACKAGE = 10341;
    private static final int DD_CUBE_PACKAGE = 10441;
    private static final int SS_CUBE_PACKAGE = 10541;

    public int fastRepair = 0;
    public int fastBuild = 0;
    public int blueShipMap = 0;
    public int blueEquipmentMap = 0;
    // 解析package数据
    public void setPackage(List<PackageVo> packageVo){
        for(PackageVo packageVo1: packageVo){
            switch (packageVo1.itemCid){
                case FAST_REPAIR_PACKAGE:
                {
                    this.fastRepair = packageVo1.num;
                    break;
                }
                case FAST_BUILD_PACKAGE:
                {
                    this.fastBuild = packageVo1.num;
                    break;
                }
                case BLUE_MAP_SHIP_PACKAGE:
                {
                    blueShipMap = packageVo1.num;
                }
                case BLUE_MAP_EQUIPMENT_PACKAGE:
                {
                    blueEquipmentMap = packageVo1.num;
                }

            }
        }
    }
}

