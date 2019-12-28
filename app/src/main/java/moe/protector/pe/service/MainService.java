package moe.protector.pe.service;

import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.graphics.BitmapFactory;
import android.os.Binder;
import android.os.IBinder;
import android.support.v4.app.NotificationCompat;
import android.util.Log;

import java.util.Locale;

import moe.protector.pe.MainActivity;
import moe.protector.pe.R;
import moe.protector.pe.bean.TaskBean;
import moe.protector.pe.exception.HmException;
import moe.protector.pe.exception.OperateException;
import moe.protector.pe.game.Counter;
import moe.protector.pe.game.GameCampaign;
import moe.protector.pe.game.GameChallenge;
import moe.protector.pe.game.GameConstant;
import moe.protector.pe.game.GameFunction;
import moe.protector.pe.game.GamePvp;
import moe.protector.pe.game.TaskManager;
import moe.protector.pe.game.UIUpdate;
import moe.protector.pe.game.UserData;
import moe.protector.pe.util.CommonUtil;
import moe.protector.pe.util.EventBusUtil;
import moe.protector.pe.util.Util;

public class MainService extends Service {
    private static final String TAG = "MainService";
    public static Context mContext;
    private NotificationManager manager;
    private MainBinder mBinder = new MainBinder();
    private Thread thread;
    private GameFunction gameFunction = GameFunction.getInstance();
    private GameConstant gameConstant = GameConstant.getInstance();
    private UserData userData = UserData.getInstance();
    private TaskManager taskManager = TaskManager.getInstance();
    private static boolean inRun = false;

    public MainService() {
    }

