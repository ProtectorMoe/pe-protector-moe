
package ink.z31.liverprotector.bean.apiInitGame;
import java.util.List;
public class UserVo {
    public String uid;
    public String username;
    public int gold;
    public int exp;
    public long nextExp;
    public int level;
    public int material;
    public long oil;
    public long ammo;
    public long steel;
    public long aluminium;
    public int fleetMaxNum;
    public int buyCardSlotNum;
    public int buyEquipmentSlotNum;
    public int winNum;
    public int loseNum;
    public int pvpWinNum;
    public int pvpLoseNum;
    public int exploreNum;
    public int exploreWinNum;
    public String sign;
    public String pveLevelId;
    public String package ink.z31.liverprotector.bean.apiInitGame;
    public List<Long> resourceRecoveryTimes;
    public List<Integer> resourcesTops;
    public int equipmentNumTop;
    public int shipNumTop;
    public List<int> systemOpen;
    public DetailInfo detailInfo;
    public String crazy;
    public String zone_name;
    public String zoneid;     public long getNextExp() {
         return nextExp;
     }     public long getOil() {
         return oil;
     }     public long getAmmo() {
         return ammo;
     }     public long getSteel() {
         return steel;
     }     public long getAluminium() {
         return aluminium;
     }
}