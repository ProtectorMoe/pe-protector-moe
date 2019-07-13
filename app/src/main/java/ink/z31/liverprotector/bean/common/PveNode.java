package ink.z31.liverprotector.bean.common;

import java.util.HashMap;
import java.util.List;

public class PveNode {
    public String id;
    public String roundabout;
    public String flag;
    public List<Integer> nextNode;
    public String nodeType;
    public String pveLevelId;

    public HashMap<String, Integer> gain;
    public HashMap<String, Integer> loss;
}
