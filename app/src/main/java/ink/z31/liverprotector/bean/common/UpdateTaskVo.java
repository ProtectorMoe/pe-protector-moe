package ink.z31.liverprotector.bean.common;

import java.util.List;

public class UpdateTaskVo {
    public int taskCid;
    public List<Condition> condition;


    public static class Condition{
        public int finishedAmount;
        public int totalAmount;
    }
}
