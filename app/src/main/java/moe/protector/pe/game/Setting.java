package moe.protector.pe.game;

import android.content.SharedPreferences;
import android.preference.PreferenceManager;

import java.util.ArrayList;
import java.util.HashSet;

import moe.protector.pe.bean.SettingBean;
import moe.protector.pe.util.App;

public class Setting {
    private static Setting setting;

    public static Setting getInstance() {
        if (setting == null) setting = new Setting();
        return setting;
    }

    public SettingBean settingBean = new SettingBean();

    public void init() {
        SharedPreferences preferences = PreferenceManager.getDefaultSharedPreferences(App.getContext());
        settingBean.dismantleSwitch = preferences.getBoolean("dismantle_switch", false);
        settingBean.dismantleEquipment = preferences.getBoolean("dismantle_equipment", false);
        settingBean.dismantleShip = preferences.getString("dismantle_ship", "");
        settingBean.dismantleStar = new ArrayList<>(preferences.getStringSet("dismantle_star", new HashSet<>()));
        settingBean.dismantleType = new ArrayList<>(preferences.getStringSet("dismantle_type", new HashSet<>()));
        settingBean.backgroundServer = preferences.getBoolean("background_server", false);
        settingBean.resetDatabase = preferences.getBoolean("reset_database", false);

        settingBean.challengeTimeMin = preferences.getInt("challenge_time_min", 20);
        settingBean.challengeTimeMax = preferences.getInt("challenge_time_max", 30);
        settingBean.nightFightMin = preferences.getInt("night_fight_min", 10);
        settingBean.nightFightMax = preferences.getInt("night_fight_max", 20);

    }

    public void save() {
        SharedPreferences.Editor editor = PreferenceManager.getDefaultSharedPreferences(App.getContext()).edit();
        editor.putBoolean("dismantle_switch", settingBean.dismantleSwitch);
        editor.putBoolean("dismantle_equipment", settingBean.dismantleEquipment);
        editor.putString("dismantle_ship", settingBean.dismantleShip);
        editor.putStringSet("dismantle_star", new HashSet<>(settingBean.dismantleStar));
        editor.putStringSet("dismantle_type", new HashSet<>(settingBean.dismantleType));
        editor.putBoolean("background_server", settingBean.backgroundServer);
        editor.putBoolean("reset_database", settingBean.resetDatabase);

        editor.putInt("challenge_time_min", settingBean.challengeTimeMin);
        editor.putInt("challenge_time_max", settingBean.challengeTimeMax);
        editor.putInt("night_fight_min", settingBean.nightFightMin);
        editor.putInt("night_fight_max", settingBean.nightFightMax);

        editor.apply();
    }
}
