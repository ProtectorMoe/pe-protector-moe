package moe.protector.pe.bean.campaign;

import java.util.HashMap;
import java.util.List;

import moe.protector.pe.bean.common.ShipVO;
import moe.protector.pe.bean.task.UpdateTaskVo;

public class CampaignReport {
    public HashMap<String, Integer> newAward;
    public List<ShipVO> shipVO;
    public List<UpdateTaskVo> updateTaskVo;
}
