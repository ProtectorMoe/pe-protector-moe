package ink.z31.liverprotector.bean;


import java.util.List;

public class MapConfig {
    public static class NodeDetail {
        public int enemy;
        public int num;
        public int deal;
    }
    public static class Detail {
        public boolean night;
        public boolean round_about;
        public boolean sl;
        public String format;
        public List<NodeDetail> detail;
    }

    public String name;
    public List<Detail> detail;
}
