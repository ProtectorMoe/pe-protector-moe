package moe.protector.pe.interfaces;

public interface CheckVersionCallBack {
    void onFinish();
    void onUpgrade(String newVersion, String newData);
    void onError(String errMsg);
}
