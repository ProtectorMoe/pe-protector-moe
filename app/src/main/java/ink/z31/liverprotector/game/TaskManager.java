package ink.z31.liverprotector.game;

import android.content.Context;
import android.content.SharedPreferences;
import android.util.Log;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import ink.z31.liverprotector.bean.TaskBean;
import ink.z31.liverprotector.util.App;

public class TaskManager {
    private static final String TAG = "TaskManager";
    private static TaskManager taskManager;
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

    public void swap(int o, int n) {
        Collections.swap(taskBeanList, o, n);
        this.writeFile();
    }


    public void writeFile() {
        String data = JSON.toJSONString(taskBeanList);
        SharedPreferences.Editor editor = App.getContext().getSharedPreferences("task",Context.MODE_PRIVATE).edit();
        editor.putString("list", data);
        editor.apply();
    }

    private void readFile() {
        SharedPreferences preferences = App.getContext().getSharedPreferences("task", Context.MODE_PRIVATE);
        String data = preferences.getString("list","[]");
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
    }
}
