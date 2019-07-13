package ink.z31.liverprotector.bean;

import java.util.List;

public class LoginServerListBean {
    public String userId;
    public String defaultServer;
    public static class ServerList {
        public String id;
        public String host;
        public String name;
    }
    public List<ServerList> serverList;

}
