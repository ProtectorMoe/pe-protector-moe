package moe.protector.pe.game;

import android.content.Context;
import android.content.SharedPreferences;
import android.util.Log;
import android.util.SparseArray;

import com.alibaba.fastjson.JSON;

import moe.protector.pe.bean.login.LoginBean;
import moe.protector.pe.bean.login.LoginServerListBean;
import moe.protector.pe.bean.login.LoginUserInfoBean;
import moe.protector.pe.bean.login.LoginVersionBean;
import moe.protector.pe.exception.HmException;
import moe.protector.pe.interfaces.FirstLoginCallBack;
import moe.protector.pe.interfaces.ResProgressCallBack;
import moe.protector.pe.util.App;
import moe.protector.pe.util.Config;
import moe.protector.pe.util.Requests;
import moe.protector.pe.util.Util;


public class FirstLogin {
    private static final String TAG = "FirstLogin";

    private FirstLogin() {
    }

    private static FirstLogin firstLogin = null;

    public static FirstLogin getInstance() {
        if (firstLogin == null) {
            firstLogin = new FirstLogin();
        }
        return firstLogin;
    }

    private static Context context = App.getContext();
    // 要用的对象
    private static NetSender netSender = NetSender.getInstance();
    private static GameConstant gameConstant = GameConstant.getInstance();

    private String username;
    private String pwd;


    /**
     * 初始化登陆数据
     *
     * @param username   用户名
     * @param pwd        密码
     * @param serverType 游戏登录类型
     */
    public void initialize(String username, String pwd, int serverType) {
        this.username = username;
        this.pwd = pwd;
        Config.serverType = serverType;
        // 初始化
        switch (serverType) {
            case 0:
                Config.head = "HMS 881d3SlFucX5R5hE";
                Config.key = "kHPmWZ4zQBYP24ubmJ5wA4oz0d8EgIFe";
                Config.channel = "100016";
                Config.resUrl = "http://login.jr.moefantasy.com/index/getInitConfigs/";
                Config.urlVersion = "http://version.jr.moefantasy.com/index/checkVer/4.1.0/100016/2&version=4.1.0&channel=100016&market=2";
                break;
            case 1:
                Config.head = "HMS 881d3SlFucX5R5hE";
                Config.key = "kHPmWZ4zQBYP24ubmJ5wA4oz0d8EgIFe";
                Config.channel = "100015";
                Config.resUrl = "http://loginios.jr.moefantasy.com/index/getInitConfigs/";
                Config.urlVersion = "http://version.jr.moefantasy.com/index/checkVer/4.1.0/100015/2&version=4.1.0&channel=100015&market=2";
                break;
            case 2:
                Config.head = "HMS 6f67d7612241";
                Config.key = "c918ae4f4a75464fa964093ae8a66dae";
                Config.channel = "100033";
                Config.resUrl = "http://login.jr.moepoint.tw/index/getInitConfigs/";
                Config.urlVersion = "http://version.jr.moepoint.tw/index/checkVer/4.0.3/100033/2&version=4.0.3&channel=100033&market=2";
                break;
            case 3:
                Config.head = "HMS krtestfrontend";
                Config.key = "abcdef01234567890abcdef01234567890";
                Config.channel = "100060";
                Config.resUrl = "http://enlogin.warshipgirls.com/index/getInitConfigs/";
                Config.urlVersion = "http://enversion.warshipgirls.com/index/checkVer/4.1.0/100060/2&version=4.1.0&channel=100060&market=2";
                break;
        }
    }

    /**
     * 正式进行登录请求
     *
     * @param callBack 请求回调事件
     */
    public void readLogin(final FirstLoginCallBack callBack, final ResProgressCallBack callBack2) {
        final FirstLogin login = getInstance();
        try {
            login.getVersion();
            FirstLoginResult result = login.firstLogin(callBack2);
            callBack.onFinish(result.serverList, result.defaultServer);
        } catch (HmException e) {
            callBack.onError(e.getMessage());
        } catch (Exception e) {
            callBack.onError(Util.getErrMsg(e));
        }
    }


    /**
     * 获取游戏的版本号和地址
     */
    private void getVersion() throws HmException {
        String url = Config.urlVersion;
        Requests requests = new Requests.Builder()
                .get()
                .url(url)
                .build()
                .execute();
        LoginVersionBean version = JSON.parseObject(requests.text, LoginVersionBean.class);
        if (version.eid != null && version.eid.equals("-9999")) {
            throw new HmException("-9999");
        }
        Config.version = version.version.newVersionId;
        Config.resVersion = version.version.DataVersion;
        Config.loginHead = version.loginServer;
        Config.loginApiHead = version.hmLoginServer;
    }

