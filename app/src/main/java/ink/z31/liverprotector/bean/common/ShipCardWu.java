package ink.z31.liverprotector.bean.common;

import org.litepal.crud.LitePalSupport;

import java.util.List;

public class ShipCardWu extends LitePalSupport {
    public int cid;
    public int star;
    public String title;
    public int country;
    public int type;
    public String shipIndex;
    public List<Integer> equipmentType;
}
