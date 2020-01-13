package moe.protector.pe.game;

import android.util.Log;

import com.alibaba.fastjson.JSON;

import moe.protector.pe.bean.campaign.CampaignGetFleet;
import moe.protector.pe.bean.campaign.CampaignGetUserData;
import moe.protector.pe.bean.campaign.CampaignReport;
import moe.protector.pe.bean.challenge.DealtoBean;
import moe.protector.pe.bean.challenge.GetChallengeListBean;
import moe.protector.pe.bean.challenge.GetResultBean;
import moe.protector.pe.bean.challenge.NewNextBean;
import moe.protector.pe.bean.challenge.SkipWarBean;
import moe.protector.pe.bean.challenge.SpyBean;
import moe.protector.pe.exception.HmException;

public abstract class GameBattle {
    private static final String TAG = "GameBattle";
    protected NetSender netSender = NetSender.getInstance();

    protected String head = "pve";

    // 各个程序的子功能
    protected void challengeStart(String map, String fleet) throws HmException {
        try {
            netSender.battleChallenge(map, fleet);
        } catch (HmException e) {
            Log.e(TAG, "出征开始错误:" + e.toString());
            throw e;
        }
    }


    protected String challengeNewNext() throws HmException {
        try {
            String data = netSender.battleNewNext(head);
            NewNextBean newNext = JSON.parseObject(data, NewNextBean.class);
            return String.valueOf(newNext.node);
        } catch (HmException e) {
            Log.e(TAG, "出征下一点错误:" + e.toString());
            throw e;
        }
    }


    protected SpyBean challengeSpy() throws HmException {
        try {
            String data = netSender.battleSpy(head);
            return JSON.parseObject(data, SpyBean.class);
        } catch (HmException e) {
            Log.e(TAG, "出征索敌错误:" + e.toString());
            throw e;
        }
    }

    protected SkipWarBean challengeSkipWar() throws HmException {
        try {
            String data = netSender.battleSkipWar(head);
            return JSON.parseObject(data, SkipWarBean.class);
        } catch (HmException e) {
            Log.e(TAG, "出征迂回错误:" + e.toString());
            throw e;
        }

    }

    protected DealtoBean challengeDealTo(String node, String fleet, String format) throws HmException {
        try {
            String data = netSender.battleDealto(head, node, fleet, format);
            return JSON.parseObject(data, DealtoBean.class);
        } catch (HmException e) {
            Log.e(TAG, "出征处理错误:" + e.toString());
            throw e;
        }
    }

    protected GetResultBean challengeGetWarResult(String head, boolean isNightFight) throws HmException {
        try {
            String data = netSender.battleGetWarResult(head, isNightFight);
            return JSON.parseObject(data, GetResultBean.class);
        } catch (HmException e) {
            Log.e(TAG, "出征处理错误:" + e.toString());
            throw e;
        }
    }

    protected void backToPort() throws HmException {
        netSender.bseaGetData();
        netSender.liveGetUserInfo();
        netSender.activeGetUserData();
        netSender.pveGetUserData();
        netSender.campaignGetUserData();
    }

    protected GetChallengeListBean getChallengeList() throws HmException {
        try {
            String data = netSender.getChallengeList();
            return JSON.parseObject(data, GetChallengeListBean.class);
        } catch (HmException e) {
            Log.e(TAG, "获取演习列表失败:" + e.toString());
            throw e;
        }
    }

    protected SpyBean pvpSpy(String head, String uid, int fleet) throws HmException {
        try {
            String data = netSender.pvpSpy(head, uid, fleet);
            return JSON.parseObject(data, SpyBean.class);
        } catch (HmException e) {
            Log.e(TAG, "获取演习列表失败:" + e.toString());
            throw e;
        }
    }

    protected DealtoBean pvpChallenge(String head, String uid, int fleet, int format) throws HmException {
        try {
            String data = netSender.pvpChallenge(head, uid, fleet, format);
            return JSON.parseObject(data, DealtoBean.class);
        } catch (HmException e) {
            Log.e(TAG, "获取演习列表失败:" + e.toString());
            throw e;
        }
    }

    protected CampaignGetUserData campaignGetUserData() throws HmException {
        try {
            String data = netSender.campaignGetUserData();
            return JSON.parseObject(data, CampaignGetUserData.class);
        } catch (HmException e) {
            Log.e(TAG, "获取战役列表失败:" + e.toString());
            throw e;
        }
    }

    protected CampaignGetFleet campaignGetFleet(String map) throws HmException {
        try {
            String data = netSender.campaignGetFleet(map);
            return JSON.parseObject(data, CampaignGetFleet.class);
        } catch (HmException e) {
            Log.e(TAG, "获取战役舰队失败:" + e.toString());
            throw e;
        }
    }

    protected SpyBean campaignSpy(String map) throws HmException {
        try {
            String data = netSender.campaignSpy(map);
            return JSON.parseObject(data, SpyBean.class);
        } catch (HmException e) {
            Log.e(TAG, "获取战役舰队失败:" + e.toString());
            throw e;
        }
    }

    protected DealtoBean campaignChallenge(String map, int format) throws HmException {
        try {
            String data = netSender.campaignChallenge(map, format);
            return JSON.parseObject(data, DealtoBean.class);
        } catch (HmException e) {
            Log.e(TAG, "战役出征错误:" + e.toString());
            throw e;
        }
    }

    protected CampaignReport campaignGetWarResult(boolean isNightFight) throws HmException {
        try {
            String data = netSender.battleGetWarResult("campaign", isNightFight);
            return JSON.parseObject(data, CampaignReport.class);
        } catch (HmException e) {
            Log.e(TAG, "战役夜战错误::" + e.toString());
            throw e;
        }
    }

}


