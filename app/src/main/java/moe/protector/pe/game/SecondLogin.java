package moe.protector.pe.game;

import android.util.Log;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import moe.protector.pe.exception.HmException;
import moe.protector.pe.interfaces.SecondLoginCallBack;
import moe.protector.pe.util.Config;
import moe.protector.pe.util.Util;

public class SecondLogin {
    private static final String TAG = "SecondLogin";

    private SecondLogin() {
    }

    private static SecondLogin secondLogin = new SecondLogin();
    private static UserData userData = UserData.getInstance();

    public static SecondLogin getInstance() {
        return secondLogin;
    }

    // 使用的常量
    private static NetSender netSender = NetSender.getInstance();

    public void login(final SecondLoginCallBack callBack) {
        try {
            //登录发送用户数据
            Map<String, String> userPhoneData = new HashMap<>();
            userPhoneData.put("client_version", Config.version);
            userPhoneData.put("phone_type", android.os.Build.MODEL.replace(" ", "%20"));
            userPhoneData.put("phone_version", android.os.Build.VERSION.RELEASE);
            userPhoneData.put("ratio", "1920*1080");
            userPhoneData.put("service", "CHINA%20MOBILE");
            //设备随机数
            Random random = new Random(Integer.valueOf(Config.userId).longValue());
            StringBuilder udid = new StringBuilder();
            for (int i = 0; i < 15; i++) {
                udid.append(random.nextInt(10));
            }
            userPhoneData.put("udid", udid.toString());
            userPhoneData.put("source", "android");
            userPhoneData.put("affiliate", "WIFI");
            StringBuilder data = new StringBuilder();
            for (String key : userPhoneData.keySet()) {
                data.append(key).append("=").append(userPhoneData.get(key)).append("&");
            }
            data = new StringBuilder(data.substring(0, data.length() - 1));
            netSender.indexLogin(Config.userId, data.toString());
            // 初始化用户基本信息
            String apiInitGame = netSender.apiInitGame();
            userData.parseUserData(apiInitGame);
            // 初始化点数信息
            Config.pveData = netSender.pveGetPveData();
            userData.pveNodeGet(Config.pveData);
            String pveData = netSender.peventGetPveData();
            if (userData.userBaseData.marketingData.continueLoginAward.canGetDay != -1) {
                UIUpdate.log("领取签到奖励");
                netSender.getLoginAward();
                userData.userBaseData.marketingData.continueLoginAward.canGetDay = -1;
            }
            if (pveData != null && pveData.length() > 10 && pveData.contains("{")) {
                userData.peventNodeGet(pveData);
            }
            callBack.onFinish();
        } catch (HmException e) {
            Log.e(TAG, e.getMessage());
            callBack.onError(e.getMessage());
        } catch (Exception e) {
            Log.e(TAG, e.getMessage());
            callBack.onError(Util.getErrMsg(e));
        }
    }
}
