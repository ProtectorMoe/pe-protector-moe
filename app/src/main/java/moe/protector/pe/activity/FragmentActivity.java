package moe.protector.pe.activity;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;

import moe.protector.pe.R;
import moe.protector.pe.fragment.ErrorFragment;

public class FragmentActivity extends AppCompatActivity {
    public static final int SETTING_FRAGMENT = 0;
    public static final int ERROR_FRAGMENT = 1;

    private static final String TAG = "FragmentActivity";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_fragment);
    }

    @Override
    protected void onStart() {
        super.onStart();
        Intent intent = getIntent();
        switch (intent.getIntExtra("type", SETTING_FRAGMENT)) {
            case SETTING_FRAGMENT:
                Log.i(TAG, "[初始化] 准备设置界面");
//                getFragmentManager().beginTransaction()
//                        .replace(android.R.id.content, new SettingFragment())
//                        .commit();
                break;
            case ERROR_FRAGMENT:
                Log.i(TAG, "[初始化] 错误日志界面");
                getSupportFragmentManager().beginTransaction()
                        .add(R.id.fragment_main, ErrorFragment.getInstance())
                        .commit();
                break;

        }
    }

}
