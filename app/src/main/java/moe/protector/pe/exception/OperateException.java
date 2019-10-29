package moe.protector.pe.exception;


import android.util.Log;

public class OperateException extends Exception {
    private static final String TAG = "OperateException";
    private String msg;
    public OperateException(String msg) {
        this.msg = msg;
        Log.e(TAG, "出现错误" + this.msg);
    }

    public OperateException(OperateException error) {
        this.msg = error.msg;
    }

    @Override
    public String getMessage() {
        return this.msg;
    }
}
