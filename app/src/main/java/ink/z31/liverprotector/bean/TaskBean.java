package ink.z31.liverprotector.bean;

public class TaskBean {
    public boolean isFinish() {
        return finish;
    }

    public void finish() {
        this.finish = true;
    }

    private boolean finish = false;

    public String name;
    public String type;
    public int num;
    public int num_max;
    public int locked;

    public static class BattleData {
        public int repair;
        public int fleet;
    }
    public BattleData battleData;

    public static class PvpData {
        public int format;
        public int fleet;
        public boolean night;
        public int repair;
    }
    public PvpData pvpData;


}