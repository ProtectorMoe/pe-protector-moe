package ink.z31.liverprotector.bean;

import java.util.List;

import ink.z31.liverprotector.bean.common.ShipVO;
import ink.z31.liverprotector.bean.common.UpdateTaskVo;

public class GetResultBean {
    public UpdateTaskVo updateTaskVo;
    public int bossHp;
    public List<ShipVO> newShipVO;
    public List<ShipVO> shipVO;
    public WarResult warResult;

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
