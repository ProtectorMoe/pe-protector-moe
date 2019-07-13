package ink.z31.liverprotector.util;


import android.app.Application;
import android.content.Context;
import android.os.Handler;
import android.util.SparseArray;

import org.litepal.LitePal;

public class App extends Application {
    private static Context mContext;
    private SparseArray<Handler> handlers = new SparseArray<>();

    public static int HANDLER_MAIN_ACTIVITY = 0;

    @Override
    public void onCreate() {
        super.onCreate();
        LitePal.initialize(this);
        mContext = getApplicationContext();
    }
    public static Context getContext(){
        return mContext;
    }

    public Handler getHandler(int key){
        return handlers.get(key);
    }

    public void setHandler(int key, Handler handler) {
        handlers.put(key, handler);
    }
}
