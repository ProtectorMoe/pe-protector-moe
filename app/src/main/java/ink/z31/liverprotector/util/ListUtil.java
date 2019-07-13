package ink.z31.liverprotector.util;

import java.util.List;

public class ListUtil {
    // 仿String,join,适配低级jdk
    public static String listJoinString(List<String> o, String format){
        StringBuilder result = new StringBuilder();
        if(o.size() == 1){
            result.append(o.get(0));
        }else {
            for(int i=1; i<=o.size(); i++){
                result.append(o.get(i-1));
                if (i != o.size()){
                    result.append(format);
                }
            }
        }
        return result.toString();
    }

    public static String listJoinInt(List<Integer> o, String format){
        StringBuilder result = new StringBuilder();
        if(o.size() == 1){
            result.append(o.get(0));
        }else {
            for(int i=1; i<=o.size(); i++){
                result.append(o.get(i-1));
                if (i != o.size()){
                    result.append(format);
                }
            }
        }
        return result.toString();
    }
}
