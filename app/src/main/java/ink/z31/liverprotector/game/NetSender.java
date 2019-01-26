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


    /**
     * 第一次登录由token获取serverList
     * @param token token
     * @return String 服务数据
     * @throws HmException 错误信息
     */
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


    /**
     * 第一次登录向服务器发送设备信息
     * @param userId 用户的uid
     * @param phoneType 设备信息
     * @return String 服务数据
     * @throws HmException 错误代码
     */
    public String indexLogin(String userId,  String phoneType) throws HmException {
        String url = Config.host + String.format("index/login/%s?&%s", userId, phoneType) + this.getUrlEnd();
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


    /**
     * 游戏启动时候初始化数据
     * @return 用户等级,uid,船只,装备等一大堆信息
     * @throws HmException 错误信息
     */
    public String apiInitGame() throws HmException {
        String url = Config.host + "api/initGame?&crazy=0" + this.getUrlEnd();
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


    /**
     * 获取pve的点数信息
     * @return pve的关卡编号,每个点的配置信息
     * @throws HmException 错误信息
     */
    public String pveGetPveData() throws HmException {
        String url = Config.host + "pve/getPveData/" + this.getUrlEnd();
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


    /**
     * 不知道干什么的,可能是活动关卡
     * @return 未知
     * @throws HmException 错误信息
     */
    public String bseaGetData() throws HmException {
        String url = Config.host + "bsea/getData/" + this.getUrlEnd();
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


    /**
     * 食堂食谱信息
     * @return 厨房的各种信息
     * @throws HmException 错误信息
     */
    public String liveGetUserInfo() throws HmException {
        String url = Config.host + "live/getUserInfo" + this.getUrlEnd();
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


    /**
     * 活动信息以及签到信息
     * @return 活动信息以及签到信息
     * @throws HmException 错误信息
     */
    public String activeGetUserData() throws HmException {
        String url = Config.host + "active/getUserData/" + this.getUrlEnd();
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

    /**
     * 貌似是哪些点已经走过了
     * @return pveLevel/passedNodes点数信息
     * @throws HmException 错误信息
     */
    public String pveGetUserData() throws HmException {
        String url = Config.host + "pve/getUserData/" + this.getUrlEnd();
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


    /**
     * 可以进行的战役点数,以及剩余的战役数量
     * @return canCampaignChallengeLevel/passInfo
     * @throws HmException 错误信息
     */
    public String campaignGetUserData() throws HmException {
        String url = Config.host + "campaign/getUserData/" + this.getUrlEnd();
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
