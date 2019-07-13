package ink.z31.liverprotector.bean.common;

public class UserShipVO {
    public int id;
    public String title;
    public int level;
    public int exp;
    public int fleet_id;
    public int love;
    public int isLocked;
    public int shipCid;
    public int type;

    public class BattleProps {
        public int hp;
        public int atk;
        public int def;
        public int torpedo;
        public int oil;
        public int ammo;
        public int aluminium;
    }
    public BattleProps battleProps;

    public class BattlePropsMax {
        public int hp;
        public int atk;
        public int def;
        public int torpedo;
        public int oil;
        public int ammo;
        public int aluminium;
    }
    public BattlePropsMax battlePropsMax;
}
