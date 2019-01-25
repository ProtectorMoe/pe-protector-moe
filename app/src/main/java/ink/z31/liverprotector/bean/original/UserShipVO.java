
package ink.z31.liverprotector.bean.original;
import java.util.List;
public class UserShipVO {
    public int id;
    public long uid;
    public String title;
    public int level;
    public int exp;
    public int energy;
    public int max_ammo;
    public List<String> equipment;
    public List<Integer> equipment0;
    public List<int> equipment1;
    public List<int> equipment2;
    public String missile_slot;
    public int fleet_id;
    public int status;
    public int sink_num;
    public String skin_cid;
    public int fight_num;
    public long hurt_ship_num;
    public int sink_ship_num;
    public String miss_num;
    public String pvp_win_num;
    public String repair_num;
    public int ammo_num;
    public int steel_num;
    public int oil_num;
    public int aluminium_num;
    public String marry_time;
    public String build_boat_num;
    public String team_medal;
    public List<String> active_medal;
    public List<String> cookbook;
    public Tactics tactics;
    public String create_time;
    public int type;
    public long nextExp;
    public int married;
    public int love;
    public int loveMax;
    public int ammoSlot;
    public long shipCid;
    public StrengthenAttribute strengthenAttribute;
    public int fleetId;
    public int isLocked;
    public List<int> capacitySlot;
    public List<int> capacitySlotMax;
    public List<int> capacitySlotExist;
    public List<int> missileSlot;
    public List<int> missileSlotMax;
    public List<int> missileSlotExist;
    public List<String> equipmentArr;
    public int use_equipment;
    public BattlePropsBasic battlePropsBasic;
    public BattleProps battleProps;
    public BattlePropsMax battlePropsMax;     public long getUid() {
         return uid;
     }     public long getHurt_ship_num() {
         return hurt_ship_num;
     }     public long getNextExp() {
         return nextExp;
     }     public long getShipCid() {
         return shipCid;
     }
}