package moe.protector.pe.adapter;

import com.chad.library.adapter.base.BaseItemDraggableAdapter;
import com.chad.library.adapter.base.BaseViewHolder;

import java.util.List;

import moe.protector.pe.R;
import moe.protector.pe.bean.TaskBean;
import moe.protector.pe.bean.common.FleetVo;
import moe.protector.pe.game.UserData;

public class TaskListAdapter extends BaseItemDraggableAdapter<TaskBean, BaseViewHolder> {
    public TaskListAdapter(List<TaskBean> data) {
        super(R.layout.task_item, data);
    }

    @Override
    protected void convert(BaseViewHolder helper, TaskBean item) {
        // 显示控件


        UserData userData = UserData.getInstance();
        if (item.type.equals("battle")) {
            // 战役显示
            helper.setText(R.id.task_item_name, item.name);
            helper.setText(R.id.task_item_num, item.num + "/" + item.num_max);
            FleetVo fleetVo = userData.fleet.get(String.valueOf(item.battleData.fleet));
            helper.setText(R.id.task_item_fleet, fleetVo != null ? fleetVo.title : "未知舰队");
        } else if (item.type.equals("pvp")) {
            //演习显示
            helper.setText(R.id.task_item_name, "演习");
            helper.setText(R.id.task_item_num, "0/1");
            FleetVo fleetVo = userData.fleet.get(String.valueOf(item.pvpData.fleet));
            helper.setText(R.id.task_item_fleet, fleetVo != null ? fleetVo.title : "未知舰队");
        } else if (item.type.equals("campaign")) {
            helper.setText(R.id.task_item_name, item.name);
            helper.setText(R.id.task_item_num, item.num + "/" + item.num_max);
            helper.setText(R.id.task_item_fleet, "战役舰队");
        }
        // 绑定点击事件
        helper.addOnClickListener(R.id.task_item_setting);
    }
}