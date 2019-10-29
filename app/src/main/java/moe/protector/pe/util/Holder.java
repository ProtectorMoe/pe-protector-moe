package moe.protector.pe.util;

public class Holder {
    public Holder(String a, int b) {
        holdString = a;
        holdInt = b;
    }

    public Holder(String a) {
        holdString = a;
        holdInt = -1;
    }

    public Holder(int b) {
        holdString = null;
        holdInt = b;
    }

    public Holder(boolean c) {
        holdBool = c;
    }


    public String getHoldString() {
        return holdString;
    }

    public void setHoldString(String holdString) {
        this.holdString = holdString;
    }

    public int getHoldInt() {
        return holdInt;
    }

    public void setHoldInt(int holdInt) {
        this.holdInt = holdInt;
    }

    private String holdString;
    private int holdInt;

    public boolean isHoldBool() {
        return holdBool;
    }

    public void setHoldBool(boolean holdBool) {
        this.holdBool = holdBool;
    }

    private boolean holdBool = false;


}
