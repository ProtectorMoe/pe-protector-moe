package ink.z31.liverprotector.activity;

import android.app.FragmentTransaction;
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;

import ink.z31.liverprotector.R;
import ink.z31.liverprotector.fragment.SettingFragment;

public class FragmentActivity extends AppCompatActivity {
    public static final int SETTING_FRAGMENT = 0;
    private static final String TAG = "FragmentActivity";
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Intent intent = getIntent();
        switch (intent.getIntExtra("type", SETTING_FRAGMENT)) {
            case SETTING_FRAGMENT:
                Log.i(TAG, "准备设置界面");
                setContentView(R.layout.activity_fragment);
                FragmentTransaction fragmentTransaction = getFragmentManager().beginTransaction();
                fragmentTransaction.replace(android.R.id.content,new SettingFragment());
                fragmentTransaction.commit();
                break;

        }
    }
}
