package moe.protector.pe.adapter;

import android.support.v4.view.PagerAdapter;
import android.view.View;
import android.view.ViewGroup;

import java.util.List;

import moe.protector.pe.view.FleetRecyclerView;

public class FleetViewPagerAdapter extends PagerAdapter {
    private List<FleetRecyclerView> fleetList;

    public FleetViewPagerAdapter(List<FleetRecyclerView> list) {
        fleetList=list;
    }

    @Override
    public int getCount() {
        return fleetList.size();
    }

    @Override
    public boolean isViewFromObject(View view, Object object) {
        return view==object;
    }

    @Override
    public Object instantiateItem(ViewGroup container, int position) {
        View view = fleetList.get(position);
        container.addView(view);
        return view;
    }

    @Override
    public void destroyItem(ViewGroup container, int position, Object object) {
        container.removeView(fleetList.get(position));
    }

}
