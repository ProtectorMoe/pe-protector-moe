package ink.z31.liverprotector.service;

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

import ink.z31.liverprotector.MainActivity;
import ink.z31.liverprotector.R;
import ink.z31.liverprotector.bean.TaskBean;
import ink.z31.liverprotector.exception.HmException;
import ink.z31.liverprotector.exception.OperateException;
import ink.z31.liverprotector.game.Counter;
import ink.z31.liverprotector.game.GameChallenge;
import ink.z31.liverprotector.game.GameConstant;
import ink.z31.liverprotector.game.GameFunction;
import ink.z31.liverprotector.game.TaskManager;
import ink.z31.liverprotector.game.UIUpdate;
import ink.z31.liverprotector.game.UserData;
import ink.z31.liverprotector.util.CommonUtil;
import ink.z31.liverprotector.util.EventBusUtil;
import ink.z31.liverprotector.util.Util;

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
                .setContentTitle("护肝宝")
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
        while (true) {
            // 开始检测任务
            TaskBean taskBean = taskManager.getAvailableTask();
            if (taskBean != null) {
                // 有任务, 进行调用
                new EventBusUtil(EventBusUtil.EVENT_NOW_TASK_CHANGE, String.format(Locale.CHINA,"%s   %d/%d", taskBean.name, taskBean.num, taskBean.num_max)).post();
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
                            new EventBusUtil(EventBusUtil.EVENT_TASK_CHANGE).post();
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
                            UIUpdate.detailLog("[错误] 出现错误, 开始");
                            if (!gameFunction.reLogin()) return;
                            break;
                    }
                    TaskManager.getInstance().writeFile();
                }
            } else {
                new EventBusUtil(EventBusUtil.EVENT_NOW_TASK_CHANGE, "空闲模式").post();
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
