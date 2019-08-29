package ink.z31.liverprotector.fragment;


import android.os.Bundle;
import android.support.v14.preference.PreferenceFragment;

import ink.z31.liverprotector.R;
import ink.z31.liverprotector.game.Setting;

public class SettingFragment extends PreferenceFragment {
    private static final String TAG = "SettingFragment";
    @Override
    public void onCreatePreferences(Bundle bundle, String s) {

    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        addPreferencesFromResource(R.xml.pref_settings);
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        Setting.getInstance().init();
    }
}
