package ink.z31.liverprotector.bean;

import java.util.List;

import ink.z31.liverprotector.bean.common.ShipVO;

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
