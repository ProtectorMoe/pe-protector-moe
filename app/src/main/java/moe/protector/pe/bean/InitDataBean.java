package moe.protector.pe.bean;

import java.util.HashMap;
import java.util.List;

import moe.protector.pe.bean.common.ShipCard;
import moe.protector.pe.bean.common.ShipCardWu;
import moe.protector.pe.bean.common.ShipEquipmnt;

public class InitDataBean {
    public List<ShipCard> shipCard;
    public List<ShipCardWu> shipCardWu;
    public List<ShipEquipmnt> shipEquipmnt;
    public HashMap<String, String> errorCode;
    public String DataVersion;
}
