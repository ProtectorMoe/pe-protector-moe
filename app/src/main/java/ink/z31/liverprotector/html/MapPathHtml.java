package ink.z31.liverprotector.html;

import android.util.Log;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import org.litepal.LitePal;

import java.util.List;

import ink.z31.liverprotector.interfaces.HttpFinishCallBack;
import ink.z31.liverprotector.sqlite.MapConfigBean;

public class MapPathHtml {
    private HttpFinishCallBack callBack;
    private static final String TAG = "MapPathHtml";
    public MapPathHtml(String name, WebView webview, HttpFinishCallBack callBack){
        String config = null;
        if (name != null && !name.equals("")) {
            List<MapConfigBean> list = LitePal
                    .limit(1)
                    .where("name=?", name)
                    .find(MapConfigBean.class);
            if (list.size() > 0) {
                config = list.get(0).data;
                Log.i(TAG, "[JavaScript]" + config);
            }
        }
        final String f = config;
        this.callBack = callBack;
        webview.loadUrl("file:///android_asset/html/map.html");
        webview.setWebViewClient(new WebViewClient() {
            @Override
            public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);
                if (f != null) {
                    String code = String.format("javascript:onLoad(\'%s\', \'%s\')", name, f);
                    Log.i(TAG, "[JavaScript] 执行脚本" + code);
                    view.loadUrl(code);
                }
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
        for (MapConfigBean b: list) {
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
    public void onJump() {

    }
}
