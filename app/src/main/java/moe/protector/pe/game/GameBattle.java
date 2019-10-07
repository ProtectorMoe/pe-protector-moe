package moe.protector.pe.game;

import android.util.Log;

import com.alibaba.fastjson.JSON;

import moe.protector.pe.bean.DealtoBean;
import moe.protector.pe.bean.GetResultBean;
import moe.protector.pe.bean.NewNextBean;
import moe.protector.pe.bean.SkipWarBean;
import moe.protector.pe.bean.SpyBean;
import moe.protector.pe.exception.HmException;

public abstract class GameBattle {
    private static final String TAG = "GameBattle";
    private NetSender netSender = NetSender.getInstance();

    protected String head = "pve";

    // 各个程序的子功能
    protected void challengeStart(String map, String fleet) throws HmException {
        try {
            netSender.battleChallenge(head, map, fleet);
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

    protected DealtoBean challengeDealTo(String node, String fleet, String format) throws HmException{
        try {
            String data = netSender.battleDealto(head, node, fleet, format);
            return JSON.parseObject(data, DealtoBean.class);
        } catch (HmException e) {
            Log.e(TAG, "出征处理错误:" + e.toString());
            throw e;
        }
    }

    protected GetResultBean challengeGetWarResult(boolean isNightFight) throws HmException{
        try {
            String data = netSender.battleGetWarResult(head, isNightFight);
            return JSON.parseObject(data, GetResultBean.class);
        } catch (HmException e) {
            Log.e(TAG, "出征处理错误:" + e.toString());
            throw e;
        }
    }

    protected void backToPort() throws HmException{
        netSender.bseaGetData();
        netSender.liveGetUserInfo();
        netSender.activeGetUserData();
        netSender.pveGetUserData();
        netSender.campaignGetUserData();
    }




}


