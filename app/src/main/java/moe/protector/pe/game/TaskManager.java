package moe.protector.pe.game;

import android.content.Context;
import android.content.SharedPreferences;
import android.util.Log;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import moe.protector.pe.bean.task.TaskBean;
import moe.protector.pe.util.App;
import moe.protector.pe.util.DateUtil;
import moe.protector.pe.util.EventBusUtil;

public class TaskManager {
    private static final String TAG = "TaskManager";
    private static TaskManager taskManager;

    public static boolean isRun = true;

    public static TaskManager getInstance() {
        if (taskManager == null) {
            taskManager = new TaskManager();
        }
        return taskManager;
    }

    private List<TaskBean> taskBeanList = new ArrayList<>();

    private TaskManager() {
        readFile();
    }


    /**
     * 接收来自WebView传过来的数据
     */
    public void addTask(String data) {
        try {
            TaskBean bean = JSON.parseObject(data, TaskBean.class);
            taskBeanList.add(bean);
            writeFile();
        } catch (Exception e) {
            Log.e(TAG, "解析配置出错");
            e.printStackTrace();
        }

    }

    public void writeFile() {
        Log.i(TAG, "[任务] 写入任务配置");
        String data = JSON.toJSONString(taskBeanList);
        Log.d(TAG, data);
        SharedPreferences.Editor editor = App.getContext().getSharedPreferences("task", Context.MODE_PRIVATE).edit();
        editor.putString("list", data);
        editor.apply();
    }

    private void readFile() {
        SharedPreferences preferences = App.getContext().getSharedPreferences("task", Context.MODE_PRIVATE);
        String data = preferences.getString("list", "[]");
        Log.d(TAG, data);
        try {
            Log.d(TAG, "用户任务:" + data);
            JSONArray array = JSON.parseArray(data);
            taskBeanList = array.toJavaList(TaskBean.class);
        } catch (Exception e) {
            Log.e(TAG, "读取用户任务出错!");
            e.printStackTrace();
        }
    }

    public List<TaskBean> getTaskList() {
        return this.taskBeanList;
    }

    public void delTask(int p) {
        taskBeanList.remove(p);
        writeFile();
    }

    public TaskBean getAvailableTask() {
        if (!isRun) {
            return null;
        }
        String time = DateUtil.timeStamp();
        Iterator<TaskBean> iterator = taskBeanList.iterator();
        while (iterator.hasNext()) {
            TaskBean bean = iterator.next();
            // 完成的任务
            if (bean.isFinish()) {
                iterator.remove();
                new EventBusUtil(TAG + ".getAvailableTask", EventBusUtil.EVENT_TASK_CHANGE).post();
                continue;
            }
            // 解冻
            if (Integer.valueOf(time) > bean.locked && bean.locked != -1) {
                bean.locked = -1;
            }
            // 剔除做完的任务
            if (bean.num >= bean.num_max) {
                iterator.remove();
                UIUpdate.log("[任务] 完成任务:" + bean.name);
                writeFile();
                continue;
            }
            // 合条件, 返回任务
            if (bean.locked == -1) {
                return bean;
            }
        }
        return null;
    }
}
