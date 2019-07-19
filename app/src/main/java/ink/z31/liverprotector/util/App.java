package ink.z31.liverprotector.util;


import android.app.Application;
import android.content.Context;

import org.litepal.LitePal;

public class App extends Application {
    private static Context mContext;

    @Override
    public void onCreate() {
        super.onCreate();
        LitePal.initialize(this);
        mContext = getApplicationContext();
    }
    public static Context getContext(){
        return mContext;
    }

}
