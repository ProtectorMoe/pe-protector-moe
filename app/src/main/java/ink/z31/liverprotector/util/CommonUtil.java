package ink.z31.liverprotector.util;

import android.util.Base64;
import android.util.Log;

import javax.crypto.Mac;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;

public class CommonUtil {
    private static final String TAG = "CommonUtil";
    private static final String ENCODING = "UTF-8";
    private static final String MAC_NAME = "HmacSHA1";
    public static String encryptionHMAC(String source) {
        try {
            SecretKey secretKey = new SecretKeySpec(Config.key.getBytes(ENCODING), MAC_NAME);
            Mac mac = Mac.getInstance(MAC_NAME);
            mac.init(secretKey);
            mac.update(source.getBytes(ENCODING));
            byte[] b = mac.doFinal();
            return Base64.encodeToString(b, 2);
        } catch (Exception e) {
            return null;
        }
    }

    public static void delay(long time)
    {
        try {
            Thread.sleep(time);
        }catch (Exception e) {
            Log.e(TAG, e.getLocalizedMessage());
        }
    }

    public static int randomInt(int min, int max) {
        return (int) (min + Math.random() * (max - min + 1));
    }
}
