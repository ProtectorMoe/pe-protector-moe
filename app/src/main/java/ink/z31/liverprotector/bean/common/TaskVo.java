package ink.z31.liverprotector.bean.common;

import java.util.HashMap;
import java.util.List;

public class TaskVo {
    String taskCid;
    String status;
    String title;

    HashMap<String, Integer> award;

    class Condition {
        int totalAmount;
        int finishedAmount;
    }
    List<Condition> conditions;
}
