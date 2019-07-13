package ink.z31.liverprotector.game;

import android.content.Context;
import android.content.SharedPreferences;
import android.util.Log;

import com.alibaba.fastjson.JSON;

import org.litepal.LitePal;

import java.util.List;

import ink.z31.liverprotector.bean.InitDataBean;
import ink.z31.liverprotector.bean.common.ShipCard;
import ink.z31.liverprotector.bean.common.ShipCardWu;
import ink.z31.liverprotector.bean.common.ShipEquipmnt;
import ink.z31.liverprotector.interfaces.ResProgressCallBack;
import ink.z31.liverprotector.util.App;

public class GameConstant {
    private static final String TAG = "GameConstant";
    private GameConstant(){}
    private static GameConstant gameConstant;
    public static GameConstant getInstance(){
        if (gameConstant == null){
            gameConstant = new GameConstant();
        }
        return gameConstant;
    }

    public void parseJson(String json, ResProgressCallBack callBack) {
        // 读取json文件
        Log.i(TAG, "开始解析Json文件");
        callBack.onChange("解析Res文件...");
        InitDataBean initDataBean = JSON.parseObject(json, InitDataBean.class);
        Log.i(TAG, "解析Json文件完成, 写入数据库");
        float len = initDataBean.shipCardWu.size() + initDataBean.shipEquipmnt.size() + initDataBean.shipCard.size();
        int count = 0;
        int progress = 0;

        // 加载数据进入数据库
        for (ShipCardWu shipCardWu: initDataBean.shipCardWu){
            shipCardWu.save();
            count ++;
            int p = Math.round(count / len * 100);
            if (progress != p) {
                progress = p;
                callBack.onChange("更新Res数据:" + p + "%");
            }
        }
        for (ShipCard shipCard: initDataBean.shipCard){
            shipCard.save();
            count ++;
            int p = Math.round(count / len * 100);
            if (progress != p) {
                progress = p;
                callBack.onChange("更新Res数据:" + p + "%");
            }
        }
        for (ShipEquipmnt e: initDataBean.shipEquipmnt){
            e.save();
            count ++;
            int p = Math.round(count / len * 100);
            if (progress != p) {
                progress = p;
                callBack.onChange("更新Res数据:" + p + "%");
            }
        }
        SharedPreferences.Editor editor = App.getContext().getSharedPreferences("init", Context.MODE_PRIVATE).edit();
        editor.putString("version", initDataBean.DataVersion);
        editor.apply();
        Log.i(TAG, "更新数据库完成!");
    }

    public String getVersion() {
        SharedPreferences preferences = App.getContext().getSharedPreferences("init", Context.MODE_PRIVATE);
        return preferences.getString("version", "0");
    }




    /*
    public InitDataBean initData = null;

    public LongSparseArray<ShipCardWu> shipCard = new LongSparseArray<>();
    public LongSparseArray<ShipEquipmnt> shipEquipmnt = new LongSparseArray<>();

    public void init(){
        // 解析船只信息
        Log.i(TAG, "开始解析init数据...");
        for (ShipCardWu shipCardWu: initData.shipCardWu){
            shipCard.put(shipCardWu.cid, shipCardWu);
        }
        // 解析装备信息
        for (ShipEquipmnt e: initData.shipEquipmnt){
            shipEquipmnt.put(e.cid, e);
        }

    }
    */
    public String getShipName(long cid){
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

    public int getIndex(long cid){
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




}
