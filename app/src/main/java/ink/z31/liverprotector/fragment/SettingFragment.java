package ink.z31.liverprotector.fragment;


import android.os.Bundle;
import android.support.v14.preference.PreferenceFragment;

import ink.z31.liverprotector.R;

public class SettingFragment extends PreferenceFragment {
    @Override
    public void onCreatePreferences(Bundle bundle, String s) {

    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        addPreferencesFromResource(R.xml.pref_settings);
    }
}
