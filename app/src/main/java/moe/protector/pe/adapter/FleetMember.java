package moe.protector.pe.adapter;

import moe.protector.pe.bean.common.UserShipVO;
import moe.protector.pe.game.GameConstant;
import moe.protector.pe.game.UserData;

public class FleetMember {
    private static GameConstant gameConstant = GameConstant.getInstance();
    private static UserData userData = UserData.getInstance();
    private int id;
    private String name;
    private int index;
    private int level;
    private int hp;
    private int hpMax;
    private String photo;

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getPhoto() {
        return photo;
    }

    public String getLevel() {
        return "Lv." + level;
    }

    public String getHp() {
        return hp + "/" + hpMax;
    }

    public FleetMember(int id) {
        UserShipVO userShipVO = userData.allShip.get(id);
        this.id = id;
        long cid = userShipVO.shipCid;
        this.name = gameConstant.getShipName(cid);
        if (this.name.length() > 3) {
            this.name = this.name.substring(0, 3);
        }
        this.index = gameConstant.getIndex(cid);
        this.hp = userShipVO.battleProps.hp;
        this.hpMax = userShipVO.battlePropsMax.hp;
        this.level = userShipVO.level;
        this.photo = "html/images/ship/" + this.index + ".png";
    }

}
