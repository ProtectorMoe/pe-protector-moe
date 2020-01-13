package moe.protector.pe.fragment;

import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.v4.app.Fragment;
import android.support.v4.view.ViewPager;
import android.support.v4.widget.NestedScrollView;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import com.github.florent37.materialviewpager.MaterialViewPagerHelper;

import org.greenrobot.eventbus.EventBus;
import org.greenrobot.eventbus.Subscribe;
import org.greenrobot.eventbus.ThreadMode;

import java.util.ArrayList;
import java.util.List;

import moe.protector.pe.R;
import moe.protector.pe.adapter.FleetViewPagerAdapter;
import moe.protector.pe.bean.common.FleetVo;
import moe.protector.pe.game.UserData;
import moe.protector.pe.util.EventBusUtil;
import moe.protector.pe.view.FleetRecyclerView;


public class MainFragment extends Fragment {
    private UserData userData = UserData.getInstance();
    private static MainFragment mainFragment;
    private static final String TAG = "MainFragment";


    public MainFragment() {
    }

    public static MainFragment getInstance() {
        if (mainFragment == null) {
            mainFragment = new MainFragment();
        }
        return mainFragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EventBus.getDefault().register(this);
        if (savedInstanceState != null) {
            View view = getView();
            if (view == null) return;
            TextView textView;
            textView = view.findViewById(R.id.tv_now_task);
            textView.setText(savedInstanceState.getString("tv_now_task"));
            textView = view.findViewById(R.id.tv_now_log);
            textView.setText(savedInstanceState.getString("tv_now_log"));
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        return inflater.inflate(R.layout.fragment_main, container, false);
    }


    @Override
    public void onDetach() {
        super.onDetach();
    }

    @Override
    public void onStart() {
        super.onStart();
        NestedScrollView mScrollView = getView().findViewById(R.id.nestedScrollView);
        MaterialViewPagerHelper.registerScrollView(getActivity(), mScrollView);
        onFleetChange(null);
        onResChange(null);
    }

    @Subscribe(threadMode = ThreadMode.MAIN)
    public void onFleetChange(EventBusUtil util) {
        if (util != null && util.getCode() != EventBusUtil.EVENT_FLEET_CHANGE) return;
        try {
            View view = getView();
            if (view == null) return;
            ViewPager viewPager = view.findViewById(R.id.view_page_fleet);
            final TextView textView = view.findViewById(R.id.title_fleet);
            FleetVo fleetVo = userData.fleet.get(String.valueOf(viewPager.getCurrentItem() + 1));
            textView.setText(fleetVo != null ? fleetVo.title : "");
            List<FleetRecyclerView> views = new ArrayList<>();
            for (int i = 1; i <= 8; i++) {
                FleetRecyclerView recyclerView = new FleetRecyclerView(getContext());
                recyclerView.setFleet(String.valueOf(i));
                views.add(recyclerView);
            }
            FleetViewPagerAdapter adapter = new FleetViewPagerAdapter(views);
            viewPager.setAdapter(adapter);
            viewPager.addOnPageChangeListener(new ViewPager.OnPageChangeListener() {
                @Override
                public void onPageScrolled(int i, float v, int i1) {

                }

                @Override
                public void onPageSelected(int i) {
                    FleetVo fleet = userData.fleet.get(String.valueOf(i + 1));
                    if (fleet != null) {
                        textView.setText(fleet.title);
                    }
                }

                @Override
                public void onPageScrollStateChanged(int i) {

                }
            });
        } catch (Exception e) {
            Log.e(TAG, "刷新Fleet出现问题");
            e.printStackTrace();
        }
    }

    @Subscribe(threadMode = ThreadMode.MAIN)
    public void onResChange(EventBusUtil util) {
        if (util == null || util.getCode() != EventBusUtil.EVENT_RES_CHANGE) return;
        try {
            View view = getView();
            if (view == null) return;
            TextView oil = view.findViewById(R.id.tv_oil);
            TextView ammo = view.findViewById(R.id.tv_ammo);
            TextView steel = view.findViewById(R.id.tv_steel);
            TextView aluminium = view.findViewById(R.id.tv_aluminium);
            TextView qz = view.findViewById(R.id.tv_qz);
            TextView xy = view.findViewById(R.id.tv_xy);
            TextView zl = view.findViewById(R.id.tv_zl);
            TextView hm = view.findViewById(R.id.tv_hm);
            TextView qt = view.findViewById(R.id.tv_qt);
            TextView ship = view.findViewById(R.id.tv_ship);
            TextView equipment = view.findViewById(R.id.tv_equipment);
            TextView repair = view.findViewById(R.id.tv_repair);
            oil.setText(String.valueOf(userData.userBaseData.userVo.oil));
            ammo.setText(String.valueOf(userData.userBaseData.userVo.ammo));
            steel.setText(String.valueOf(userData.userBaseData.userVo.steel));
            aluminium.setText(String.valueOf(userData.userBaseData.userVo.aluminium));
            qz.setText(String.valueOf(userData.packageGet(UserData.PACKAGE_DD_CUBE)));
            xy.setText(String.valueOf(userData.packageGet(UserData.PACKAGE_CL_CUBE)));
            zl.setText(String.valueOf(userData.packageGet(UserData.PACKAGE_BB_CUBE)));
            hm.setText(String.valueOf(userData.packageGet(UserData.PACKAGE_CV_CUBE)));
            qt.setText(String.valueOf(userData.packageGet(UserData.PACKAGE_SS_CUBE)));

            ship.setText(String.format(getResources().getString(R.string.ship_num), userData.allShip.size(), userData.shipNumTop));
            equipment.setText(String.format(getResources().getString(R.string.equipment_num), userData.equipmentSize(), userData.equipmentNumTop));
            repair.setText(String.valueOf(userData.packageGet(UserData.PACKAGE_FAST_REPAIR)));
        } catch (Exception e) {
            Log.e(TAG, "刷新Res出现问题");
            e.printStackTrace();
        }
    }

    @Subscribe(threadMode = ThreadMode.MAIN)
    public void onNowTaskChange(EventBusUtil util) {
        if (util != null && util.getCode() == EventBusUtil.EVENT_NOW_TASK_CHANGE) {
            View view = getView();
            if (view == null) return;
            TextView textView = view.findViewById(R.id.tv_now_task);
            textView.setText("当前任务: " + util.getMessage());
        }
    }

    @Subscribe(threadMode = ThreadMode.MAIN)
    public void onDetailLog(EventBusUtil util) {
        if (util != null && (util.getCode() == EventBusUtil.EVENT_DETAIL_LOG_ADD || util.getCode() == EventBusUtil.EVENT_LOG_ADD)) {
            View view = getView();
            if (view == null) return;
            TextView textView = view.findViewById(R.id.tv_now_log);
            textView.setText(util.getMessage());
        }
    }


    @Override
    public void onDestroy() {
        super.onDestroy();
        EventBus.getDefault().unregister(this);
    }

    @Override
    public void onSaveInstanceState(@NonNull Bundle outState) {
        super.onSaveInstanceState(outState);
        View view = getView();
        if (view == null) return;
        TextView textView = view.findViewById(R.id.tv_now_task);
        outState.putString("tv_now_task", String.valueOf(textView.getText()));
        textView = view.findViewById(R.id.tv_now_log);
        outState.putString("tv_now_log", String.valueOf(textView.getText()));
    }
}
