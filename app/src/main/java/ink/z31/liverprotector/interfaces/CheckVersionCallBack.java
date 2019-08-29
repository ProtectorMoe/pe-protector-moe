package ink.z31.liverprotector.interfaces;

public interface CheckVersionCallBack {
    void onFinish();
    void onUpgrade(String newVersion, String newData);
    void onError(String errMsg);
}
