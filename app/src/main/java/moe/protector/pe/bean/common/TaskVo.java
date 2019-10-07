package moe.protector.pe.bean.common;

import java.util.HashMap;
import java.util.List;

public class TaskVo {
    public String taskCid;
    public String status;
    public String title;
    public HashMap<String, Integer> award;
    public List<Condition> condition;
}
