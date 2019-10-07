package moe.protector.pe.bean;

import java.util.HashMap;
import java.util.List;

import moe.protector.pe.bean.common.PackageVo;
import moe.protector.pe.bean.common.PveExploreVo;
import moe.protector.pe.bean.common.UserResVo;

public class GetExploreBean {
    public int bigSuccess;
    public UserResVo userResVo;
    public List<PackageVo> packageVos;
    public HashMap<Integer, Integer> newAward;
    public PveExploreVo pveExploreVo;
}
