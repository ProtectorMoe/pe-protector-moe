
package ink.z31.liverprotector.bean.apiInitGame;
public class DetailInfo {
    public String username;
    public int titleId;
    public int level;
    public int exp;
    public long lastLevelExpNeed;
    public long nextLevelExpNeed;
    public int shipNum;
    public int shipNumTop;
    public int basicShipNum;
    public int equipmentNum;
    public int equipmentNumTop;
    public String collection;
    public String pveWin;
    public int pveLost;
    public String pveNum;
    public String pvpWin;
    public int pvpLost;
    public String pvpNum;
    public String exploreNum;
    public String exploreBigSuccessNum;     public long getLastLevelExpNeed() {
         return lastLevelExpNeed;
     }     public long getNextLevelExpNeed() {
         return nextLevelExpNeed;
     }
}