package moe.protector.pe.bean;

import java.util.List;

import moe.protector.pe.bean.common.ShipVO;
import moe.protector.pe.bean.common.UpdateTaskVo;

public class GetResultBean {
    public List<UpdateTaskVo> updateTaskVo;
    public int bossHp;
    public List<ShipVO> newShipVO;
    public List<ShipVO> shipVO;
    public WarResult warResult;
    public String dropSpoils;

    public static class WarResult {
        public int resultLevel;
        public List<ShipResult> selfShipResults;
        public List<ShipResult> enemyShipResults;
    }

    public static class ShipResult {
        public int level;
        public int exp;
        public int hp;
        public int isMvp;
    }
}
