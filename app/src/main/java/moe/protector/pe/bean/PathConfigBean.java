package moe.protector.pe.bean;

import java.util.HashMap;
import java.util.List;

public class PathConfigBean {
    public String map;
    public int skipMax;
    public HashMap<String, Detail> detail;

    public static class Detail{
        public boolean night;
        public boolean roundabout;
        public boolean sl;
        public String format;
        public List<NodeDetail> detail;
        public boolean spyFailSl;
        public String buff;
    }

    public static class NodeDetail {
        public int enemy;
        public int num;
        public int deal;
    }
}
