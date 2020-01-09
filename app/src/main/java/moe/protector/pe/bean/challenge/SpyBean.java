package moe.protector.pe.bean.challenge;

import java.util.List;

import moe.protector.pe.bean.common.ShipVO;

public class SpyBean {
    public static class EnemyFleet {
        public int id;
        public String title;
        public String formation;
        public int level;
    }

    public static class EnemyVO {
        public int isFound;
        public String successRate;
        public EnemyFleet enemyFleet;
        public List<ShipVO> enemyShips;
        public String canSkip;
    }

    public EnemyVO enemyVO;
}
