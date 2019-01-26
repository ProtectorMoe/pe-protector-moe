package ink.z31.liverprotector.activity;

import android.app.AlertDialog;
import android.app.ProgressDialog;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Looper;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.Toolbar;
import android.util.Log;
import android.util.SparseArray;
import android.view.View;
import android.widget.EditText;
import android.widget.Spinner;
import android.widget.Toast;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import ink.z31.liverprotector.R;
import ink.z31.liverprotector.bean.indexHmlogin.ServerList;
import ink.z31.liverprotector.game.FirstLogin;
import ink.z31.liverprotector.game.SecondLogin;
import ink.z31.liverprotector.game.UserData;
import ink.z31.liverprotector.interfaces.FirstLoginCallBack;
import ink.z31.liverprotector.interfaces.SecondLoginCallBack;
import ink.z31.liverprotector.util.Config;

public class LoginActivity extends AppCompatActivity {
    private static final String TAG = "LoginActivity";

    private int serverIndex;

    private static ProgressDialog progressDialog;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
        // 设置标题栏
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        // 读取帐号密码
        final EditText ed_username = findViewById(R.id.ed_username);
        final EditText ed_pwd = findViewById(R.id.ed_pwd);
        final Spinner sp_server = findViewById(R.id.sp_server);
        SharedPreferences preferences = getSharedPreferences("login", MODE_PRIVATE);
        ed_username.setText(preferences.getString("username", ""));
        ed_pwd.setText(preferences.getString("pwd", ""));
        sp_server.setSelection(preferences.getInt("server", 0), true);
        // 设置按钮事件
        FloatingActionButton actionButton = findViewById(R.id.fat_login);
        actionButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                firstLogin();
            }
        });
    }


    long lastPressTime = 0;
    @Override
    public void onBackPressed() {
        if (new Date().getTime() - lastPressTime < 1000) {
            setResult(RESULT_CANCELED);
            finish();
        } else {
            lastPressTime = new Date().getTime();//重置lastPressTime
            View v = getWindow().getDecorView().findViewById(R.id.fat_login);
            Snackbar.make(v, "再按一次退出软件", Snackbar.LENGTH_SHORT).show();
        }
    }

    private void firstLogin(){
        // 获取id值
        final EditText ed_username = findViewById(R.id.ed_username);
        final EditText ed_pwd = findViewById(R.id.ed_pwd);
        final Spinner sp_server = findViewById(R.id.sp_server);
        String username = ed_username.getText().toString();
        String pwd = ed_pwd.getText().toString();
        final int server = (int)sp_server.getSelectedItemId();
        // 保存
        SharedPreferences.Editor edit = getSharedPreferences("login", MODE_PRIVATE).edit();
        edit.putString("username", username);
        edit.putString("pwd", pwd);
        edit.putInt("server", server);
        edit.apply();
        // 显示登录进度
        progressDialog = new ProgressDialog(LoginActivity.this);
        progressDialog.setCancelable(false);
        progressDialog.setTitle("护肝宝");
        progressDialog.setMessage("正在登录,请稍候...");
        progressDialog.show();
        // 正式进行登录
        FirstLogin login = FirstLogin.getInstance();
        login.initialize(username, pwd, 0);
        login.readLogin(new FirstLoginCallBack() {
            @Override
            public void onFinish(SparseArray<ServerList> serverList, int defaultServer) {
                // 登录成功, 获取项目
                String [] serverArray = new String[serverList.size()];
                String[] hostArray = new String[serverList.size()];
                progressDialog.cancel();
                Looper.prepare();
                serverIndex = serverList.indexOfKey(defaultServer);
                for (int i=0; i<serverList.size(); i++){
                    serverArray[i] = serverList.valueAt(i).name;
                    hostArray[i] = serverList.valueAt(i).host;
                }
                final List<String> hostList = Arrays.asList(hostArray);
                // 弹出服务器选项
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
                        Config.host = hostList.get(serverIndex);
                        Log.i(TAG, "选择服务器:" + Config.host);
                        secondLogin();
                    }
                });
                dialog.show();
                Looper.loop();
            }
            @Override
            public void onError(String errMsg) {
                Log.i(TAG, "第一次登陆失败!" + errMsg);
                progressDialog.cancel();
                Looper.prepare();
                AlertDialog.Builder dialog = new AlertDialog.Builder(LoginActivity.this);
                dialog.setTitle("出错了!");
                dialog.setIcon(R.mipmap.icon);
                dialog.setMessage(errMsg);
                dialog.setPositiveButton("确定", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                    }
                });
                dialog.show();
                Looper.loop();
            }
        });
    }

    private void secondLogin(){
        // 第二次登录
        SecondLogin secondLogin = SecondLogin.getInstance();
        final UserData userData = UserData.getInstance();
        secondLogin.login(new SecondLoginCallBack() {
            @Override
            public void onFinish() {
                final String username = userData.username;
                final long oil = userData.oil;
                final long ammo = userData.ammo;
                final long steel = userData.steel;
                final long aluminium = userData.aluminium;
                Log.i(TAG, "第二次登录成功!");
                Log.i(TAG, "用户名" + username);
                Log.i(TAG, "油" + oil);
                Log.i(TAG, "弹" + ammo);
                Log.i(TAG, "钢" + steel);
                Log.i(TAG, "铝" + aluminium);

            }
            @Override
            public void onError(String errMsg) {
                Log.i(TAG, "第二次登陆失败!" + errMsg);
                progressDialog.cancel();
                Looper.prepare();
                AlertDialog.Builder dialog = new AlertDialog.Builder(LoginActivity.this);
                dialog.setTitle("出错了!");
                dialog.setIcon(R.mipmap.icon);
                dialog.setMessage(errMsg);
                dialog.setPositiveButton("确定", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                    }
                });
                dialog.show();
                Looper.loop();
            }
        });
    }
}
