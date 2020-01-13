package moe.protector.pe.interfaces;

import android.util.SparseArray;

import moe.protector.pe.bean.login.LoginServerListBean;

public interface FirstLoginCallBack {
    void onFinish(SparseArray<LoginServerListBean.ServerList> serverList, int defaultServer);
    void onError(String errMsg);
}
