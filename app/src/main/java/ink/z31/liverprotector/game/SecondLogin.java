package ink.z31.liverprotector.game;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import ink.z31.liverprotector.util.Config;

public class SecondLogin {
    private SecondLogin(){}
    private static SecondLogin secondLogin = new SecondLogin();
    public static SecondLogin getInstance(){
        return secondLogin;
    }

    public void login(){
        //登录发送用户数据
        Map<String, String> userPhoneData = new HashMap<>();
        userPhoneData.put("client_version", Config.version);
        userPhoneData.put("phone_type", "huawei-tag-al00");
        userPhoneData.put("phone_version", "5.1.1");
        userPhoneData.put("ratio", "1280*720");
        userPhoneData.put("service", "CHINA-MOBILE");
        //设备随机数
        Random random = new Random(Integer.valueOf(Config.userId).longValue());
        StringBuilder udid = new StringBuilder();
        for (int i=0;i<15;i++)
        {
            udid.append(random.nextInt(10));
        }
        userPhoneData.put("udid", udid.toString());
        userPhoneData.put("source", "android");
        userPhoneData.put("affiliate", "WIFI");

    }
}
