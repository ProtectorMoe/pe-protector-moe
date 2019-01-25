package ink.z31.liverprotector.game;


import java.util.Date;

import ink.z31.liverprotector.exception.HmException;
import ink.z31.liverprotector.util.Config;
import ink.z31.liverprotector.util.Encode;
import ink.z31.liverprotector.util.Requests;



public class NetSender {
    private static NetSender netSender = new NetSender();
    private NetSender(){}  // 私有构造器禁止实例化
    public static NetSender getInstance(){  // 获取实例
        return netSender;
    }

    /**
     * 登录的第一次获取的init数据,貌似没有什么用
     * @return 没有用的String
     */
    public String loginInitConfig(){
        String url = Config.loginApiHead + "1.0/get/initConfig/@self";
        Requests requests = new Requests.Builder()
                .url(url)
                .post("{}")
                .build()
                .execute();
        return requests.text;
    }

    /**
     * 验证token是否过期
     * @param data token数据
     * @return 服务器返回的String
     */
    public String loginUserInfo(String data){
        String url = Config.loginApiHead + "1.0/get/userInfo/@self";
        Requests requests = new Requests.Builder()
                .url(url)
                .post(data)
                .build()
                .execute();
        return requests.text;
    }


    /**
     * 由用户名密码判断是否是正确的
     * 如果是错的会返回errmsg,error不是0
     * @param data 帐号密码
     * @return 服务器返回的String
     */
    public String loginLogin(String data){
        String url = Config.loginApiHead + "1.0/get/login/@self";
        Requests requests = new Requests.Builder()
                .url(url)
                .post(data)
                .build()
                .execute();
        return requests.text;
    }

    public String gameLogin(String token) throws HmException {
        String url = Config.loginHead + "index/hmLogin/" + token + this.getUrlEnd();
        Requests requests = new Requests.Builder()
                .url(url)
                .post("")
                .zlib()
                .build()
                .execute();
        String data = requests.text;
        HmException.errorFind(data);
        return data;
    }


    private String getUrlEnd(){
        String key = "ade2688f1904e9fb8d2efdb61b5e398a";
        long time = new Date().getTime() * 1000;
        String md5 = Encode.stringToMD5(time + key);
        return String.format("&t=%s&e=%s&gz=1&market=2&channel=%s&version=%s", time, md5, Config.channel, Config.version);
    }


}
