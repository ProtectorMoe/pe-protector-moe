package ink.z31.liverprotector.game;

import android.util.Log;

import ink.z31.liverprotector.bean.TaskBean;
import ink.z31.liverprotector.exception.HmException;

public class GamePvp extends GameBattle {
    private static final String TAG = "GamePvp";
    private int format;
    private int fleet;
    private boolean night;
    private int repair;
    public GamePvp (TaskBean taskBean){
        this.format = taskBean.pvpData.format;
        this.fleet = taskBean.pvpData.fleet;
        this.night = taskBean.pvpData.night;
        this.repair = taskBean.pvpData.repair;
    }

    public enum Finish {
        FINFSH, ERROR
    }

    public Finish execute() {
        try {
            // TODO pvp逻辑
            throw new HmException("-1");
        } catch (HmException e) {
            Log.e(TAG, "演习出错:" + e.getCode() + e.getMessage());
        }

        return Finish.ERROR;
    }

}
