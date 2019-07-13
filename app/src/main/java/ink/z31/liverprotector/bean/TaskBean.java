package ink.z31.liverprotector.bean;

public class TaskBean {
    public String name;
    public String type;
    public int num;
    public int num_max;
    public int locked;

    public static class BattleData {
        public int repair;
        public int fleet;
    }
    public BattleData battle_data;
}