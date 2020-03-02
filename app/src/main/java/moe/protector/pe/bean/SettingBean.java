package moe.protector.pe.bean;

import java.util.List;

public class SettingBean {
    public boolean dismantleSwitch;
    public boolean dismantleEquipment;
    public String dismantleShip;
    public List<String> dismantleType;
    public List<String> dismantleStar;

    public boolean resetDatabase;
    public boolean backgroundServer;

    public int challengeTimeMin;
    public int challengeTimeMax;
    public int nightFightMin;
    public int nightFightMax;
}
