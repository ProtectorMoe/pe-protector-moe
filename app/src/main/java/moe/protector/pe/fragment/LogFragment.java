package moe.protector.pe.fragment;

import android.content.Context;
import android.net.Uri;
import android.os.Bundle;
import android.support.v4.app.Fragment;
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

import moe.protector.pe.R;
import moe.protector.pe.game.Counter;
import moe.protector.pe.game.UIUpdate;
import moe.protector.pe.game.UserData;
import moe.protector.pe.util.EventBusUtil;


public class LogFragment extends Fragment {
    private static final String TAG = "LogFragment";
    private OnFragmentInteractionListener mListener;
    private TextView textViewLog;

    public LogFragment() {

    }

    public static LogFragment newInstance() {
        LogFragment fragment = new LogFragment();
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        EventBus.getDefault().register(this);
        super.onCreate(savedInstanceState);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        return inflater.inflate(R.layout.fragment_log, container, false);
    }

    public void onButtonPressed(Uri uri) {
        if (mListener != null) {
            mListener.onFragmentInteraction(uri);
        }
    }

    @Override
    public void onAttach(Context context) {
        super.onAttach(context);
    }

    @Override
    public void onDetach() {
        super.onDetach();
        mListener = null;
    }

    public interface OnFragmentInteractionListener {
        void onFragmentInteraction(Uri uri);
    }

    @Override
    public void onStart() {
        super.onStart();
        textViewLog = getView().findViewById(R.id.tv_log);
        NestedScrollView mScrollView = getView().findViewById(R.id.log_NestedScrollView);
        MaterialViewPagerHelper.registerScrollView(getActivity(), mScrollView);
        onResChange(null);
        onAddLog(null);
    }

    @Override
    public void onDestroyView() {
        super.onDestroyView();
        textViewLog = null;
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        EventBus.getDefault().unregister(this);
    }

    @Subscribe(threadMode = ThreadMode.MAIN)
    public void onAddLog(EventBusUtil util) {
        if (util == null) {
            textViewLog.setText(UIUpdate.stringBuilder);
        } else if (util.getCode() == EventBusUtil.EVENT_LOG_ADD && textViewLog != null) {
            UIUpdate.stringBuilder.insert(0, util.getMessage() + "\n");
            textViewLog.setText(UIUpdate.stringBuilder);
        }
    }

    @Subscribe(threadMode = ThreadMode.MAIN)
    public void onResChange(EventBusUtil util) {
        if (util != null && util.getCode() == EventBusUtil.EVENT_RES_CHANGE) {
            Log.d(TAG, "[日志] 更新Res数据");
            View view = getView();
            UserData userData = UserData.getInstance();
            Counter counter = Counter.getInstance();
            if (view != null && userData != null && userData.userBaseData != null) {
                TextView tv_oil_change = view.findViewById(R.id.tv_oil_change);
                TextView tv_ammo_change = view.findViewById(R.id.tv_ammo_change);
                TextView tv_steel_change = view.findViewById(R.id.tv_steel_change);
                TextView tv_aluminium_change = view.findViewById(R.id.tv_aluminium_change);

                TextView tv_battle_num = view.findViewById(R.id.tv_battle_num);
                TextView tv_node_num = view.findViewById(R.id.tv_node_num);
                TextView tv_finish_num = view.findViewById(R.id.tv_finish_num);
                TextView tv_sl_num = view.findViewById(R.id.tv_sl_num);



                int oil = userData.userBaseData.userVo.oil - counter.getOil();
                int ammo = userData.userBaseData.userVo.ammo - counter.getAmmo();
                int steel = userData.userBaseData.userVo.steel - counter.getSteel();
                int aluminium = userData.userBaseData.userVo.aluminium - counter.getAl();

                tv_oil_change.setText((oil >= 0? "+": "") + oil);
                tv_ammo_change.setText((ammo >= 0? "+": "") + ammo);
                tv_steel_change.setText((steel >= 0? "+": "") + steel);
                tv_aluminium_change.setText((aluminium >= 0? "+": "") + aluminium);

                tv_battle_num.setText(String.valueOf(counter.getBattleNum()));
                tv_node_num.setText(String.valueOf(counter.getNodeNum()));
                tv_finish_num.setText(String.valueOf(counter.getFinishNum()));
                tv_sl_num.setText(String.valueOf(counter.getSlNum()));
            }
        }
    }
}
