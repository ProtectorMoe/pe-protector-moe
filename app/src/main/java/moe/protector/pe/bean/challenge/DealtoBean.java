package moe.protector.pe.bean.challenge;

import java.util.List;

import moe.protector.pe.bean.common.ShipVO;

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
