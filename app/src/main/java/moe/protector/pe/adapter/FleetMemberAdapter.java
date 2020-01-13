package moe.protector.pe.adapter;

import android.graphics.Bitmap;
import android.support.annotation.NonNull;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import java.util.ArrayList;
import java.util.List;

import moe.protector.pe.R;
import moe.protector.pe.util.FileUtil;

public class FleetMemberAdapter extends RecyclerView.Adapter<FleetMemberAdapter.ViewHolder> {
    private List<FleetMember> mFleetMember;

    public FleetMemberAdapter(List<Integer> fleet) {
        mFleetMember = new ArrayList<>();
        for (int i : fleet) {
            mFleetMember.add(new FleetMember(i));
        }
    }

    static class ViewHolder extends RecyclerView.ViewHolder {
        ImageView imageView;
        TextView textViewName;
        TextView textViewLevel;
        TextView textViewHp;

        public ViewHolder(@NonNull View itemView) {
            super(itemView);
            imageView = itemView.findViewById(R.id.fleet_item_photo);
            textViewName = itemView.findViewById(R.id.fleet_item_name);
            textViewLevel = itemView.findViewById(R.id.fleet_item_level);
            textViewHp = itemView.findViewById(R.id.fleet_item_hp);
        }
    }

    @NonNull
    @Override
    public FleetMemberAdapter.ViewHolder onCreateViewHolder(@NonNull ViewGroup viewGroup, int i) {
        View view = LayoutInflater.from(viewGroup.getContext()).inflate(R.layout.fleet_item, viewGroup, false);
        ViewHolder viewHolder = new ViewHolder(view);
        return viewHolder;
    }

    @Override
    public void onBindViewHolder(@NonNull FleetMemberAdapter.ViewHolder viewHolder, int i) {
        FleetMember fleetMember = mFleetMember.get(i);
        viewHolder.imageView.setImageResource(R.drawable.s196);
        Bitmap b = FileUtil.getImageFromAssetsFile(fleetMember.getPhoto());
        viewHolder.imageView.setImageBitmap(b);
        viewHolder.textViewName.setText(fleetMember.getName());
        viewHolder.textViewLevel.setText(fleetMember.getLevel());
        viewHolder.textViewHp.setText(fleetMember.getHp());
    }

    @Override
    public int getItemCount() {
        return mFleetMember.size();
    }
}
