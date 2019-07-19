package ink.z31.liverprotector.fragment;

import android.app.Activity;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.support.v7.widget.helper.ItemTouchHelper;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebView;

import com.chad.library.adapter.base.callback.ItemDragAndSwipeCallback;
import com.chad.library.adapter.base.listener.OnItemDragListener;
import com.github.florent37.materialviewpager.header.MaterialViewPagerHeaderDecorator;

import org.greenrobot.eventbus.EventBus;
import org.greenrobot.eventbus.Subscribe;
import org.greenrobot.eventbus.ThreadMode;

import java.util.List;

import cn.pedant.SweetAlert.SweetAlertDialog;
import ink.z31.liverprotector.R;
import ink.z31.liverprotector.adapter.TaskListAdapter;
import ink.z31.liverprotector.bean.TaskBean;
import ink.z31.liverprotector.game.TaskManager;
import ink.z31.liverprotector.util.App;
import ink.z31.liverprotector.util.EventBusUtil;

public class TaskFragment extends Fragment {
    private static final String TAG = "TaskFragment";
    private TaskListAdapter adapter;
    private WebView webview;
    public TaskFragment() { }

    public static TaskFragment getInstance() {
        return new TaskFragment();

    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EventBus.getDefault().register(this);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        return inflater.inflate(R.layout.fragment_task, container, false);
    }

    @Override
    public void onStart() {
        super.onStart();
    }

    @Override
    public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);
        Log.i(TAG, "[初始化] 任务界面初始化");
        initTaskList();
    }

    public void updateTask() {
        adapter.notifyDataSetChanged();
    }


    public void initTaskList() {
        Log.d(TAG, "[初始化] 刷新任务界面");
        View view = getView();
        if (view != null) {
            RecyclerView recyclerView = view.findViewById(R.id.task_list);
            TaskManager manager = TaskManager.getInstance();
            List<TaskBean> list = manager.getTaskList();
            adapter = new TaskListAdapter(list);
            LinearLayoutManager layoutManager = new LinearLayoutManager(App.getContext());
            recyclerView.setLayoutManager(layoutManager);
            recyclerView.addItemDecoration(new MaterialViewPagerHeaderDecorator());

            ItemDragAndSwipeCallback itemDragAndSwipeCallback = new ItemDragAndSwipeCallback(adapter);
            ItemTouchHelper itemTouchHelper = new ItemTouchHelper(itemDragAndSwipeCallback);
            itemTouchHelper.attachToRecyclerView(recyclerView);

            adapter.enableDragItem(itemTouchHelper, R.id.task_item_drug, true);
            adapter.setOnItemDragListener(new OnItemDragListener() {
                @Override
                public void onItemDragStart(RecyclerView.ViewHolder viewHolder, int pos) {
                }

                @Override
                public void onItemDragMoving(RecyclerView.ViewHolder source, int from, RecyclerView.ViewHolder target, int to) {
                    manager.writeFile();
                    Log.i(TAG, String.format("交换任务次序 from: %d  to: %d", from, to));
                }

                @Override
                public void onItemDragEnd(RecyclerView.ViewHolder viewHolder, int pos) {
                }
            });
            adapter.setOnItemChildClickListener((adapter1, view1, position) -> {
                Activity activity = getActivity();
                if (activity != null) {
                    new SweetAlertDialog(activity, SweetAlertDialog.WARNING_TYPE)
                            .setTitleText("任务")
                            .setContentText("确定删除此任务?")
                            .setCancelText("取消")
                            .setConfirmText("删除")
                            .showCancelButton(true)
                            .setCancelClickListener(sweetAlertDialog -> {
                                Log.i(TAG, "[任务] 删除取消");
                                sweetAlertDialog.cancel();
                            })
                            .setConfirmClickListener(sweetAlertDialog -> {
                                Log.i(TAG, "[任务] 删除确认");
                                manager.delTask(position);
                                updateTask();
                                sweetAlertDialog.cancel();
                            })
                            .show();
                }
            });
            recyclerView.setAdapter(adapter);

        }
    }

    @Subscribe(threadMode = ThreadMode.MAIN)
    public void onHandleEvent(EventBusUtil bus) {
        if (bus != null && bus.getCode() == EventBusUtil.EVENT_TASK_CHANGE) {
            updateTask();
        }
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        EventBus.getDefault().unregister(this);
    }
}
