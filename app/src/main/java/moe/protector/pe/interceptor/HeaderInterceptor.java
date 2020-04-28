package moe.protector.pe.interceptor;

import android.util.Log;

import java.io.IOException;
import java.net.URI;

import moe.protector.pe.util.CommonUtil;
import moe.protector.pe.util.Config;
import moe.protector.pe.util.DateUtil;
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
            String newStringToSign = CommonUtil.encryptionHMAC(stringToSign);
            String authorization = Config.head + ":" + newStringToSign;
            builder.header("Authorization", authorization);
            builder.header("Date", gmtDate);
            builder.header("Content-Type", "application/json");
        } else {
            builder.header("User-Agent", String.format("Dalvik/2.1.0 (Linux; U; Android %s; %s Build/LMY48Z)", android.os.Build.VERSION.RELEASE, android.os.Build.MODEL));
            builder.header("Accept-Encoding", "identity");
        }
        return chain.proceed(builder.build());
    }
}
