
package ink.z31.liverprotector.bean.apiInitGame;
import java.util.Date;
import java.util.List;
public class ActiveList {
    public String id;
    public String pve_id;
    public String title;
    public String hard_title;
    public Date start_time;
    public Date end_time;
    public String type;
    public String map_id;
    public List<Integer> levels;
    public List<String> hardLevels;
    public String levelsort;
    public String bgm;
    public String desc;
    public String line_sort;
    public String pic;
    public long left_time;
    public long now_time;     public long getLeft_time() {
         return left_time;
     }     public long getNow_time() {
         return now_time;
     }}