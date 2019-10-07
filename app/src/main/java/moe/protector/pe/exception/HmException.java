package moe.protector.pe.exception;

import com.alibaba.fastjson.JSON;

import java.util.HashMap;

import moe.protector.pe.util.Util;


public class HmException extends Exception {
    private String code;
    private String message;
    private static HashMap<String, String> codeMessage = new HashMap<String, String>();
    public HmException(String code){
        this.setErrorCode();
        this.code = code;
        if (codeMessage.containsKey(code)){
            this.message = codeMessage.get(code);
        }else {
            this.message = "未知错误";
        }

    }

    public HmException(Throwable cause){
        super(cause);
    }

    public static void errorFind(String name, String data) throws HmException {
        try {
            Eid eid = JSON.parseObject(data, Eid.class);
            if (eid.eid != null && Integer.valueOf(eid.eid) != 0){
                throw new HmException(eid.eid);
            }
        } catch (HmException e) {
            throw e;
        } catch (Exception e) {
            Util.getErrMsg(e, "解析数据出错, 位置" + name);
        }
    }

    public String getCode() {
        return this.code;
    }

    @Override
    public String getMessage() {
        return this.message;
    }

    private void setErrorCode(){
        codeMessage.put("-1", "操作速度太快，请慢点操作");
        codeMessage.put("-2", "数据库错误");
        codeMessage.put("-3", "您的账号被封锁，请联系游戏管理员！");
        codeMessage.put("-4", "非法访问！");
        codeMessage.put("-5", "超时！");
        codeMessage.put("-6", "网络异常");
        codeMessage.put("-101", "参数错误");
        codeMessage.put("-102", "资源不足");
        codeMessage.put("-103", "数据不存在");
        codeMessage.put("-104", "钻石数量不够");
        codeMessage.put("-105", "燃料不够");
        codeMessage.put("-106", "弹药不够");
        codeMessage.put("-107", "铝材不够");
        codeMessage.put("-108", "钢材不够");
        codeMessage.put("-109", "等级不够");
        codeMessage.put("-110", "用户名已被注册");
        codeMessage.put("-111", "密码不一致");
        codeMessage.put("-112", "没有注册");
        codeMessage.put("-113", "用户名密码不正确");
        codeMessage.put("-114", "没有登录");
        codeMessage.put("-115", "不是游客");
        codeMessage.put("-116", "游客未登记");
        codeMessage.put("-117", "游客已绑定");
        codeMessage.put("-118", "邮箱不对");
        codeMessage.put("-119", "角色名已存在");
        codeMessage.put("-120", "角色名不合法");
        codeMessage.put("-121", "注册码不存在");
        codeMessage.put("-122", "注册码已用");
        codeMessage.put("-123", "用户名请用字母数字");
        codeMessage.put("-124", "cookie出错1");
        codeMessage.put("-125", "cookie出错2");
        codeMessage.put("-126", "手机号码不正确");
        codeMessage.put("-127", "验证出错");
        codeMessage.put("-128", "登录错误次数超过限制");
        codeMessage.put("-129", "您取名包含非法字符，请重新取名");
        codeMessage.put("-130", "登录失效，不能绑定");
        codeMessage.put("-131", "不能绑定");
        codeMessage.put("-132", "未审核通过，请联系客服");
        codeMessage.put("-133", "该账号已绑定，请勿重复");
        codeMessage.put("-134", "验证码已发送");
        codeMessage.put("-135", "验证码出错");
        codeMessage.put("-136", "请输入用户名");
        codeMessage.put("-137", "请输入密码");
        codeMessage.put("-138", "用户名长度6-24位");
        codeMessage.put("-139", "密码长度6-24位");
        codeMessage.put("-140", "与旧密码相同");
        codeMessage.put("-141", "原始密码不正确");
        codeMessage.put("-142", "密码修改成功");
        codeMessage.put("-143", "需要修改密码");
        codeMessage.put("-144", "找回密码的邮件已发送，请通过邮件找回密码");
        codeMessage.put("-145", "已绑定邮箱");
        codeMessage.put("-146", "暂未开放");
        codeMessage.put("-147", "邮箱未验证");
        codeMessage.put("-148", "邮箱需要验证，请去邮箱根据邮件进行后续操作");
        codeMessage.put("-149", "角色名已经存在");
        codeMessage.put("-150", "一周只能改一次名");
        codeMessage.put("-151", "您输入的用户名太长");
        codeMessage.put("-152", "密码只能使用数字字母和下划线");
        codeMessage.put("-153", "真实姓名不正确");
        codeMessage.put("-154", "身份证号不正确");
        codeMessage.put("-155", "继承码不存在");
        codeMessage.put("-156", "绑定邮箱不一致");
        codeMessage.put("-157", "角色已存在，不能继承");
        codeMessage.put("-158", "继承码已经使用");
        codeMessage.put("-159", "继承码不能使用在该分区");
        codeMessage.put("-201", "修理船坞正在工作");
        codeMessage.put("-202", "船坞数量不足");
        codeMessage.put("-203", "目前不需要加速");
        codeMessage.put("-204", "加速道具不足");
        codeMessage.put("-205", "时间没到");
        codeMessage.put("-206", "舰船被锁定，不能拆除");
        codeMessage.put("-207", "船坞数量已满");
        codeMessage.put("-208", "舰船不需要维修");
        codeMessage.put("-209", "舰船正在维修");
        codeMessage.put("-210", "建造蓝图不足");
        codeMessage.put("-211", "舰船在舰队中不能拆除");
        codeMessage.put("-212", "舰船目前不能改造");
        codeMessage.put("-213", "道具不足");
        codeMessage.put("-214", "舰船等级不足");
        codeMessage.put("-215", "船坞已满");
        codeMessage.put("-216", "好感度不足");
        codeMessage.put("-217", "已签订誓约");
        codeMessage.put("-218", "装备蓝图不足");
        codeMessage.put("-219", "装备数量已满");
        codeMessage.put("-220", "未签订誓约,不能使用");
        codeMessage.put("-221", "未拥有,不能使用");
        codeMessage.put("-222", "不能使用该皮肤");
        codeMessage.put("-223", "");
        codeMessage.put("-224", "船只修理中");
        codeMessage.put("-225", "船只学习中");
        codeMessage.put("-226", "已经搓过一次澡");
        codeMessage.put("-227", "请先出浴");
        codeMessage.put("-228", "无法更换");
        codeMessage.put("-229", "补给已满，无需进行补给");
        codeMessage.put("-301", "舰船等级不足");
        codeMessage.put("-302", "舰船不能升阶");
        codeMessage.put("-303", "装备不存在");
        codeMessage.put("-304", "装备已被移除");
        codeMessage.put("-305", "不是空闲状态，不能被吞噬");
        codeMessage.put("-306", "装备已使用");
        codeMessage.put("-307", "装备正在使用,不能拆除");
        codeMessage.put("-308", "舰船在其他舰队中");
        codeMessage.put("-309", "舰队中不能有相同的舰船");
        codeMessage.put("-310", "舰船和装备不匹配");
        codeMessage.put("-311", "舰船和装备不匹配");
        codeMessage.put("-312", "装备栏位已满");
        codeMessage.put("-313", "相同位置不需要更换");
        codeMessage.put("-314", "第一舰队不能为空");
        codeMessage.put("-315", "该舰船没有技能");
        codeMessage.put("-316", "属性没有强化到达满值");
        codeMessage.put("-317", "技能等级已满");
        codeMessage.put("-318", "已经有编队,不能再次编队");
        codeMessage.put("-319", "舰队不存在");
        codeMessage.put("-320", "舰船已锁定");
        codeMessage.put("-321", "舰船已解锁");
        codeMessage.put("-322", "不适用的技能");
        codeMessage.put("-323", "不能转换相同的技能");
        codeMessage.put("-324", "原技能等级为0，不能转换");
        codeMessage.put("-325", "技能无法觉醒");
        codeMessage.put("-326", "技能无法升级");
        codeMessage.put("-327", "舰队中包含撤退状态的舰船，无法出征");
        codeMessage.put("-401", "前置章节未通关");
        codeMessage.put("-402", "节点不存在");
        codeMessage.put("-403", "没有下一节点");
        codeMessage.put("-404", "舰队正在远征");
        codeMessage.put("-405", "舰队不存在");
        codeMessage.put("-406", "舰队中没有舰船");
        codeMessage.put("-407", "旗舰大破，不能出征");
        codeMessage.put("-408", "补给为空，不能出征");
        codeMessage.put("-409", "节点已结束");
        codeMessage.put("-410", "舰队中必须有一艘旗舰");
        codeMessage.put("-411", "正在出征中");
        codeMessage.put("-412", "远征中");
        codeMessage.put("-413", "正在修理，不能出征");
        codeMessage.put("-414", "主力舰队作战，潜艇无法参加");
        codeMessage.put("-415", "支援补给未满无法出征");
        codeMessage.put("-416", "此关卡必须满血出征");
        codeMessage.put("-417", "请先为此关卡编队");
        codeMessage.put("-418", "胜利才能驻守");
        codeMessage.put("-419", "不需要驻守");
        codeMessage.put("-420", "驻守中");
        codeMessage.put("-421", "船型不符合要求，不能出征");
        codeMessage.put("-422", "每日只能重置一次");
        codeMessage.put("-423", "不是奇袭点");
        codeMessage.put("-424", "奇袭编队与主舰队船只冲突");
        codeMessage.put("-425", "奇袭编队有正在远征的船只");
        codeMessage.put("-426", "奇袭编队有驻守中的船只");
        codeMessage.put("-427", "奇袭编队有修理中的船只");
        codeMessage.put("-428", "奇袭编队有大破的船只，不能出征");
        codeMessage.put("-429", "炮潜&潜艇无法参与本地图");
        codeMessage.put("-501", "邮件不存在");
        codeMessage.put("-502", "邮件附件已领取");
        codeMessage.put("-601", "舰队不在远征");
        codeMessage.put("-602", "远征时间未到");
        codeMessage.put("-603", "舰队不存在");
        codeMessage.put("-604", "舰队正在远征");
        codeMessage.put("-605", "有舰队正在远征此关卡");
        codeMessage.put("-606", "旗舰等级不够");
        codeMessage.put("-607", "舰队船只数量不足");
        codeMessage.put("-608", "船只类型不符合条件");
        codeMessage.put("-609", "章节未开启,当前关卡不能远征");
        codeMessage.put("-610", "补给不足，不能远征");
        codeMessage.put("-701", "任务未完成");
        codeMessage.put("-702", "奖励已领取");
        codeMessage.put("-703", "本次任务只能完成一个，谢谢参与！");
        codeMessage.put("-801", "商城购买");
        codeMessage.put("-802", "不能购买");
        codeMessage.put("-803", "已经拥有,不能购买");
        codeMessage.put("-901", "舰队不存在");
        codeMessage.put("-902", "舰队没有舰船");
        codeMessage.put("-903", "舰队正在远征");
        codeMessage.put("-904", "请重新挑战");
        codeMessage.put("-905", "不在挑战列表中");
        codeMessage.put("-906", "已挑战");
        codeMessage.put("-1001", "建造船坞已满");
        codeMessage.put("-1002", "装备开发船坞已满");
        codeMessage.put("-1003", "维修船坞已满");
        codeMessage.put("-1004", "舰船船坞已满");
        codeMessage.put("-1005", "装备仓库已满");
        codeMessage.put("-1006", "不是钻石购买的类型");
        codeMessage.put("-1007", "该商品限购");
        codeMessage.put("-1008", "不是人民币购买的类型");
        codeMessage.put("-1009", "支付未成功");
        codeMessage.put("-1010", "不在购买时间内");
        codeMessage.put("-1011", "战利品不足");
        codeMessage.put("-1012", "不能重复购买");
        codeMessage.put("-1013", "功勋不足");
        codeMessage.put("-1101", "此位置不允许放船");
        codeMessage.put("-1102", "船的类型不匹配");
        codeMessage.put("-1103", "船的cid不匹配");
        codeMessage.put("-1104", "不能用同一种战舰");
        codeMessage.put("-1105", "不符合规则，不能出击");
        codeMessage.put("-1106", "前置pve没过");
        codeMessage.put("-1107", "前置战役没过");
        codeMessage.put("-1108", "今日挑战次数已满");
        codeMessage.put("-1109", "舰队含远征中船只，无法出征");
        codeMessage.put("-1110", "舰队含修理中船只，无法出征");
        codeMessage.put("-1111", "舰队含已撤退船只，无法出征");
        codeMessage.put("-1112", "支援系统未解锁");
        codeMessage.put("-1113", "不能升级");
        codeMessage.put("-1201", "无此兑换码");
        codeMessage.put("-1202", "尚未开启兑换");
        codeMessage.put("-1203", "该兑换码已过期");
        codeMessage.put("-1204", "已用完");
        codeMessage.put("-1205", "您已兑换过该类礼包");
        codeMessage.put("-1206", "奖励已经领取");
        codeMessage.put("-1207", "没有领取资格");
        codeMessage.put("-1208", "等级不够,无法领取");
        codeMessage.put("-1209", "等级太高,无法领取");
        codeMessage.put("-1301", "您的好友已满,不能再添加");
        codeMessage.put("-1302", "好友申请已满,不能再申请");
        codeMessage.put("-1303", "申请已过期");
        codeMessage.put("-1304", "对方的好友已满,不能再添");
        codeMessage.put("-1305", "挑战次数已满，请休息一会");
        codeMessage.put("-1306", "调整队伍次数已满");
        codeMessage.put("-1307", "已经是好友");
        codeMessage.put("-1308", "您输入的玩家并不存在");
        codeMessage.put("-1309", "签名不得超过30个字节");
        codeMessage.put("-1310", "没有此勋章");
        codeMessage.put("-1311", "勋章没有完成");
        codeMessage.put("-1312", "勋章已经完成");
        codeMessage.put("-1313", "请不要向自己发送好友申请");
        codeMessage.put("-1314", "该玩家只允许通过UID添加好友");
        codeMessage.put("-1401", "一波战役不能选择其他好友");
        codeMessage.put("-1402", "不是好友");
        codeMessage.put("-1403", "好友已协助战斗，次日才可邀请");
        codeMessage.put("-1404", "不能使用好友舰队");
        codeMessage.put("-1405", "不能重复使用船只");
        codeMessage.put("-1406", "同舰船类型已达到出战数量上限");
        codeMessage.put("-1407", "补给次数不足");
        codeMessage.put("-1408", "驻守中的舰船不能补给及修理");
        codeMessage.put("-1409", "舰队中有一耐久度为0的船，不能出战");
        codeMessage.put("-1410", "敌人已经被消灭");
        codeMessage.put("-1411", "副本时间未开启");
        codeMessage.put("-1412", "战斗中不能编队");
        codeMessage.put("-1413", "战斗中不能补给");
        codeMessage.put("-1414", "有舰船正在驻守中，无法出征");
        codeMessage.put("-1415", "有舰船正在驻守中，无法出征");
        codeMessage.put("-1416", "有舰船正驻守中，无法远征");
        codeMessage.put("-1417", "有舰船驻守中，不能进行战役");
        codeMessage.put("-1418", "有舰船驻守中");
        codeMessage.put("-1419", "旗舰大破不能出击");
        codeMessage.put("-1501", "已编队");
        codeMessage.put("-1502", "已侦察");
        codeMessage.put("-1503", "下次侦察时间未到");
        codeMessage.put("-1504", "已经在待命中");
        codeMessage.put("-1505", "请先侦察");
        codeMessage.put("-1506", "事件已经结束");
        codeMessage.put("-1507", "非战斗点");
        codeMessage.put("-1508", "不是宝箱");
        codeMessage.put("-1509", "夜幕降临，侦察机无法在0点至8点出击侦察");
        codeMessage.put("-1601", "房间不存在");
        codeMessage.put("-1602", "家具在房间中，不能回收");
        codeMessage.put("-1603", "家具已锁定，不能回收");
        codeMessage.put("-1604", "家具没有收集完成");
        codeMessage.put("-1605", "已领取");
        codeMessage.put("-1606", "家具数量不足");
        codeMessage.put("-1607", "家具仓库已满");
        codeMessage.put("-1608", "今日好感度收取已达上限（5次）");
        codeMessage.put("-1609", "方案名10个字");
        codeMessage.put("-1610", "家具方案不存在");
        codeMessage.put("-1611", "自己上传的方案不能取消");
        codeMessage.put("-1612", "已经收藏过了");
        codeMessage.put("-1613", "每周上传3次");
        codeMessage.put("-1614", "只能收藏 100个");
        codeMessage.put("-1615", "宿舍已达上限");
        codeMessage.put("-1701", "请先设置一个厨师");
        codeMessage.put("-1702", "还未学会这道菜谱");
        codeMessage.put("-1703", "厨师与菜谱国籍不相同");
        codeMessage.put("-1704", "好友没有设置厨师");
        codeMessage.put("-1705", "厨师没有学会这道菜");
        codeMessage.put("-1706", "每日只能吃三次食物");
        codeMessage.put("-1801", "教官没有拥有");
        codeMessage.put("-1802", "训练栏已达上限");
        codeMessage.put("-1803", "训练栏已满");
        codeMessage.put("-1804", "没有设置教官");
        codeMessage.put("-1805", "不是当前教官的战术");
        codeMessage.put("-1806", "船型限制,不能学习该战术");
        codeMessage.put("-1807", "舰船等级不足");
        codeMessage.put("-1808", "未完成学习的战术，不能使用");
        codeMessage.put("-1809", "有战术在学习中，不能替换");
        codeMessage.put("-1810", "教室未开放");
        codeMessage.put("-1811", "教官不够");
        codeMessage.put("-1901", "投票时间已经结束");
        codeMessage.put("-1902", "蓝飘带数量不足");
        codeMessage.put("-2001", "不需要选择战况");
        codeMessage.put("-2002", "前置关卡未过");
        codeMessage.put("-2003", "奖励已经领取");
        codeMessage.put("-2004", "分数不够");
        codeMessage.put("-2005", "奖励不存在");
        codeMessage.put("-2006", "当前战况限制，不可用当前舰队，请重新编队");
        codeMessage.put("-2007", "旗舰大破不能出击");
        codeMessage.put("-2008", "出征过的船只不能再被使用");
        codeMessage.put("-2101", "情报点数不足");
        codeMessage.put("-2102", "情报重置时间未到");
        codeMessage.put("-2103", "当前情报限制，不可用当前舰队，请重新编队");
        codeMessage.put("-9993", "活动已经结束，请点击[确认]后回到港口界面");
        codeMessage.put("-9994", "您已经登出");
        codeMessage.put("-9995", "登陆失效");
        codeMessage.put("-9996", "非法请求");
        codeMessage.put("-9997", "您的账号已经在别的设备上登录");
        codeMessage.put("-9998", "账号被冻结，请联系客服");
        codeMessage.put("-9999", "服务器正在维护");
    }

    @Override
    public String toString() {
        return this.code + ":" + this.message;
    }
}
