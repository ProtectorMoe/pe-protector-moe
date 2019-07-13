package ink.z31.liverprotector.interfaces;

import android.util.SparseArray;

import ink.z31.liverprotector.bean.LoginServerListBean;

public interface FirstLoginCallBack {
    void onFinish(SparseArray<LoginServerListBean.ServerList> serverList, int defaultServer);
    void onError(String errMsg);
}