    class FirstLoginResult {
        SparseArray<LoginServerListBean.ServerList> serverList = new SparseArray<>();
        int defaultServer = 0;
    }

    /**
     * 第一次登录游戏
     * 验证token/
     */
    private FirstLoginResult firstLogin(ResProgressCallBack callBack) throws HmException {
        // 获取没有卵用的init数据

        getResData(callBack);
        // netSender.loginInitConfig();

        // 读取token
        SharedPreferences preferences = context.getSharedPreferences("token", Context.MODE_PRIVATE);
        String token = preferences.getString(this.username, "");

        while (true) {
            if (token.length() < 10 || true) {
                token = this.getToken();
            }
            // 验证token
            if (checkToken(token)) {
                SharedPreferences.Editor editor = context.getSharedPreferences("token", Context.MODE_PRIVATE).edit();
                editor.putString(this.username, token);
                editor.apply();
                break;
            } else {
                token = "";
            }
        }
        // 验证成功后登陆游戏
        String server = netSender.gameLogin(token);
        LoginServerListBean list = JSON.parseObject(server, LoginServerListBean.class);
        FirstLoginResult result = new FirstLoginResult();
        Config.userId = list.userId;
        if (list.serverList != null) {
            for (LoginServerListBean.ServerList s : list.serverList) {
                result.serverList.append(Integer.valueOf(s.id), s);
            }
            result.defaultServer = Integer.valueOf(list.defaultServer);
        }
        return result;
    }

    // 获取token
    private String getToken() throws HmException {
        String data;
        if (Config.serverType == 0 || Config.serverType == 1 || Config.serverType == 3) {
            data = String.format("{" +
                    "\"platform\": \"0\"," +
                    "\"appid\": \"0\"," +
                    "\"app_server_type\": \"0\"," +
                    "\"password\": \"%s\"," +
                    "\"username\": \"%s\"" +
                    "}", this.pwd, this.username);
        } else {
            data = String.format("{" +
                    "\"appId\": \"0\"," +
                    "\"appServerType\": \"0\"," +
                    "\"password\": \"%s\"," +
                    "\"userName\": \"%s\"" +
                    "}", this.pwd, this.username);
        }
        String tokenString = netSender.loginLogin(data);
        LoginBean loginBean = JSON.parseObject(tokenString, LoginBean.class);
        // 检测帐号密码是否错误
        if (loginBean.error != 0) {
            throw new HmException("-113");
        }
        // 如果没有错误的话返回token
        if (loginBean.access_token != null) {
            return loginBean.access_token;
        } else {
            return loginBean.token;
        }

    }

    // 验证token是否过期
    private boolean checkToken(String token) {
        String data;
        if (Config.serverType == 0 || Config.serverType == 1) {
            data = String.format("{\"access_token\": \"%s\"}", token);
        } else {
            data = String.format("{\"token\": \"%s\"}", token);
        }
        String checkTokenString = netSender.loginUserInfo(data);
        LoginUserInfoBean loginUserInfoBean = JSON.parseObject(checkTokenString, LoginUserInfoBean.class);
        if (loginUserInfoBean.error != null) {
            return loginUserInfoBean.error == 0;
        } else {
            return false;
        }
    }

    private void getResData(ResProgressCallBack callBack) {
        String initData;
        try {
            // 读取版本号
            Log.i(TAG, "[登录] 加载init数据...");
            long dataVersion = Long.valueOf(gameConstant.getVersion());
            if (Long.valueOf(Config.resVersion) > dataVersion || Setting.getInstance().settingBean.resetDatabase) {
                // 开始下载资料
                Setting.getInstance().settingBean.resetDatabase = false;
                Setting.getInstance().save();
                Log.i(TAG, "[登录] 数据过期, 加载新数据...");
                callBack.onChange("下载游戏基础数据....");
                initData = netSender.getInitData();
                gameConstant.parseJson(initData, callBack);
            }
            Log.i(TAG, "[登录] 成功解析所有数据");
        } catch (Exception e) {
            Log.e(TAG, "[登录] 获取init数据错误!" + e.getMessage());
            e.printStackTrace();
        }
    }


}
