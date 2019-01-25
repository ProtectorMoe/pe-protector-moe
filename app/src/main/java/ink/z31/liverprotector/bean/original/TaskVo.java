
package ink.z31.liverprotector.bean.original;
import java.util.List;
public class TaskVo {
    public int status;
    public String title;
    public String type;
    public String check_type;
    public List<Condition> condition;
    public Award award;
    public String support_pve_level;
    public String support_type;
    public String hide;
    public String start_time;
    public String end_time;
    public List<Integer> link;
    public String and_link;
    public String ios_link;
    public String desc;
    public int iconType;
    public long taskCid;
    public List<String> nextCid;
    public int fleetId;
    public List<String> systemOpen;
    public String userLevel;
    public long createTime;     public long getTaskCid() {
         return taskCid;
     }     public long getCreateTime() {
         return createTime;
     }}