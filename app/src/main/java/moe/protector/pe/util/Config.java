package moe.protector.pe.util;

public class Config {
    public static boolean hasLogin = false;  // 是否已经登入
    public static String key = "";  // 加密秘钥
    public static String head = "";  // 加密头部
    public static String resUrl = "";  // 存放init数据的网址
    public static String channel = "";  // 游戏信道
    public static String version = "";  // 游戏版本
    public static String urlVersion = "";  // 游戏获取version的网址
    public static int serverType = 0;  // 游戏国籍
    public static String resVersion = "";  // res的版本

    public static String host = "";  // 游戏地址
    public static String userId;  // 用户标识码
    public static String loginHead;  // 登录地址
    public static String loginApiHead;  // 登录api地址

    public static boolean isFirstLogin = true;
    public static boolean isRepairFleet = false;
    public static final StringBuilder errMsg = new StringBuilder();
    public static String [] SETU = {Img.getRandomSetu(), Img.getRandomSetu(), Img.getRandomSetu()};
}
