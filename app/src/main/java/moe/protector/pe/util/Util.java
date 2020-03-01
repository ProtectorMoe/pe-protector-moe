package moe.protector.pe.util;

import android.content.Context;
import android.util.Log;

import java.io.BufferedWriter;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
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

    public static void putErrMsg(String errMsg) {
        Config.errMsg.append("\r\n")
                .append(DateUtil.timeStamp2Date(DateUtil.timeStamp(), null))
                .append("\r\n")
                .append(errMsg)
                .append("\r\n");
    }

    public static void writeFile(String fileName, String data) {
        FileOutputStream out;
        BufferedWriter writer = null;
        try {
            out = App.getContext().openFileOutput(fileName, Context.MODE_PRIVATE);
            writer = new BufferedWriter(new OutputStreamWriter(out));
            writer.write(data);
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                if (writer != null) {
                    writer.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
