package moe.protector.pe.bean.task;

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

    // 锁定任务 -1为没锁定
    public String locked;

    public static class BattleData {
        public int repair;
        public int fleet;
    }
    public BattleData battleData;

    public static class PvpData {
        public int format;
        public int fleet;
        public boolean night;
    }
    public PvpData pvpData;

    public static class CampaignData {
        public String campaignMap;
        public int format;
        public int repair;
        public boolean night;
        public String sl;
    }

    public CampaignData campaignData;

    public void lockForever() {
        this.locked = "9999999999999";
    }

    public void lock(String timestamp) {
        this.locked = timestamp;
    }

    public void unlock() {
        this.locked = "-1";
    }

    public boolean isLocked() {
        return !this.locked.equals("-1");
    }
}