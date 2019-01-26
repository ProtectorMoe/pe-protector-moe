package ink.z31.liverprotector.interceptor;

import android.util.Log;

import java.io.IOException;
import java.net.URI;

import ink.z31.liverprotector.util.CommonUtil;
import ink.z31.liverprotector.util.Config;
import ink.z31.liverprotector.util.DateUtil;
import okhttp3.Interceptor;
import okhttp3.Request;
import okhttp3.Response;

public class HeaderInterceptor  implements Interceptor {
    private static final String TAG = "HeaderInterceptor";
    @Override
    public Response intercept(Chain chain) throws IOException {
        Request request = chain.request();
        Request.Builder builder = request.newBuilder();
        URI uri = request.url().uri();
        String host = uri.getHost();
        Log.d(TAG,"请求host来自于:" + host);

        if (host.contains("passport")){  // 新api登录的header
            String gmtDate = DateUtil.getGMTDate();
            String stringToSign = request.method() + "\n" + gmtDate + "\n" + uri.getPath();
            stringToSign = CommonUtil.encryptionHMAC(stringToSign);
            String authorization = Config.head + ":" + stringToSign;
            builder.header("Authorization", authorization);
            builder.header("Date", gmtDate);
            builder.header("Content-Type", "application/json");
        } else {
            builder.header("User-Agent", "Dalvik/2.1.0 (Linux; U; Android 5.1.1; mi max Build/LMY48Z)");
            builder.header("Accept-Encoding", "identity");
//            if (Config.cookie.length() < 10){
//                builder.header("Cookie", Config.cookie);
//            }
        }
        return chain.proceed(builder.build());
    }
}
