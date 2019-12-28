package moe.protector.pe.game;

import moe.protector.pe.util.EventBusUtil;

public class Counter {
    private static final String TAG = "Counter";
    private Counter () {}
    private static Counter mCounter;
    public static Counter getInstance() {
        if (mCounter == null) mCounter = new Counter();
        return mCounter;
    }

    private int oil;
    private int ammo;
    private int steel;
    private int al;

    private int battleNum = 0;
    private int nodeNum = 0;
    private int finishNum = 0;
    private int slNum = 0;

    public void init(int oil, int ammo, int steel, int al) {
        this.oil = oil;
        this.ammo = ammo;
        this.steel = steel;
        this.al = al;
    }

    public int getOil() {
        return oil;
    }

    public int getAmmo() {
        return ammo;
    }

    public int getSteel() {
        return steel;
    }

    public int getAl() {
        return al;
    }

    public int getBattleNum() {
        return battleNum;
    }

    public int getNodeNum() {
        return nodeNum;
    }

    public int getFinishNum() {
        return finishNum;
    }

    public int getSlNum() {
        return slNum;
    }

    public void battleNumAdd() {
        battleNum++;
        new EventBusUtil(TAG, EventBusUtil.EVENT_RES_CHANGE).post();
    }
    public void slNumAdd() {
        slNum++;
        new EventBusUtil(TAG, EventBusUtil.EVENT_RES_CHANGE).post();
    }
    public void nodeNumAdd() {
        nodeNum++;
        new EventBusUtil(TAG, EventBusUtil.EVENT_RES_CHANGE).post();
    }
    public void finishNumAdd() {
        finishNum++;
        new EventBusUtil(TAG, EventBusUtil.EVENT_RES_CHANGE).post();
    }


}
