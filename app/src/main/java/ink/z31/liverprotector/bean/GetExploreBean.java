package ink.z31.liverprotector.bean;

import java.util.HashMap;
import java.util.List;

import ink.z31.liverprotector.bean.common.PackageVo;
import ink.z31.liverprotector.bean.common.PveExploreVo;
import ink.z31.liverprotector.bean.common.UserResVo;

public class GetExploreBean {
    public int bigSuccess;
    public UserResVo userResVo;
    public List<PackageVo> packageVos;
    public HashMap<Integer, Integer> newAward;
    public PveExploreVo pveExploreVo;
}
