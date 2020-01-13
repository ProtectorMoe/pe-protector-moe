package moe.protector.pe.html;

import android.util.Log;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import com.alibaba.fastjson.JSON;

import org.litepal.LitePal;

import java.util.ArrayList;
import java.util.List;

import moe.protector.pe.game.TaskManager;
import moe.protector.pe.interfaces.HttpFinishCallBack;
import moe.protector.pe.sqlite.MapConfigBean;

public class TaskAddHtml {
    private static final String TAG = "TaskAddHtml";
    private HttpFinishCallBack callBack;

    public TaskAddHtml(WebView webview, HttpFinishCallBack callBack) {
        this.callBack = callBack;
        List<MapConfigBean> list = LitePal.findAll(MapConfigBean.class);
        List<String> name = new ArrayList<>();
        for (MapConfigBean m : list) {
            name.add(m.name);
        }
        webview.loadUrl("file:///android_asset/html/task.html");
        webview.setWebViewClient(new WebViewClient() {
            @Override
            public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);
                view.loadUrl(String.format("javascript:onLoad(\'%s\')", JSON.toJSONString(name)));
            }
        });
    }

    @JavascriptInterface
    public void onFinish(String obj) {
        Log.i(TAG, "[任务] 用户请求添加任务" + obj);
        TaskManager manager = TaskManager.getInstance();
        manager.addTask(obj);
        callBack.onFinish(null);
    }

    @JavascriptInterface
    public void onCancel() {
        callBack.onCancel(null);
    }

}
