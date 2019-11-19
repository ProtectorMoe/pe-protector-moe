package moe.protector.pe;

import android.content.ComponentName;
import android.content.Intent;
import android.content.ServiceConnection;
import android.graphics.Bitmap;
import android.os.Bundle;
import android.os.IBinder;
import android.support.annotation.Nullable;
import android.support.design.widget.NavigationView;
import android.support.design.widget.Snackbar;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentPagerAdapter;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.ActionBar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.util.Log;
import android.view.Gravity;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.TextView;

import com.getbase.floatingactionbutton.FloatingActionButton;
import com.getbase.floatingactionbutton.FloatingActionsMenu;
import com.github.florent37.materialviewpager.MaterialViewPager;
import com.github.florent37.materialviewpager.header.HeaderDesign;

import org.greenrobot.eventbus.EventBus;
import org.greenrobot.eventbus.Subscribe;
import org.greenrobot.eventbus.ThreadMode;

import java.util.Date;

import de.hdodenhof.circleimageview.CircleImageView;
import moe.protector.pe.activity.FragmentActivity;
import moe.protector.pe.activity.HtmlActivity;
import moe.protector.pe.activity.LoginActivity;
import moe.protector.pe.fragment.LogFragment;
import moe.protector.pe.fragment.MainFragment;
import moe.protector.pe.fragment.TaskFragment;
import moe.protector.pe.game.Setting;
import moe.protector.pe.game.TaskManager;
import moe.protector.pe.game.UserData;
import moe.protector.pe.service.MainService;
import moe.protector.pe.util.Config;
import moe.protector.pe.util.EventBusUtil;
import moe.protector.pe.util.FileUtil;

