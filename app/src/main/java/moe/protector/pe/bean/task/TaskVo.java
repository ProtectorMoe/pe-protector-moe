package moe.protector.pe.bean.task;

import java.util.HashMap;
import java.util.List;

import moe.protector.pe.bean.common.Condition;

public class TaskVo {
    public String taskCid;
    public String status;
    public String title;
    public HashMap<String, Integer> award;
    public List<Condition> condition;
}
