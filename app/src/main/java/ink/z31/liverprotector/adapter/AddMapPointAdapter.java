package ink.z31.liverprotector.adapter;

import android.support.annotation.NonNull;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import java.util.List;

import ink.z31.liverprotector.R;

public class AddMapPointAdapter extends RecyclerView.Adapter<FleetMemberAdapter.ViewHolder> {
    private List<AddMapPoint> mAddMapPoint;

    public AddMapPointAdapter(List<AddMapPoint> addMapPoints){
        mAddMapPoint = addMapPoints;
    }

    static class ViewHolder extends RecyclerView.ViewHolder {
        public ViewHolder(@NonNull View itemView) {
            super(itemView);

        }
    }

    @NonNull
    @Override
    public FleetMemberAdapter.ViewHolder onCreateViewHolder(@NonNull ViewGroup viewGroup, int i) {
        View view = LayoutInflater.from(viewGroup.getContext()).inflate(R.layout.fleet_item, viewGroup, false);
        FleetMemberAdapter.ViewHolder viewHolder = new FleetMemberAdapter.ViewHolder(view);
        return viewHolder;
    }

    @Override
    public void onBindViewHolder(@NonNull FleetMemberAdapter.ViewHolder viewHolder, int i) {

    }

    @Override
    public int getItemCount() {
        return mAddMapPoint.size();
    }
}
