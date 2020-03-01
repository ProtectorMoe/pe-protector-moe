package moe.protector.pe.html;

import android.content.Intent;
import android.os.Looper;
import android.util.Log;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import com.alibaba.fastjson.JSON;

import org.litepal.LitePal;

import java.util.ArrayList;
import java.util.List;

import cn.pedant.SweetAlert.SweetAlertDialog;
import moe.protector.pe.activity.HtmlActivity;
import moe.protector.pe.interfaces.HttpFinishCallBack;
import moe.protector.pe.sqlite.MapConfigBean;
import moe.protector.pe.util.App;
import moe.protector.pe.util.Config;
import moe.protector.pe.util.Requests;

public class TaskManagerHtml {
    private static final String TAG = "TaskManagerHtml";
    private HttpFinishCallBack callBack;
    private HtmlActivity activity;

    public TaskManagerHtml(HtmlActivity activity, WebView webview, HttpFinishCallBack callBack) {
        this.callBack = callBack;
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
                for (MapConfigBean bean : list) {
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
        for (MapConfigBean bean : list) {
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
        intent.putExtra("name", "");
        intent.putExtra("config", "");
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        App.getContext().startActivity(intent);
    }

    @JavascriptInterface
    public String onRefresh() {
        List<MapConfigBean> list = LitePal
                .findAll(MapConfigBean.class);
        List<String> name = new ArrayList<>();
        for (MapConfigBean bean : list) {
            name.add(bean.name);
        }
        return JSON.toJSONString(name);
    }

    @JavascriptInterface
    public void onDownload() {
        Intent intent = new Intent(App.getContext(), HtmlActivity.class);
        intent.putExtra("type", HtmlActivity.HTML_PATH_DOWNLOAD);
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        App.getContext().startActivity(intent);
    }


    private String getConfig(String name) {
        return LitePal
                .limit(1)
                .where("name=?", name)
                .find(MapConfigBean.class)
                .get(0).data;
    }


    static class UpLoadDataBean {
        public String title;
        public String desc;
        public String author;
        public String config;
        public String path;
        public int uid;
        public String username;
    }


    @JavascriptInterface
    public boolean upLoad(String uploadData) {
        UpLoadDataBean bean = JSON.parseObject(uploadData, UpLoadDataBean.class);
        bean.username = Config.username;
        bean.uid = Integer.valueOf(Config.userId);
        bean.path = getConfig(bean.config);

        new Thread(() -> {
            Requests requests = new Requests.Builder()
                    .url("http://cloud.protector.moe/config/paths/")
                    .json(JSON.toJSONString(bean))
                    .build()
                    .execute();
            Log.i(TAG, "上传文件" + requests.status);
            Looper.prepare();
            if (requests.status == 201) {
                new SweetAlertDialog(this.activity, SweetAlertDialog.SUCCESS_TYPE)
                        .setTitleText("在线配置")
                        .setContentText("上传成功")
                        .setConfirmText("确定")
                        .setConfirmClickListener(SweetAlertDialog::cancel)
                        .show();
            } else {
                new SweetAlertDialog(this.activity, SweetAlertDialog.ERROR_TYPE)
                        .setTitleText("在线配置")
                        .setContentText("上传失败")
                        .setCancelText("确定")
                        .setCancelClickListener(SweetAlertDialog::cancel)
                        .show();
            }
            Looper.loop();
        }).start();
        return true;
    }


}
