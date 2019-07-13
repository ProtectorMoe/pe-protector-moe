package ink.z31.liverprotector.bean;

import java.util.List;

import ink.z31.liverprotector.bean.common.DockVo;
import ink.z31.liverprotector.bean.common.EquipmentVo;
import ink.z31.liverprotector.bean.common.FleetVo;
import ink.z31.liverprotector.bean.common.PackageVo;
import ink.z31.liverprotector.bean.common.PveExploreVo;
import ink.z31.liverprotector.bean.common.RepairDockVo;
import ink.z31.liverprotector.bean.common.TaskVo;
import ink.z31.liverprotector.bean.common.UserShipVO;
import ink.z31.liverprotector.bean.common.UserVo;

public class UserDataBean {
    public UserVo userVo;
    public List<UserShipVO> userShipVO;
    public List<EquipmentVo> equipmentVo;
    public List<DockVo> dockVo;
    public List<RepairDockVo> repairDockVo;
    public List<FleetVo> fleetVo;
    public List<PackageVo> packageVo;
    public List<String> unlockShip;
    public List<String> unlockEquipment;
    public List<TaskVo> taskVo;
    public PveExploreVo pveExploreVo;

    public static class CurrentPveVo {
        public int pveId;
        public int pveLevelId;
    }
    public CurrentPveVo currentPveVo;
}
