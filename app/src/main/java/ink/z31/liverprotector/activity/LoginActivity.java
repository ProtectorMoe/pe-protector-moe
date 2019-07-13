package ink.z31.liverprotector.activity;

import android.app.AlertDialog;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Color;
import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.util.Log;
import android.util.SparseArray;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;


import org.angmarch.views.NiceSpinner;

import java.util.Arrays;
import java.util.Date;

import cn.pedant.SweetAlert.SweetAlertDialog;
import ink.z31.liverprotector.MainActivity;
import ink.z31.liverprotector.R;
import ink.z31.liverprotector.bean.LoginServerListBean;
import ink.z31.liverprotector.game.FirstLogin;
import ink.z31.liverprotector.game.SecondLogin;
import ink.z31.liverprotector.interfaces.FirstLoginCallBack;
import ink.z31.liverprotector.interfaces.SecondLoginCallBack;
import ink.z31.liverprotector.util.App;
import ink.z31.liverprotector.util.Config;

public class  LoginActivity extends AppCompatActivity {
    private static final String TAG = "LoginActivity";
    private App app;
    public static final int REQUEST_CODE = 1;
    private SweetAlertDialog loginAlertDialog;
    private int serverIndex;


    private static final int LOGIN_SHOW_DIALOG = 0;
    private static final int LOGIN_CANCEL_DIALOG = 1;
    private static final int LOGIN_ERROR = 2;
    private static final int LOGIN_SHOW_SERVER = 3;

    public static final int LOGIN_RES = 4;

