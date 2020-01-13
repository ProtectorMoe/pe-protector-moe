package moe.protector.pe.game;

import android.util.Log;

import com.alibaba.fastjson.JSON;

import java.util.ArrayList;
import java.util.List;

import moe.protector.pe.bean.challenge.DealtoBean;
import moe.protector.pe.bean.challenge.GetChallengeListBean;
import moe.protector.pe.bean.challenge.GetResultBean;
import moe.protector.pe.bean.challenge.SpyBean;
import moe.protector.pe.bean.common.FleetVo;
import moe.protector.pe.bean.friend.FriendGetlistBean;
import moe.protector.pe.bean.friend.FriendVisitorFriendBean;
import moe.protector.pe.bean.task.TaskBean;
import moe.protector.pe.exception.HmException;
import moe.protector.pe.util.CommonUtil;

public class GamePvp extends GameBattle {
    private static final String TAG = "GamePvp";
    private int format;
    private int fleet;
    private boolean doNightWar;

    public GamePvp(TaskBean taskBean) {
        this.format = taskBean.pvpData.format;
        this.fleet = taskBean.pvpData.fleet;
        this.doNightWar = taskBean.pvpData.night;
    }

    public enum Finish {
        FINISH, ERROR
    }

    public Finish execute() {
        try {
            List<PvpUser> pvpList = new ArrayList<>();
            // 获取演习列表
            GetChallengeListBean getPvpList = this.getChallengeList();
            for (GetChallengeListBean.UserList user : getPvpList.list) {
                if (user.resultLevel == 0) {
                    pvpList.add(new PvpUser(user.uid, "pvp", user.username, user.fleetName));
                }
            }
            // 获取好友列表
            List<PvpUser> friendList = new ArrayList<>();
            String friendData = netSender.friendGetlist();
            FriendGetlistBean friendGetlistBean = JSON.parseObject(friendData, FriendGetlistBean.class);
            for (FriendGetlistBean.Friend friend : friendGetlistBean.list) {
                String data = netSender.friendVisitorFriend(friend.uid);
                FriendVisitorFriendBean visitorFriend = JSON.parseObject(data, FriendVisitorFriendBean.class);
                if (3 - visitorFriend.challengeNum - friendList.size() <= 0) {
                    break;
                }
                if (visitorFriend.challengeScore == 0 && visitorFriend.friendFleet.size() > 0) {
                    friendList.add(new PvpUser(friend.uid, "friend", friend.username, "驻防编队"));
                }
            }
            pvpList.addAll(friendList);

            while (pvpList.size() > 0) {
                PvpUser user = pvpList.get(0);
                UserData userData = UserData.getInstance();
                FleetVo fleetVo = userData.getFleet().get(String.valueOf(this.fleet));
                // 开始演习逻辑
                head = user.type;
                // 演习索敌
                SpyBean spyBean = this.pvpSpy(head, user.uid, this.fleet);  // 获取索敌数据
                UIUpdate.detailLog(TAG, "[演习] " + (user.type.equals("pvp") ? "对手" : "好友") + ": " + user.username + "-" + user.fleetName);
                CommonUtil.delay(2000);
                // 开始战斗
                DealtoBean dealtoBean = this.pvpChallenge(head, user.uid, this.fleet, this.format);
                int randomInt = CommonUtil.randomInt(10, 20);
                UIUpdate.detailLog(TAG, "[演习] 开始战斗, 等待" + randomInt + "s");
                CommonUtil.delay(randomInt * 1000);
                // 准备夜战
                GetResultBean resultBean = this.challengeGetWarResult(head, dealtoBean.warReport.canDoNightWar == 1 && this.doNightWar);
                if (dealtoBean.warReport.canDoNightWar == 1) {
                    randomInt = CommonUtil.randomInt(10, 15);
                    UIUpdate.detailLog(TAG, "[演习] 夜战中, 等待" + randomInt + "s");
                    CommonUtil.delay(randomInt * 1000);
                }
                // 战斗结束
                String[] assess = {"-", "SS", "S", "A", "B", "C", "D"};
                String resultLevel = assess[resultBean.warResult.resultLevel];
                // 获取mvp
                String mvp = "-";
                for (int i = 0; i < fleetVo.ships.size(); i++) {
                    GetResultBean.ShipResult result = resultBean.warResult.selfShipResults.get(i);
                    if (result.isMvp == 1) {
                        mvp = userData.getShipName(fleetVo.ships.get(i));
                    }
                }
                // 更新任务
                if (resultBean.updateTaskVo != null) {
                    userData.updateTaskVo(resultBean.updateTaskVo);
                }
                UIUpdate.log(TAG, String.format("[演习] %s 评价:%s mvp:<%s>", user.username, resultLevel, mvp));
                CommonUtil.delay(5000);
                pvpList.remove(0);
            }
            return Finish.FINISH;
        } catch (HmException e) {
            Log.e(TAG, "演习出错:" + e.getCode() + e.getMessage());
        }

        return Finish.ERROR;
    }
}

class PvpUser {
    String uid;
    String type;
    String username;
    String fleetName;

    PvpUser(String uid, String type, String username, String fleetName) {
        this.uid = uid;
        this.type = type;
        this.username = username;
        this.fleetName = fleetName;
    }
}