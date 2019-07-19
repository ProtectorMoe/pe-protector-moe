package ink.z31.liverprotector.html;

import android.content.Intent;
import android.util.Log;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import com.alibaba.fastjson.JSON;

import org.litepal.LitePal;

import java.util.ArrayList;
import java.util.List;

import ink.z31.liverprotector.activity.HtmlActivity;
import ink.z31.liverprotector.interfaces.HttpFinishCallBack;
import ink.z31.liverprotector.sqlite.MapConfigBean;
import ink.z31.liverprotector.util.App;

public class TaskManagerHtml {
    private static final String TAG = "TaskManagerHtml";
    private WebView webView;
    private HttpFinishCallBack callBack;

    public TaskManagerHtml(WebView webview, HttpFinishCallBack callBack){
        this.callBack = callBack;
        this.webView = webview;
        webview.loadUrl("file:///android_asset/html/task_manager.html");
        webview.setWebViewClient(new WebViewClient() {
            @Override
            public void onPageFinished(WebView view, String url) {
                // 加载用户配置列表
                super.onPageFinished(view, url);
                List<MapConfigBean> list = LitePal
                        .findAll(MapConfigBean.class);
                List<String> name = new ArrayList<>();
                for (MapConfigBean bean: list) {
                    name.add(bean.name);
                }
                String code = String.format("javascript:onLoad(\'%s\')", JSON.toJSONString(name));
                Log.i(TAG, "[Javascript] 执行javascript:" + code);
                view.loadUrl(code);
            }
        });



    }

    @JavascriptInterface
    public void onFinish() {
        callBack.onFinish(null);
    }

    @JavascriptInterface
    public void onCancel() {
        callBack.onCancel(null);
    }

    @JavascriptInterface
    public String onPathDel(String taskName) {
        List<MapConfigBean> list = LitePal
                .where("name=?", taskName)
                .limit(1)
                .find(MapConfigBean.class);
        for (MapConfigBean bean: list) {
            bean.delete();
        }
        return onRefresh();
    }

    @JavascriptInterface
    public void onPathEdit(String taskName) {
        Intent intent = new Intent(App.getContext(), HtmlActivity.class);
        intent.putExtra("type", HtmlActivity.HTML_MAP);
        intent.putExtra("name", taskName);
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        App.getContext().startActivity(intent);
    }

    @JavascriptInterface
    public void onAddPath() {
        Intent intent = new Intent(App.getContext(), HtmlActivity.class);
        intent.putExtra("type", HtmlActivity.HTML_MAP);
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        App.getContext().startActivity(intent);
    }

    @JavascriptInterface
    public String onRefresh() {
        List<MapConfigBean> list = LitePal
                .findAll(MapConfigBean.class);
        List<String> name = new ArrayList<>();
        for (MapConfigBean bean: list) {
            name.add(bean.name);
        }
        return JSON.toJSONString(name);
    }
}
