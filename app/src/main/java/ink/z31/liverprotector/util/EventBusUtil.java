package ink.z31.liverprotector.util;

public class EventBusUtil {
    public static final int EVENT_TASK_CHANGE = 0;



    private int code;
    private String message;
    public EventBusUtil(int code, String message) {
        this.code = code;
        this.message = message;
    }


    public int getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }



}
