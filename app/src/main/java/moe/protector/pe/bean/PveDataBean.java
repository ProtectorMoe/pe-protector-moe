package moe.protector.pe.bean;

import java.util.HashMap;

import moe.protector.pe.bean.common.PveBuff;
import moe.protector.pe.bean.common.PveLevel;
import moe.protector.pe.bean.common.PveNode;

public class PveDataBean {
    public PveDataBean(HashMap<String, PveNode> pveNode, HashMap<String, PveLevel> pveLevel, HashMap<String, PveBuff> pveBuff) {
        this.pveNode = pveNode;
        this.pveLevel = pveLevel;
        this.pveBuff = pveBuff;
    }


    public HashMap<String, PveNode> pveNode;
    public HashMap<String, PveLevel> pveLevel;
    public HashMap<String, PveBuff> pveBuff;
}
