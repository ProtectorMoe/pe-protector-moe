package moe.protector.pe.html;

import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.Context;
import android.content.Intent;
import android.util.Log;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import com.alibaba.fastjson.JSON;

import org.litepal.LitePal;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import cn.pedant.SweetAlert.SweetAlertDialog;
import moe.protector.pe.activity.HtmlActivity;
import moe.protector.pe.bean.challenge.PathConfigBean;
import moe.protector.pe.game.NetSender;
import moe.protector.pe.interfaces.HttpFinishCallBack;
import moe.protector.pe.sqlite.MapConfigBean;
import moe.protector.pe.util.App;
import moe.protector.pe.util.Encode;

public class TaskManagerHtml {
    private static final String TAG = "TaskManagerHtml";
    private WebView webView;
    private HttpFinishCallBack callBack;
    private HtmlActivity activity;

    public TaskManagerHtml(HtmlActivity activity, WebView webview, HttpFinishCallBack callBack){
        this.callBack = callBack;
        this.webView = webview;
        this.activity = activity;
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
        intent.putExtra("config", "");
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

    private interface OnDownLoadCallBack {
        void onFinish(HashMap<String, PathConfigBean> data);
        void onError(String errMsg);
    }

    @JavascriptInterface
    public void onDownload() {
        new Thread(() -> {
            HashMap<String, PathConfigBean> data = NetSender.getInstance().getPath();
            for (String key: data.keySet()) {
                // 寻找重名
                List<MapConfigBean> list = LitePal
                        .where("name=?", key)
                        .find(MapConfigBean.class);
                for (MapConfigBean l: list) {
                    l.delete();
                }
                MapConfigBean bean = new MapConfigBean();
                String config = JSON.toJSONString(data.get(key));
                Log.i(TAG, config);
                bean.name = key;
                bean.data = config;
                bean.save();
            }
        }).start();
    }

    @JavascriptInterface
    public void onPathOutput(String name) {
        String config = LitePal
                .limit(1)
                .where("name=?", name)
                .find(MapConfigBean.class)
                .get(0).data;
        String md5 = Encode.stringToMD5(config);
        String bs64 = Encode.base64_encode(config);
        Log.i(TAG, bs64);
        ClipboardManager cm = (ClipboardManager) App.getContext().getSystemService(Context.CLIPBOARD_SERVICE);
        ClipData mClipData = ClipData.newPlainText("Label", md5+bs64);
        cm.setPrimaryClip(mClipData);
    }

    @JavascriptInterface
    public void onInputPath(String data) {
        try {
            String md5 = data.substring(0, 32);
            String bs64 = data.substring(32);
            String config = Encode.base64_decode(bs64);
            String nowMd5 = Encode.stringToMD5(config);
            if (md5.equals(nowMd5)) {
                Intent intent = new Intent(App.getContext(), HtmlActivity.class);
                intent.putExtra("type", HtmlActivity.HTML_MAP);
                intent.putExtra("name", "");
                intent.putExtra("config", config);
                intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                App.getContext().startActivity(intent);
            } else {
                throw new Exception();
            }
        }catch (Exception e) {
            new SweetAlertDialog(activity, SweetAlertDialog.ERROR_TYPE)
                    .setTitleText("数据解析失败")
                    .setConfirmText("取消")
                    .show();
        }
    }
}
