package ink.z31.liverprotector.game;

import android.content.SharedPreferences;
import android.preference.PreferenceManager;

import java.util.HashSet;
import java.util.Set;

import ink.z31.liverprotector.util.App;

public class Setting {
    private static Setting setting;
    public static Setting getInstance() {
        if (setting == null) setting = new Setting();
        return setting;
    }

    public void init() {
        SharedPreferences preferences = PreferenceManager.getDefaultSharedPreferences(App.getContext());
        dismantleSwitch = preferences.getBoolean("pref_dismantle_switch", false);
        dismantleEquipment = preferences.getBoolean("pref_dismantle_equipment", false);
        dismantleStar = preferences.getStringSet("pref_dismantle_star", new HashSet<>());
        dismantleType = preferences.getStringSet("pref_dismantle_type", new HashSet<>());
    }

    public boolean isDismantleSwitch() {
        return dismantleSwitch;
    }

    public boolean isDismantleEquipment() {
        return dismantleEquipment;
    }

    public Set<String> getDismantleType() {
        return dismantleType;
    }

    public Set<String> getDismantleStar() {
        return dismantleStar;
    }

    public void setDismantleSwitch(boolean dismantleSwitch) {
        this.dismantleSwitch = dismantleSwitch;
    }

    public void setDismantleEquipment(boolean dismantleEquipment) {
        this.dismantleEquipment = dismantleEquipment;
    }

    public void setDismantleType(Set<String> dismantleType) {
        this.dismantleType = dismantleType;
    }

    public void setDismantleStar(Set<String> dismantleStar) {
        this.dismantleStar = dismantleStar;
    }

    private boolean dismantleSwitch;
    private boolean dismantleEquipment;
    private Set<String> dismantleType;
    private Set<String> dismantleStar;



}
