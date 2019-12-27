package moe.protector.pe.bean;

import java.util.List;

public class GetChallengeListBean {
    public class UserList {
        public String uid;
        public String username;
        public String fleetName;
        public int resultLevel;
    }
    public List<UserList> list;
}
