package moe.protector.pe.html;

import android.util.Log;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import com.alibaba.fastjson.JSON;

import org.litepal.LitePal;

import java.util.List;

import moe.protector.pe.bean.PveDataBean;
import moe.protector.pe.game.UserData;
import moe.protector.pe.interfaces.HttpFinishCallBack;
import moe.protector.pe.sqlite.MapConfigBean;
import moe.protector.pe.util.Util;

public class MapPathHtml {
    private HttpFinishCallBack callBack;
    private static final String TAG = "MapPathHtml";

    public MapPathHtml(String name, String config, WebView webview, HttpFinishCallBack callBack) {
        this.callBack = callBack;
        webview.loadUrl("file:///android_asset/html/map.html");
        webview.setWebViewClient(new WebViewClient() {
            @Override
            public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);
                String f = "";
                if (!name.equals("")) {
                    List<MapConfigBean> list = LitePal
                            .limit(1)
                            .where("name=?", name)
                            .find(MapConfigBean.class);
                    if (list.size() > 0) {
                        f = list.get(0).data;
                    }
                }
                if (!config.equals("")) {
                    f = config;
                }
                String code = String.format("javascript:onLoad(\'%s\', \'%s\')", name, f);
                Log.i(TAG, "[JavaScript] 执行脚本" + code);
                view.loadUrl(code);
            }
        });
    }


    @JavascriptInterface
    public void onFinish(String name, String obj) {
        name = name.replace(" ", "");
        // 检测是否有重复的
        List<MapConfigBean> list = LitePal.select("*")
                .where("name=?", name)
                .find(MapConfigBean.class);
        for (MapConfigBean b : list) {
            b.delete();
        }
        MapConfigBean bean = new MapConfigBean();
        bean.name = name;
        bean.data = obj;
        bean.save();
        callBack.onFinish(null);
    }

    @JavascriptInterface
    public void onCancel() {
        callBack.onCancel(null);
    }

    @JavascriptInterface
    public String getPveData() {
        UserData userData = UserData.getInstance();
        PveDataBean pveDataBean = new PveDataBean(userData.pveNode, userData.pveLevel, userData.pveBuff);
        String data = JSON.toJSONString(pveDataBean);
        Util.writeFile("test", data);
        return data;
    }


}
