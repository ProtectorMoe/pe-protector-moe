package ink.z31.liverprotector.fragment;

import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v4.view.ViewPager;
import android.support.v4.widget.NestedScrollView;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import com.github.florent37.materialviewpager.MaterialViewPagerHelper;

import java.util.ArrayList;
import java.util.List;

import ink.z31.liverprotector.R;
import ink.z31.liverprotector.adapter.FleetViewPagerAdapter;
import ink.z31.liverprotector.bean.common.FleetVo;
import ink.z31.liverprotector.game.UserData;
import ink.z31.liverprotector.interfaces.UpdateUiMainInterface;
import ink.z31.liverprotector.view.FleetRecyclerView;


public class MainFragment extends Fragment implements UpdateUiMainInterface {
    private UserData userData = UserData.getInstance();
    private static MainFragment mainFragment;
    private static final String TAG = "MainFragment";


    public MainFragment() {}

    public static MainFragment getInstance() {
        if (mainFragment == null) {
            mainFragment = new MainFragment();
        }
        return mainFragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
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
        onFleetChange();
        onResChange();
    }

    @Override
    public void onFleetChange() {
        try {
            ViewPager viewPager = getView().findViewById(R.id.view_page_fleet);
            final TextView textView = getView().findViewById(R.id.title_fleet);
            FleetVo fleetVo = userData.fleet.get(String.valueOf(viewPager.getCurrentItem()+1));
            textView.setText(fleetVo != null? fleetVo.title: "");
            List<FleetRecyclerView> views = new ArrayList<>();
            for (int i=1; i<=8; i++) {
                FleetRecyclerView view = new FleetRecyclerView(getContext());
                view.setFleet(String.valueOf(i));
                views.add(view);
            }
            FleetViewPagerAdapter adapter = new FleetViewPagerAdapter(views);
            viewPager.setAdapter(adapter);
            viewPager.addOnPageChangeListener(new ViewPager.OnPageChangeListener() {
                @Override
                public void onPageScrolled(int i, float v, int i1) {

                }

                @Override
                public void onPageSelected(int i) {
                    FleetVo fleet = userData.fleet.get(String.valueOf(i+1));
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

    @Override
    public void onResChange() {
        try {
            TextView oil = getView().findViewById(R.id.tv_oil);
            TextView ammo = getView().findViewById(R.id.tv_ammo);
            TextView steel = getView().findViewById(R.id.tv_steel);
            TextView aluminium = getView().findViewById(R.id.tv_aluminium);
            TextView qz = getView().findViewById(R.id.tv_qz);
            TextView xy = getView().findViewById(R.id.tv_xy);
            TextView zl = getView().findViewById(R.id.tv_zl);
            TextView hm = getView().findViewById(R.id.tv_hm);
            TextView qt = getView().findViewById(R.id.tv_qt);
            TextView ship = getView().findViewById(R.id.tv_ship);
            TextView equipment = getView().findViewById(R.id.tv_equipment);
            TextView repair = getView().findViewById(R.id.tv_repair);
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
        }catch (Exception e) {
            Log.e(TAG, "刷新Res出现问题");
            e.printStackTrace();
        }
    }




}
