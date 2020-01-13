package moe.protector.pe.util;

import android.util.Log;

import org.greenrobot.eventbus.EventBus;

public class EventBusUtil {
    public static final int EVENT_TASK_CHANGE = 0;
    public static final int EVENT_LOG_ADD = 1;
    public static final int EVENT_LOGIN_FINISH = 2;
    public static final int EVENT_RES_CHANGE = 3;
    public static final int EVENT_FLEET_CHANGE = 4;
    public static final int EVENT_NOW_TASK_CHANGE = 5;
    public static final int EVENT_DETAIL_LOG_ADD = 6;

    private int code;
    private String message;
    private String tag;

    public EventBusUtil(String TAG, int code, String message) {
        this.code = code;
        this.message = message;
        this.tag = TAG;
    }

    public EventBusUtil(String TAG, int code) {
        this.code = code;
        this.message = "未说明";
        this.tag = TAG;
    }

    public void post() {
        Log.v("EventBusUtil", "[EventBus]" + this.tag + this.code + this.message);
        EventBus.getDefault().post(this);
    }

    public int getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }

    public String getTAG() {
        return this.tag;
    }
}
