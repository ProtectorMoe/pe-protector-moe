package moe.protector.pe.bean;

import java.util.List;

import moe.protector.pe.bean.common.DockVo;
import moe.protector.pe.bean.common.EquipmentVo;
import moe.protector.pe.bean.common.FleetVo;
import moe.protector.pe.bean.common.MarketingData;
import moe.protector.pe.bean.common.PackageVo;
import moe.protector.pe.bean.common.PveExploreVo;
import moe.protector.pe.bean.common.RepairDockVo;
import moe.protector.pe.bean.common.UserShipVO;
import moe.protector.pe.bean.common.UserVo;
import moe.protector.pe.bean.task.TaskVo;

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
    public FriendVo friendVo;
    public MarketingData marketingData;

    public static class CurrentPveVo {
        public int pveId;
        public int pveLevelId;
    }

    public static class FriendVo {
        public String sign;
        public String avatar_cid;
        public String username;
    }
    public CurrentPveVo currentPveVo;
}
