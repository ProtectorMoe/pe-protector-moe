package moe.protector.pe.fragment;

import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.Context;
import android.os.Bundle;
import android.support.design.widget.Snackbar;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;

import moe.protector.pe.R;
import moe.protector.pe.util.App;
import moe.protector.pe.util.Config;


public class ErrorFragment extends Fragment {
    private static ErrorFragment fragment;

    public static ErrorFragment getInstance() {
        if (fragment == null) {
            fragment = new ErrorFragment();
        }
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {

        return inflater.inflate(R.layout.fragment_error, container, false);
    }

    @Override
    public void onStart() {
        super.onStart();
        View view = getView();
        if (view != null) {
            TextView textView = view.findViewById(R.id.tv_err_msg);
            textView.setText(Config.errMsg);

            Button button = view.findViewById(R.id.bt_err_msg);
            button.setOnClickListener(v -> {
                ClipboardManager cm = (ClipboardManager) App.getContext().getSystemService(Context.CLIPBOARD_SERVICE);
                ClipData mClipData = ClipData.newPlainText("Label", Config.errMsg);
                cm.setPrimaryClip(mClipData);
                Snackbar.make(view, "已复制到剪贴板", Snackbar.LENGTH_SHORT).show();
            });
        }
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        fragment = null;
    }
}
