package moe.protector.pe.game;

import android.util.Log;

import moe.protector.pe.util.DateUtil;
import moe.protector.pe.util.EventBusUtil;

public class UIUpdate {
    public static StringBuilder stringBuilder = new StringBuilder();

    public static void log(String data) {
        new EventBusUtil(EventBusUtil.EVENT_LOG_ADD,
                String.format("%s  %s",
                        DateUtil.timeStamp2Date(DateUtil.timeStamp(), "HH:mm:ss"),
                        data)).post();
    }

    public static void log(String TAG, String data) {
        data = String.format("%s  %s",
                DateUtil.timeStamp2Date(DateUtil.timeStamp(), "HH:mm:ss"),
                data);
        new EventBusUtil(EventBusUtil.EVENT_LOG_ADD,data ).post();
        Log.i(TAG, data);
    }

    public static void detailLog(String data) {
        data = String.format("%s  %s",
                DateUtil.timeStamp2Date(DateUtil.timeStamp(), "HH:mm:ss"),
                data);
        new EventBusUtil(EventBusUtil.EVENT_DETAIL_LOG_ADD, data).post();
    }

    public static void detailLog(String TAG, String data) {
        data = String.format("%s  %s",
                DateUtil.timeStamp2Date(DateUtil.timeStamp(), "HH:mm:ss"),
                data);
        new EventBusUtil(EventBusUtil.EVENT_DETAIL_LOG_ADD, data).post();
        Log.i(TAG, data);
    }
}
