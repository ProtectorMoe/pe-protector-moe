package ink.z31.liverprotector.bean;

import java.util.HashMap;
import java.util.List;

import ink.z31.liverprotector.bean.common.ShipCard;
import ink.z31.liverprotector.bean.common.ShipCardWu;
import ink.z31.liverprotector.bean.common.ShipEquipmnt;

public class InitDataBean {
    public List<ShipCard> shipCard;
    public List<ShipCardWu> shipCardWu;
    public List<ShipEquipmnt> shipEquipmnt;
    public HashMap<String, String> errorCode;
    public String DataVersion;
}
