package ink.z31.liverprotector.util;

import android.util.Log;

import java.io.PrintWriter;
import java.io.StringWriter;

public class Util {
    private static final String TAG = "Util";
    public static String getErrMsg(Exception e) {
        StringWriter sw = new StringWriter();
        PrintWriter pw = new PrintWriter(sw);
        e.printStackTrace(pw);
        Config.errMsg.append("\r\n")
                .append(DateUtil.timeStamp2Date(DateUtil.timeStamp(), null))
                .append("\r\n")
                .append(sw.toString())
                .append("\r\n");
        Log.e(TAG, sw.toString());
        return sw.toString();
    }

    public static String getErrMsg(Exception e, String errMsg) {
        StringWriter sw = new StringWriter();
        PrintWriter pw = new PrintWriter(sw);
        e.printStackTrace(pw);
        Config.errMsg.append("\r\n")
                .append(DateUtil.timeStamp2Date(DateUtil.timeStamp(), null))
                .append("\r\n")
                .append(errMsg)
                .append("\r\n")
                .append(sw.toString())
                .append("\r\n");
        Log.e(TAG, sw.toString());
        return sw.toString();
    }

    public static void putErrMsg(String errmsg) {
        Config.errMsg.append("\r\n")
                .append(DateUtil.timeStamp2Date(DateUtil.timeStamp(), null))
                .append("\r\n")
                .append(errmsg)
                .append("\r\n");
    }
}
