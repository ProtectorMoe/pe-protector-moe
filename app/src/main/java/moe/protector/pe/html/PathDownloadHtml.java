package moe.protector.pe.html;

import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import com.alibaba.fastjson.JSON;

import org.litepal.LitePal;

import java.util.List;

import moe.protector.pe.activity.HtmlActivity;
import moe.protector.pe.interfaces.HttpFinishCallBack;
import moe.protector.pe.sqlite.MapConfigBean;
import moe.protector.pe.util.Config;
import moe.protector.pe.util.Encode;

public class PathDownloadHtml {
    private static final String TAG = "PathDownloadHtml";
    private HttpFinishCallBack callBack;
    private HtmlActivity activity;

    public PathDownloadHtml(HtmlActivity activity, WebView webview, HttpFinishCallBack callBack) {
        this.callBack = callBack;
        this.activity = activity;
        webview.loadUrl("file:///android_asset/html/path-download-vue.html");
        webview.setWebViewClient(new WebViewClient() {
            @Override
            public void onPageFinished(WebView view, String url) {
            }
        });
    }


    static class DownloadPathBean {
        public String title;
        public String path_pe;
    }

    @JavascriptInterface
    public void download(String data) {
        DownloadPathBean pathBean = JSON.parseObject(data, DownloadPathBean.class);
        List<MapConfigBean> list = LitePal
                .where("name=?", pathBean.title)
                .find(MapConfigBean.class);
        for (MapConfigBean l : list) {
            l.delete();
        }
        MapConfigBean bean = new MapConfigBean();
        bean.name = pathBean.title;
        bean.data = pathBean.path_pe.replace("\\", "");
        bean.save();
    }

    @JavascriptInterface
    public void onCancel() {
        callBack.onCancel(null);
    }

    @JavascriptInterface
    public String getUsername() {
        return Config.username;
    }

    @JavascriptInterface
    public String getUid() {
        return Config.userId;
    }

    @JavascriptInterface
    public String getSalt() {
        return Encode.stringToMD5(Config.userId + Config.username + ",./,/./..,");
    }
}
