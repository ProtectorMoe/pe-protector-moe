package moe.protector.pe.game;

import android.content.Context;
import android.content.SharedPreferences;
import android.util.Log;

import com.alibaba.fastjson.JSON;

import org.litepal.LitePal;

import java.util.HashMap;
import java.util.List;

import moe.protector.pe.bean.InitDataBean;
import moe.protector.pe.bean.common.ShipCard;
import moe.protector.pe.bean.common.ShipCardWu;
import moe.protector.pe.bean.common.ShipEquipmnt;
import moe.protector.pe.interfaces.ResProgressCallBack;
import moe.protector.pe.util.App;

public class GameConstant {
    private static final String TAG = "GameConstant";
    private static GameConstant gameConstant;

    public static GameConstant getInstance() {
        if (gameConstant == null) {
            gameConstant = new GameConstant();
        }
        return gameConstant;
    }


    private HashMap<String, String> resName = new HashMap<>();


    private GameConstant() {
        resName.put("2", "油");
        resName.put("3", "弹");
        resName.put("4", "钢");
        resName.put("9", "铝");
        resName.put("10141", "航母核心");
        resName.put("10241", "战列核心");
        resName.put("10341", "巡洋核心");
        resName.put("10441", "驱逐核心");
        resName.put("10541", "潜艇核心");
        resName.put("141", "快速建造");
        resName.put("241", "建造蓝图");
        resName.put("541", "快速修理");
        resName.put("741", "装备蓝图");
        resName.put("66641", "损管");
    }


    public void parseJson(String json, ResProgressCallBack callBack) {
        // 读取json文件
        Log.i(TAG, "[登录] 开始解析Json文件");
        callBack.onChange("解析游戏基础数据...");
        InitDataBean initDataBean = JSON.parseObject(json, InitDataBean.class);
        Log.i(TAG, "[登录] 解析Json文件完成, 写入数据库");
        float len = initDataBean.shipCardWu.size() + initDataBean.shipEquipmnt.size() + initDataBean.shipCard.size();
        int count = 0;
        int progress = 0;

        // 加载数据进入数据库
        for (ShipCardWu shipCardWu : initDataBean.shipCardWu) {
            shipCardWu.save();
            count++;
            int p = Math.round(count / len * 100);
            if (progress != p) {
                progress = p;
                callBack.onChange("初始化数据库:" + p + "%");
            }
        }
        for (ShipCard shipCard : initDataBean.shipCard) {
            shipCard.save();
            count++;
            int p = Math.round(count / len * 100);
            if (progress != p) {
                progress = p;
                callBack.onChange("初始化数据库:" + p + "%");
            }
        }
        for (ShipEquipmnt e : initDataBean.shipEquipmnt) {
            e.save();
            count++;
            int p = Math.round(count / len * 100);
            if (progress != p) {
                progress = p;
                callBack.onChange("初始化数据库:" + p + "%");
            }
        }
        SharedPreferences.Editor editor = App.getContext().getSharedPreferences("init", Context.MODE_PRIVATE).edit();
        editor.putString("version", initDataBean.DataVersion);
        editor.apply();
        Log.i(TAG, "[登录] 初始化数据库完成!");
    }

    public String getVersion() {
        SharedPreferences preferences = App.getContext().getSharedPreferences("init", Context.MODE_PRIVATE);
        return preferences.getString("version", "0");
    }

    public String getShipName(long cid) {
        List<ShipCardWu> shipCardWu = LitePal.select("title")
                .where("cid=?", String.valueOf(cid))
                .limit(1)
                .find(ShipCardWu.class);
        if (!shipCardWu.isEmpty()) {
            return shipCardWu.get(0).title;
        }
        return "未知";
    }

//    public boolean isFitEquipment(long shipCid, long equipCid){
//        ShipEquipmnt equipment = shipEquipmnt.get(equipCid);
//        ShipCardWu ship = shipCard.get(shipCid);
//        if (equipment != null && ship != null){
//            List<Integer> equipmentType = ship.equipmentType;
//            return equipmentType.contains(equipment.type);
//        } else {
//            return false;
//        }
//    }

    public int getStar(long cid) {
        List<ShipCardWu> shipCardWu = LitePal
                .select("star")
                .where("cid=?", String.valueOf(cid))
                .limit(1)
                .find(ShipCardWu.class);
        if (!shipCardWu.isEmpty()) {
            return shipCardWu.get(0).star;
        }
        return 1;

    }

    public int getIndex(long cid) {
        List<ShipCardWu> shipCardWu = LitePal
                .select("shipIndex")
                .where("cid=?", String.valueOf(cid))
                .limit(1)
                .find(ShipCardWu.class);
        if (!shipCardWu.isEmpty()) {
            return Integer.valueOf(shipCardWu.get(0).shipIndex);
        }
        return 1;
    }

    public String getResName(String cid) {
        return resName.get(cid);
    }

}