    Handler loginHandler = new Handler(msg -> {
        switch (msg.what){
            case LOGIN_SHOW_DIALOG:
                loginAlertDialog.show();
                break;
            case LOGIN_CANCEL_DIALOG:
                loginAlertDialog.cancel();
                break;
            case LOGIN_ERROR:
                loginAlertDialog.cancel();
                new SweetAlertDialog(LoginActivity.this)
                        .setTitleText("出错了!")
                        .setContentText((String)msg.obj)
                        .show();
                break;
            case LOGIN_SHOW_SERVER:  // 登录成功
                String [] serverArray = msg.getData().getStringArray("serverArray");
                String [] hostArray = msg.getData().getStringArray("hostArray");
                int index = msg.getData().getInt("serverIndex");

                AlertDialog.Builder dialog = new AlertDialog.Builder(LoginActivity.this);
                dialog.setTitle("选择服务器");
                dialog.setIcon(R.mipmap.icon);
                dialog.setCancelable(false);
                dialog.setSingleChoiceItems(serverArray, serverIndex, new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        serverIndex = which;
                    }
                });
                dialog.setPositiveButton("确定", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        Config.host = hostArray[serverIndex];
                        Log.i(TAG, "选择服务器:" + Config.host);
                        loginAlertDialog.show();
                        secondLogin();
                    }
                });
                dialog.setNegativeButton("取消", (dialog1, which) -> {
                    loginAlertDialog.cancel();
                });
                dialog.show();
                break;
            case LOGIN_RES:
                loginAlertDialog.setTitleText((String)msg.obj);
                break;
        }
        return true;
    });


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        app = (App) getApplication();
        // 初始化界面
        loginAlertDialog = new SweetAlertDialog(this, SweetAlertDialog.PROGRESS_TYPE);
        loginAlertDialog.getProgressHelper().setBarColor(Color.parseColor("#A5DC86"));
        loginAlertDialog.setTitleText("正在登录,请稍候...");
        loginAlertDialog.setCancelable(false);
        // 透明
        setContentView(R.layout.activity_login);
        // 设置标题栏
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        // 读取帐号密码
        EditText ed_username = findViewById(R.id.ed_username);
        EditText ed_pwd = findViewById(R.id.ed_pwd);
        SharedPreferences preferences = getSharedPreferences("login", MODE_PRIVATE);
        ed_username.setText(preferences.getString("username", ""));
        ed_pwd.setText(preferences.getString("pwd", ""));

        // 设置按钮事件
        Button actionButton = findViewById(R.id.bt_login);
        actionButton.setOnClickListener((v -> firstLogin()));
        // 设置服务器
        NiceSpinner sp_server = findViewById(R.id.sp_server);
        sp_server.attachDataSource(Arrays.asList("安卓", "IOS", "台服", "国际"));
        sp_server.setSelectedIndex(preferences.getInt("server", 0));
    }


    long lastPressTime = 0;
    @Override
    public void onBackPressed() {
        if (new Date().getTime() - lastPressTime < 1000) {
            setResult(RESULT_CANCELED);
            finish();
        } else {
            lastPressTime = new Date().getTime();//重置lastPressTime
            View v = getWindow().getDecorView().findViewById(R.id.ed_pwd);
            Snackbar.make(v, "再按一次退出软件", Snackbar.LENGTH_SHORT).show();
        }
    }

    /**
     * 第一次登录, 返回host, uid, cookie
     */
    private void firstLogin(){
        // 获取id值
        showLoginDialog();
        final EditText ed_username = findViewById(R.id.ed_username);
        final EditText ed_pwd = findViewById(R.id.ed_pwd);
        final NiceSpinner sp_server = findViewById(R.id.sp_server);
        String username = ed_username.getText().toString();
        String pwd = ed_pwd.getText().toString();
        final int server = sp_server.getSelectedIndex();
        // 保存
        SharedPreferences.Editor edit = getSharedPreferences("login", MODE_PRIVATE).edit();
        edit.putString("username", username);
        edit.putString("pwd", pwd);
        edit.putInt("server", server);
        edit.apply();
        // 正式进行登录
        Log.i(TAG,"第一次登录准备开始");
        FirstLogin login = FirstLogin.getInstance();
        login.initialize(username, pwd, server);
        login.readLogin(new FirstLoginCallBack() {
            @Override
            public void onFinish(SparseArray<LoginServerListBean.ServerList> serverList, int defaultServer) {
                // 登录成功, 获取项目
                Log.i(TAG,"第一次登录成功, 显示服务器");
                Message message = new Message();
                message.what = LOGIN_SHOW_SERVER;

                String [] serverArray = new String[serverList.size()];
                String[] hostArray = new String[serverList.size()];
                for (int i=0; i<serverList.size(); i++){
                    serverArray[i] = serverList.valueAt(i).name;
                    hostArray[i] = serverList.valueAt(i).host;
                }
                int serverIndex = serverList.indexOfKey(defaultServer);

                Bundle bundle = new Bundle();
                bundle.putStringArray("serverArray", serverArray);
                bundle.putStringArray("hostArray", hostArray);
                bundle.putInt("serverIndex", serverIndex);
                message.setData(bundle);
                loginHandler.sendMessage(message);
            }
            @Override
            public void onError(String errMsg) {
                Log.i(TAG, "第一次登陆失败!" + errMsg);
                // 取消登录框
                stopLoginDialog();
                // 弹出错误通知
                showMessageDialog(errMsg);
            }
        }, (data) -> {
            Message message = new Message();
            message.what = LOGIN_RES;
            message.obj = data;
            loginHandler.sendMessage(message);
        });
    }

    private void secondLogin(){
        // 第二次登录
        Log.i(TAG,"第二次登录准备开始...");
        Message message = new Message();
        message.what = LOGIN_RES;
        message.obj = "登录中, 请稍候...";
        loginHandler.sendMessage(message);
        SecondLogin secondLogin = SecondLogin.getInstance();
        secondLogin.login(new SecondLoginCallBack() {
            @Override
            public void onFinish() {
                Log.i(TAG,"登录成功, 开始跳转主界面...");
                Config.hasLogin = true;
                stopLoginDialog();
                setResult(RESULT_OK);
                finish();
                Intent intent = new Intent(LoginActivity.this, MainActivity.class);
                startActivity(intent);
            }
            @Override
            public void onError(String errMsg) {
                // 取消加载信息
                Log.e(TAG,"第二次登录错误");
                stopLoginDialog();
                // 显示错误信息
                showMessageDialog(errMsg);
            }
        });
    }

    private void showLoginDialog(){
        Message message = new Message();
        message.what = LOGIN_SHOW_DIALOG;
        loginHandler.sendMessage(message);
    }

    private void stopLoginDialog(){
        Message message = new Message();
        message.what = LOGIN_CANCEL_DIALOG;
        loginHandler.sendMessage(message);
    }

    private void showMessageDialog(String errMsg){
        Message message = new Message();
        message.what = LOGIN_ERROR;
        message.obj = errMsg;
        loginHandler.sendMessage(message);
    }
}
