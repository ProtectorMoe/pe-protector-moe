package moe.protector.pe.view;

import android.content.Context;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.util.AttributeSet;
import android.widget.LinearLayout;

import java.util.ArrayList;

import moe.protector.pe.adapter.FleetMemberAdapter;
import moe.protector.pe.bean.common.FleetVo;
import moe.protector.pe.game.UserData;

public class FleetRecyclerView extends RecyclerView {
    private UserData userData = UserData.getInstance();
    public FleetRecyclerView(@NonNull Context context) {
        super(context);
    }

    public FleetRecyclerView(@NonNull Context context, @Nullable AttributeSet attrs, int defStyle) {
        super(context, attrs, defStyle);
    }

    public FleetRecyclerView(@NonNull Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);
    }

    public void setFleet(String fleet){
        LinearLayoutManager linearLayout = new LinearLayoutManager(getContext());
        linearLayout.setOrientation(LinearLayout.HORIZONTAL);
        this.setLayoutManager(linearLayout);
        FleetVo fleetVo = userData.fleet.get(fleet);
        this.setAdapter(new FleetMemberAdapter(fleetVo != null ? fleetVo.ships: new ArrayList<>()));
    }
}