import static moe.protector.pe.activity.FragmentActivity.ERROR_FRAGMENT;
import static moe.protector.pe.util.EventBusUtil.EVENT_FLEET_CHANGE;
import static moe.protector.pe.util.EventBusUtil.EVENT_LOGIN_FINISH;
import static moe.protector.pe.util.EventBusUtil.EVENT_RES_CHANGE;
import static moe.protector.pe.util.EventBusUtil.EVENT_TASK_CHANGE;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {
    private static final String TAG = "MainActivity";
    private UserData userData = UserData.getInstance();
    private DrawerLayout mDrawerLayout;
    private boolean isConnected = false;
    private MainService.MainBinder mainBinder;


    public static final int TASK_CHANGE = 1;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        // 绑定服务
        Intent bindIntent = new Intent(this, MainService.class);
        isConnected = bindService(bindIntent, serviceConnection, BIND_AUTO_CREATE);
        // 初始化设置
        Setting.getInstance().init();
        // 设置侧滑菜单
        setTitle("");
        mDrawerLayout = findViewById(R.id.drawer_layout);
        // 注册EventBus
        EventBus.getDefault().register(this);
        // 设置主页面
        MaterialViewPager materialViewPager = findViewById(R.id.materialViewPager);
        materialViewPager.getViewPager().setAdapter(new FragmentPagerAdapter(getSupportFragmentManager()) {
            @Override
            public Fragment getItem(int i) {
                switch (i) {
                    case 0:
                        return MainFragment.getInstance();
                    case 1:
                        return TaskFragment.getInstance();
                    case 2:
                        return LogFragment.newInstance();
                    default:
                        return LogFragment.newInstance();
                }
            }

            @Override
            public int getCount() {
                return 3;
            }

            @Override
            public CharSequence getPageTitle(int position) {
                switch (position) {
                    case 0:
                        return "状态";
                    case 1:
                        return "任务";
                    case 2:
                        return "日志";
//                    case 3:
//                        return "工具";
                }
                return null;
            }
        });


        Toolbar toolbar = materialViewPager.getToolbar();
        if (toolbar != null) {
            setSupportActionBar(toolbar);
            ActionBar actionBar = getSupportActionBar();
            actionBar.setDisplayHomeAsUpEnabled(true);
            actionBar.setDisplayShowHomeEnabled(true);
            actionBar.setDisplayShowTitleEnabled(true);
            actionBar.setDisplayUseLogoEnabled(false);
            actionBar.setHomeButtonEnabled(true);
            actionBar.setHomeAsUpIndicator(R.drawable.ic_menu1);
        }

        materialViewPager.getViewPager().setOffscreenPageLimit(materialViewPager.getViewPager().getAdapter().getCount());
        materialViewPager.getPagerTitleStrip().setViewPager(materialViewPager.getViewPager());

        // 设置颜色
        materialViewPager.setMaterialViewPagerListener(page -> {
            switch (page) {
                case 0:
                    return HeaderDesign.fromColorResAndUrl(
                            R.color.blue,
                            Config.SETU[0]);
                case 1:
                    return HeaderDesign.fromColorResAndUrl(
                            R.color.green,
                            Config.SETU[1]);
                case 2:
                    return HeaderDesign.fromColorResAndUrl(
                            R.color.cyan,
                            Config.SETU[2]);
//                case 3:
//                    return HeaderDesign.fromColorResAndUrl(
//                            R.color.red,
//                            "https://acg.toubiec.cn/random?size=mw690&r=" + Config.RAND[3]);
            }
            return null;
        });
        // 悬悬浮窗事件
        FloatingActionButton actionButtonAddTask = findViewById(R.id.action_add_task);
        FloatingActionButton actionButtonSetTask = findViewById(R.id.action_set_task);
        FloatingActionButton actionButtonSetting = findViewById(R.id.action_setting);
        actionButtonAddTask.setOnClickListener(this);
        actionButtonSetTask.setOnClickListener(this);
        actionButtonSetting.setOnClickListener(this);

        // 判断是否登录成功的, 唤起登录activity
        if (!Config.hasLogin){
            Intent intent = new Intent(MainActivity.this, LoginActivity.class);
            startActivityForResult(intent, LoginActivity.REQUEST_CODE);
        }

        NavigationView navigationView = findViewById(R.id.nav_view);
        navigationView.setNavigationItemSelectedListener(menuItem -> {
            mDrawerLayout.closeDrawers();
            switch (menuItem.getItemId()) {
                case R.id.nav_err:
                    Intent intent = new Intent(MainActivity.this, FragmentActivity.class);
                    intent.putExtra("type", ERROR_FRAGMENT);
                    startActivity(intent);
                    break;
            }

            return true;
        });
    }

    @Override
    public void onClick(View v) {
        FloatingActionsMenu floatingActionsMenu = findViewById(R.id.multiple_actions);
        switch (v.getId()) {
            case R.id.action_add_task:
                Log.i(TAG, "[UI] 开启任务界面");
                floatingActionsMenu.collapse();
                Intent intent = new Intent(MainActivity.this, HtmlActivity.class);
                intent.putExtra("type", HtmlActivity.HTML_TASK);
                startActivityForResult(intent, HtmlActivity.REQUEST_CODE);
                break;
            case R.id.action_set_task:
                Log.i(TAG, "[UI] 开启路径界面");
                floatingActionsMenu.collapse();
                Intent intent2 = new Intent(MainActivity.this, HtmlActivity.class);
                intent2.putExtra("type", HtmlActivity.HTML_TASK_MANAGER);
                startActivity(intent2);
                break;
            case R.id.action_setting:
                Log.i(TAG, "[UI] 开启设置界面");
                floatingActionsMenu.collapse();
                Intent intent1 = new Intent(MainActivity.this, FragmentActivity.class);
                intent1.putExtra("type", FragmentActivity.SETTING_FRAGMENT);
                startActivity(intent1);
                break;
        }
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        switch (requestCode){
            case LoginActivity.REQUEST_CODE: // 登录界面的返回值
                if (resultCode == RESULT_OK){
                    new EventBusUtil(EVENT_LOGIN_FINISH, "登录完成").post();
                    new EventBusUtil(EVENT_RES_CHANGE).post();
                    new EventBusUtil(EVENT_FLEET_CHANGE).post();
                    new EventBusUtil(EVENT_TASK_CHANGE).post();
                } else {
                    finish();
                }
                break;
            case HtmlActivity.REQUEST_CODE:  // h5界面返回值
                if (resultCode == TASK_CHANGE) {  // 更新任务界面, 更新ui"));
                    new EventBusUtil(EVENT_TASK_CHANGE, "任务发生更新, 更新ui").post();
                }
                break;

        }

    }

    long lastPressTime = 0;

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.main_main, menu);
        return super.onCreateOptionsMenu(menu);
    }

    @Override
    public void onBackPressed() {
        if (new Date().getTime() - lastPressTime < 1000) {
            moveTaskToBack(false);
        } else {
            lastPressTime = new Date().getTime();  // 重置lastPressTime
            View v = getWindow().getDecorView().findViewById(R.id.coordinatorLayout);
            Snackbar.make(v, "再按一次返回桌面", Snackbar.LENGTH_SHORT)
                    .setAction("退出程序", v1 -> {
                        mainBinder.cancelNotification();
                        Intent intent = new Intent(this, MainService.class);
                        stopService(intent);
                        finish();
                        System.exit(0);
                    })
                    .show();
        }
    }


    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()) {
            case android.R.id.home:  // 点击home键
                mDrawerLayout.openDrawer(Gravity.START);
                break;
            case R.id.menu_play:
                TaskManager.isRun = !TaskManager.isRun;
                item.setIcon(TaskManager.isRun? R.drawable.play: R.drawable.stop);
                View v = getWindow().getDecorView().findViewById(R.id.coordinatorLayout);
                Snackbar.make(v, "已" + (TaskManager.isRun? "开始": "停止") + "任务", Snackbar.LENGTH_SHORT)
                .show();
                break;
        }
        return true;
    }

    private ServiceConnection serviceConnection = new ServiceConnection() {
        @Override
        public void onServiceConnected(ComponentName name, IBinder service) {
            mainBinder = (MainService.MainBinder)service;
        }

        @Override
        public void onServiceDisconnected(ComponentName name) {

        }
    };

    @Subscribe(threadMode = ThreadMode.MAIN)
    public void onLoginFinish(EventBusUtil util) {
        if (util.getCode() == EVENT_LOGIN_FINISH) {
            // 启动服务
            Intent intent = new Intent(MainActivity.this, MainService.class);
            startService(intent);
        }
    }


    @Override
    protected void onDestroy() {
        super.onDestroy();
        if (isConnected) {
            unbindService(serviceConnection);
            isConnected = false;
        }
        EventBus.getDefault().unregister(this);
    }

    @Subscribe(threadMode = ThreadMode.MAIN)
    public void onResChange(EventBusUtil util) {
        // 刷新界面信息
        if (util.getCode() == EVENT_RES_CHANGE) {
            try {
                TextView textView = findViewById(R.id.tv_username);
                textView.setText(userData.userBaseData.friendVo.username);
                textView = findViewById(R.id.tv_sign);
                textView.setText(userData.userBaseData.friendVo.sign);
                CircleImageView imageView = findViewById(R.id.img_mine);
                Bitmap b = FileUtil.getImageFromAssetsFile("html/images/head/" + userData.userBaseData.friendVo.avatar_cid + ".png");
                imageView.setImageBitmap(b);
            } catch (Exception e) {
            }
        }
    }

}
