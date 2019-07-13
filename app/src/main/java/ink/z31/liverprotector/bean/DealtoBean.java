package ink.z31.liverprotector.bean;

import java.util.List;

import ink.z31.liverprotector.bean.common.ShipVO;

public class DealtoBean {
    public List<ShipVO> shipVO;
    public static class WarReport {
        public String enemyName;
        public int pveType;
        public String isExploreSuccess;
        public int canDoNightWar;
    }
    public WarReport warReport;
}
