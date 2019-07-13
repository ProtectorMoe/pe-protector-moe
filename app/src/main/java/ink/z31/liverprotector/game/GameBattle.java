package ink.z31.liverprotector.game;

import android.util.Log;

import com.alibaba.fastjson.JSON;

import ink.z31.liverprotector.bean.DealtoBean;
import ink.z31.liverprotector.bean.GetResultBean;
import ink.z31.liverprotector.bean.NewNextBean;
import ink.z31.liverprotector.bean.SkipWarBean;
import ink.z31.liverprotector.bean.SpyBean;
import ink.z31.liverprotector.exception.HmException;

public abstract class GameBattle {
    private static final String TAG = "GameBattle";

    private NetSender netSender = NetSender.getInstance();

    private String head = "pve";

    /**
     * 返回数据
     */
    public enum ReturnCode {
        Finish, SL, NoConfig
    }

    // 各个程序的子功能

    public void challengeStart(String map, String fleet) throws HmException {
        try {
            netSender.battleChallenge(head, map, fleet);
        } catch (HmException e) {
            Log.e(TAG, "出征开始错误:" + e.toString());
            throw new HmException(e.getCode());
        }
    }


    public String challengeNewNext() throws HmException {
        try {
            String data = netSender.battleNewNext(head);
            NewNextBean newNext = JSON.parseObject(data, NewNextBean.class);
            return String.valueOf(newNext.node);
        } catch (HmException e) {
            Log.e(TAG, "出征下一点错误:" + e.toString());
            throw new HmException(e.getCode());
        }
    }


    public SpyBean challengeSpy() throws HmException {
        try {
            String data = netSender.battleSpy(head);
            return JSON.parseObject(data, SpyBean.class);
        } catch (HmException e) {
            Log.e(TAG, "出征索敌错误:" + e.toString());
            throw new HmException(e.getCode());
        }

    }

    public SkipWarBean challengeSkipWar() throws HmException {
        try {
            String data = netSender.battleSkipWar(head);
            return JSON.parseObject(data, SkipWarBean.class);
        } catch (HmException e) {
            Log.e(TAG, "出征迂回错误:" + e.toString());
            throw new HmException(e.getCode());
        }

    }

    public DealtoBean challengeDealTo(String node, String fleet, String format) throws HmException{
        try {
            String data = netSender.battleDealto(head, node, fleet, format);
            return JSON.parseObject(data, DealtoBean.class);
        } catch (HmException e) {
            Log.e(TAG, "出征处理错误:" + e.toString());
            throw new HmException(e.getCode());
        }
    }

    public GetResultBean challengeGetWarResult(boolean isNightFight) throws HmException{
        try {
            String data = netSender.battleGetWarResult(head, isNightFight);
            return JSON.parseObject(data, GetResultBean.class);
        } catch (HmException e) {
            Log.e(TAG, "出征处理错误:" + e.toString());
            throw new HmException(e.getCode());
        }
    }


}


