package moe.protector.pe.game;

import java.util.List;

import moe.protector.pe.bean.CampaignGetFleet;
import moe.protector.pe.bean.CampaignGetUserData;
import moe.protector.pe.bean.CampaignReport;
import moe.protector.pe.bean.DealtoBean;
import moe.protector.pe.bean.SpyBean;
import moe.protector.pe.bean.TaskBean;
import moe.protector.pe.exception.HmException;
import moe.protector.pe.util.CommonUtil;

public class GameCampaign extends GameBattle {
    private static final String TAG = "GameCampaign";

    private TaskBean taskBean;
    private TaskBean.CampaignData campaignData;
    private GameFunction gameFunction = GameFunction.getInstance();
    private UserData userData = UserData.getInstance();

    public GameCampaign(TaskBean taskBean) {
        this.head = "campaign";
        this.taskBean = taskBean;
        campaignData = taskBean.campaignData;
    }

    public enum Finish{
        FINISH, REPAIR, ERROR, SL
    }

    public Finish execute() {
        List<Integer> fleet;
        try {
            while (true) {
                // 请求战役数据
                CommonUtil.delay(2000);
                String map = campaignData.campaignMap;
                CampaignGetUserData campaignGetUserData = this.campaignGetUserData();
                UIUpdate.log("[战役] 剩余战役次数:" + campaignGetUserData.passInfo.remainNum);
                if (!campaignGetUserData.canCampaignChallengeLevel.contains(map)) {
                    return Finish.ERROR;
                }
                if (campaignGetUserData.passInfo.remainNum <= 0) {
                    return Finish.FINISH;
                }
                CampaignGetFleet campaignGetFleet = this.campaignGetFleet(map);
                fleet = campaignGetFleet.campaignLevelFleet;
                // 战役补给
                gameFunction.checkSupply(fleet);
                CommonUtil.delay(1000);
                UIUpdate.log("[战役] 进行补给");
                // 战役修理
                if (!checkRepair(fleet, campaignData.repair)) {
                    return Finish.REPAIR;
                }
                CommonUtil.delay(1000);
                // 战役索敌
                SpyBean spyBean = this.campaignSpy(map);
                UIUpdate.log("[战役] 索敌" + (spyBean.enemyVO.isFound == 1? "成功": "失败"));
                // 战役战斗
                DealtoBean dealtoBean = this.campaignChallenge(map, campaignData.format);
                if (taskBean.num_max != 1) {
                    CommonUtil.delay(1000);
                    UIUpdate.log("[战役] 执行SL");
                    CommonUtil.delay(1000);
                    return Finish.SL;

                }
                int randomInt = CommonUtil.randomInt(10, 15);
                UIUpdate.detailLog(TAG, "[战役] 开始战斗, 等待" + randomInt + "s");
                CommonUtil.delay(randomInt*1000);
                // 战役战果
                boolean canDoNightWar = campaignData.night && dealtoBean.warReport.canDoNightWar == 1;
                CampaignReport resultBean = this.campaignGetWarResult(canDoNightWar);
                if (canDoNightWar) {
                    randomInt = CommonUtil.randomInt(10, 20);
                    UIUpdate.detailLog(TAG, "[战役] 夜战中, 等待" + randomInt + "s");
                    CommonUtil.delay(randomInt*1000);
                }
                // 输出装备
                String reward = "-";
                for (String r: resultBean.newAward.keySet()) {
                    if (resultBean.newAward.get(r) > 1000) {
                        reward = GameConstant.getInstance().getResName(r);
                    }
                }
                // 血量更新与判断
                userData.allShipSetAllShipVO(resultBean.shipVO);
                UIUpdate.detailLog(TAG, String.format("[战役] 战斗完成, 获得:<%s>", reward));
                CommonUtil.delay(5000);
            }
        } catch (HmException e) {
            UIUpdate.log("[战役] 错误:" + e.toString());
            return Finish.ERROR;
        }
    }

    private boolean checkRepair(List<Integer> ships, int repair)throws HmException {
        int present;
        switch (repair) {
            case 0:
                present = 50;
                break;
            case 1:
                present = 25;
                break;
            default:
                present = 0;
                break;
        }
        gameFunction.checkFastRepair(ships, present);
        // ----------更新船只血量信息---------
        for (int i=0; i<ships.size(); i++) {
            if ((float)userData.getShipHp(ships.get(i)) / userData.getShipMaxHp(ships.get(i)) < 0.25) {
                return false;
            }
        }
        return true;
    }
}
