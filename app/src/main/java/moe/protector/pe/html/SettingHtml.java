package moe.protector.pe.html;

import android.util.Log;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import com.alibaba.fastjson.JSON;

import moe.protector.pe.bean.SettingBean;
import moe.protector.pe.game.Setting;
import moe.protector.pe.interfaces.HttpFinishCallBack;

public class SettingHtml {
    private static final String TAG = "SettingHtml";
    private HttpFinishCallBack callBack;
    public SettingHtml(WebView webview, HttpFinishCallBack callBack) {
        this.callBack = callBack;
        webview.loadUrl("file:///android_asset/html/setting.html");
        webview.setWebViewClient(new WebViewClient() {
            @Override
            public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);
                String code = String.format("javascript:onLoad(\'%s\')", JSON.toJSONString(Setting.getInstance().settingBean));
                Log.i(TAG, "[JavaScript] 执行脚本" + code);
                view.loadUrl(code);
            }
        });
    }

    @JavascriptInterface
    public void onFinish(String data) {
        Log.d(TAG, "收到设置:" + data);
        Setting setting = Setting.getInstance();
        setting.settingBean = JSON.parseObject(data, SettingBean.class);
        setting.save();
        callBack.onFinish(null);
    }

    @JavascriptInterface
    public void onCancel() {
        callBack.onCancel(null);
    }
}