    @Override
    public void onCreate() {
        super.onCreate();
        mContext = getApplicationContext();
        //设置通知
        Intent intent = new Intent(this, MainActivity.class);
        PendingIntent pi = PendingIntent.getActivity(this, 0, intent, 0);
        manager = (NotificationManager) getSystemService(Service.NOTIFICATION_SERVICE);
        //安卓8.0适配
        NotificationCompat.Builder builder = new NotificationCompat.Builder(this, "1");
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.O){
            String id = "my_channel_01";
            NotificationChannel mChannel;
            mChannel = new NotificationChannel(id,"my_channel", NotificationManager.IMPORTANCE_DEFAULT);
            manager.createNotificationChannel(mChannel);
            builder.setChannelId(id);
        }
        //显示通知
        builder
                .setContentTitle("护萌宝")
                .setContentText("正在后台运行")
                .setSmallIcon(R.mipmap.icon)
                .setLargeIcon(BitmapFactory.decodeResource(getResources(), R.mipmap.icon))
                .setSmallIcon(R.mipmap.icon)
                .setContentIntent(pi)
                .setOngoing(true)
                .setVisibility(NotificationCompat.VISIBILITY_PUBLIC);
        manager.notify(1, builder.build());
    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        // 主进程开始
        thread = new Thread(() -> {
            UIUpdate.log("[线程] 开启主线程");
            inRun = true;
            while (true) {
                try {
                    mainThread();
                } catch (HmException e) {
                    Log.e(TAG, "[错误] 主线程发生错误:" + e.toString());
                    UIUpdate.log("[错误] 主线程发生错误:" + e.toString());

                    switch (e.getCode()) {
                        case "-9999":
                            UIUpdate.log("[致命] 服务器维护, 终止进程" + e.toString());
                            return;
                        case "-102":
                        case "-105":
                        case "-106":
                        case "-107":
                        case "-108":
                        case "-204":
                        case "-203":
                            UIUpdate.log("[致命] 资源不足, 终止所有任务" + e.toString());
                            TaskManager.isRun = false;
                            break;
                        case "-9995":
                            UIUpdate.log("[警告] 登录失效, 尝试重新登录" + e.toString());
                            if (!gameFunction.reLogin()) return;
                            break;
                        default:
                            if (!gameFunction.reLogin()) return;
                            break;


                    }
                } catch (Exception e) {
                    Log.i(TAG, "[错误] 发生错误" + e.getMessage());
                    Util.getErrMsg(e);
                }
            }
        });
        thread.start();
        return super.onStartCommand(intent, flags, startId);
    }

    private void mainThread() throws HmException, OperateException {
        Counter counter = Counter.getInstance();
        new EventBusUtil(TAG + ".onStartCommand", EventBusUtil.EVENT_RES_CHANGE).post();
        while (true) {
            // 开始检测任务
            TaskBean taskBean = taskManager.getAvailableTask();
            if (taskBean != null) {
                // 有任务, 进行调用
                new EventBusUtil(TAG + "mainThread", EventBusUtil.EVENT_NOW_TASK_CHANGE, String.format(Locale.CHINA,"%s   %d/%d", taskBean.name, taskBean.num, taskBean.num_max)).post();
                if (taskBean.type.equals("battle")) {
                    // 出征任务
                    GameChallenge challenge = new GameChallenge(taskBean);
                    GameChallenge.Finish finish = challenge.execute();
                    Log.i(TAG, "[出征] 出征结束:" + finish.toString());
                    switch (finish) {
                        case FINISH:
                            counter.finishNumAdd();
                            taskBean.num ++;
                            taskManager.writeFile();
                            new EventBusUtil(TAG + "mainThread", EventBusUtil.EVENT_TASK_CHANGE).post();
                            break;
                        case DISMANTLE:
                            UIUpdate.log("[错误] 船舱已满, 无法进行出征");
                            taskBean.finish();
                            break;
                        case REPAIR:
                            UIUpdate.log("[错误] 无法修理船只, 停止任务");
                            taskBean.finish();
                            break;
                        case ERROR:
                            UIUpdate.detailLog("[错误] 出现错误, 尝试重新登录");
                            if (!gameFunction.reLogin()) return;
                            break;
                    }
                    TaskManager.getInstance().writeFile();
                } else if(taskBean.type.equals("pvp")) {
                    // 演习任务
                    GamePvp gamePvp = new GamePvp(taskBean);
                    GamePvp.Finish finish = gamePvp.execute();
                    switch (finish) {
                        case ERROR:
                            UIUpdate.detailLog("[错误] 出现错误, 尝试重新登录");
                            if (!gameFunction.reLogin()) return;
                            break;
                        case FINISH:
                            taskBean.num += 1;
                            taskManager.writeFile();
                            new EventBusUtil(TAG + "mainThread", EventBusUtil.EVENT_TASK_CHANGE).post();
                            break;
                    }
                } else if(taskBean.type.equals("campaign")) {
                    GameCampaign gameCampaign = new GameCampaign(taskBean);
                    GameCampaign.Finish finish = gameCampaign.execute();
                    switch (finish) {
                        case FINISH:
                            taskBean.finish();
                            break;
                        case SL:
                            taskBean.num += 1;
                            taskManager.writeFile();
                            new EventBusUtil(TAG + "mainThread", EventBusUtil.EVENT_TASK_CHANGE).post();
                            break;
                        case REPAIR:
                            UIUpdate.log("[错误] 无法修理船只, 停止任务");
                            taskBean.finish();
                            break;
                        case ERROR:
                            UIUpdate.detailLog("[错误] 出现错误, 尝试重新登录");
                            if (!gameFunction.reLogin()) return;
                            break;
                    }

                }
            } else {
                new EventBusUtil(TAG + "mainThread", EventBusUtil.EVENT_NOW_TASK_CHANGE, "空闲模式").post();
            }
            gameFunction.checkExplore();
            CommonUtil.delay(2000);
        }
    }


    @Override
    public IBinder onBind(Intent intent) {
        return mBinder;
    }

    public class MainBinder extends Binder{
        public void cancelNotification(){
            manager.cancel(1);
            stopSelf();
        }

        public MainService mainService(){
            return MainService.this;
        }
    }

    //销毁时取消通知
    @Override
    public void onDestroy() {
        super.onDestroy();
        stopForeground(true);
        if (inRun) {
            thread.interrupt();
        }
        manager.cancel(1);
        Log.i(TAG, "[服务] 主服务停止");
    }
}
