package ink.z31.liverprotector.adapter;

import com.chad.library.adapter.base.BaseItemDraggableAdapter;
import com.chad.library.adapter.base.BaseViewHolder;

import java.util.List;

import ink.z31.liverprotector.R;
import ink.z31.liverprotector.bean.TaskBean;
import ink.z31.liverprotector.bean.common.FleetVo;
import ink.z31.liverprotector.game.UserData;

public class TaskListAdapter extends BaseItemDraggableAdapter<TaskBean, BaseViewHolder> {
    public TaskListAdapter(List<TaskBean> data) {
        super(R.layout.task_item, data);
    }

    @Override
    protected void convert(BaseViewHolder helper, TaskBean item) {
        // 显示控件
        helper.setText(R.id.task_item_name, item.name);
        helper.setText(R.id.task_item_num, item.num + "/" + item.num_max);
        if (item.type.equals("battle")) {
            UserData userData = UserData.getInstance();
            FleetVo fleetVo = userData.fleet.get(String.valueOf(item.battle_data.fleet));
            helper.setText(R.id.task_item_fleet, fleetVo != null ? fleetVo.title : "未知舰队");
        }
        // 绑定点击事件
        helper.addOnClickListener(R.id.task_item_setting);
    }
}