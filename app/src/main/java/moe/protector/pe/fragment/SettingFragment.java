package moe.protector.pe.fragment;


import android.os.Bundle;
import android.support.v14.preference.PreferenceFragment;

import moe.protector.pe.R;
import moe.protector.pe.game.Setting;

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
