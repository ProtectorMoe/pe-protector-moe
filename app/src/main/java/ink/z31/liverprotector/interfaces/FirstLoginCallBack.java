package ink.z31.liverprotector.interfaces;

import android.util.SparseArray;

import java.util.List;

import ink.z31.liverprotector.bean.indexHmlogin.ServerList;
import ink.z31.liverprotector.game.FirstLogin;

public interface FirstLoginCallBack {
    void onFinish(SparseArray<ServerList> serverList, int defaultServer);
    void onError(String errMsg);
}
