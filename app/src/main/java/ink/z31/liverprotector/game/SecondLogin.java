package ink.z31.liverprotector.game;

public class SecondLogin {
    private SecondLogin(){};
    private static SecondLogin secondLogin = new SecondLogin();
    public static SecondLogin getInstance(){
        return secondLogin;
    }
}
