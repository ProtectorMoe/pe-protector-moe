package ink.z31.liverprotector;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.support.annotation.Nullable;
import android.support.design.widget.Snackbar;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentPagerAdapter;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.ActionBar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.util.Log;
import android.view.Gravity;
import android.view.MenuItem;
import android.view.View;

import com.getbase.floatingactionbutton.FloatingActionButton;
import com.github.florent37.materialviewpager.MaterialViewPager;
import com.github.florent37.materialviewpager.header.HeaderDesign;

import org.greenrobot.eventbus.EventBus;

import java.util.Date;
import java.util.List;

import ink.z31.liverprotector.activity.FragmentActivity;
import ink.z31.liverprotector.activity.HtmlActivity;
import ink.z31.liverprotector.activity.LoginActivity;
import ink.z31.liverprotector.fragment.LogFragment;
import ink.z31.liverprotector.fragment.MainFragment;
import ink.z31.liverprotector.fragment.TaskFragment;
import ink.z31.liverprotector.game.UserData;
import ink.z31.liverprotector.interfaces.UpdateUiMainInterface;
import ink.z31.liverprotector.util.App;
import ink.z31.liverprotector.util.Config;
import ink.z31.liverprotector.util.EventBusUtil;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {
    private static final String TAG = "MainActivity";
    private UserData userData = UserData.getInstance();
    private DrawerLayout mDrawerLayout;
    private MaterialViewPager materialViewPager;
    private List<Fragment> fragmentList;
    private App app;

    public static final int ON_RES_CHANGE = 0;
    public static final int ON_FLEET_CHANGE = 1;

    public static final int TASK_CHANGE = 1;

    public Handler handler = new Handler(msg -> {
        switch (msg.what) {
            case ON_RES_CHANGE:
                updateRes();
                break;
            case ON_FLEET_CHANGE:
                updateFleet();
                break;

        }
        return true;
    });

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        app = (App)getApplication();
        app.setHandler(App.HANDLER_MAIN_ACTIVITY, handler);
        setContentView(R.layout.activity_main);
        // 设置侧滑菜单
        setTitle("");
        mDrawerLayout = findViewById(R.id.drawer_layout);
        // 注册EventBus
        // EventBus.getDefault().register(this);
        // 设置主页面
        materialViewPager = findViewById(R.id.materialViewPager);
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
                            "https://acg.toubiec.cn/random?size=mw690&r=" + Config.RAND[0]);
                case 1:
                    return HeaderDesign.fromColorResAndUrl(
                            R.color.green,
                            "https://acg.toubiec.cn/random?size=mw690&r=" + Config.RAND[1]);
                case 2:
                    return HeaderDesign.fromColorResAndUrl(
                            R.color.cyan,
                            "https://acg.toubiec.cn/random?size=mw690&r=" + Config.RAND[2]);
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

    }

    @Override
    public void onClick(View v) {
        switch (v.getId()) {
            case R.id.action_add_task:
                Intent intent = new Intent(MainActivity.this, HtmlActivity.class);
                intent.putExtra("type", HtmlActivity.HTML_TASK);
                startActivityForResult(intent, HtmlActivity.REQUEST_CODE);
                break;
            case R.id.action_set_task:
                Intent intent2 = new Intent(MainActivity.this, HtmlActivity.class);
                intent2.putExtra("type", HtmlActivity.HTML_TASK_MANAGER);
                startActivity(intent2);
                break;
            case R.id.action_setting:
                Log.i(TAG, "开启设置界面");
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

                }
                break;
            case HtmlActivity.REQUEST_CODE:  // h5界面返回值
                if (resultCode == TASK_CHANGE) {  // 更新任务界面
                    EventBus.getDefault().post(new EventBusUtil(EventBusUtil.EVENT_TASK_CHANGE, "任务发生更新, 更新ui"));
                }
                break;

        }

    }

    long lastPressTime = 0;
    @Override
    public void onBackPressed() {
        if (new Date().getTime() - lastPressTime < 1000) {
            finish();
        } else {
            lastPressTime = new Date().getTime();  // 重置lastPressTime
            View v = getWindow().getDecorView().findViewById(R.id.coordinatorLayout);
            Snackbar.make(v, "再按一次返回桌面", Snackbar.LENGTH_SHORT)
                    .setAction("退出程序", v1 -> {
                        finish();
                        System.exit(0);
                    })
                    .show();
        }
    }

    public void updateRes() {
        Fragment fragment = getSupportFragmentManager().findFragmentById(R.id.fragment_main);
        UpdateUiMainInterface mainInterface = (UpdateUiMainInterface)fragment;
        mainInterface.onResChange();
    }

    public void updateFleet() {
        Fragment fragment = getSupportFragmentManager().findFragmentById(R.id.fragment_main);
        UpdateUiMainInterface mainInterface = (UpdateUiMainInterface)fragment;
        mainInterface.onFleetChange();
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()) {
            case android.R.id.home:
                mDrawerLayout.openDrawer(Gravity.START);
                break;
        }
        return true;
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        // EventBus.getDefault().unregister(this);
    }
}
