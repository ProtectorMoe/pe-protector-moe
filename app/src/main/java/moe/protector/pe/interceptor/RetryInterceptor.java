package moe.protector.pe.interceptor;

import android.util.Log;

import java.io.IOException;

import moe.protector.pe.util.Util;
import okhttp3.Interceptor;
import okhttp3.Request;
import okhttp3.Response;

public class RetryInterceptor implements Interceptor {
    private static final String TAG = "RetryInterceptor";
    private int retryNum;
    private int tryNum = 0;
    public RetryInterceptor(int retryNum) {
        this.retryNum = retryNum;
    }

    @Override
    public Response intercept(Chain chain) throws IOException {
        Request request = chain.request();
        Response response =  chain.proceed(request);
        while (!response.isSuccessful() && tryNum <= retryNum) {
            Log.e(TAG, "网络链接失败" + request.url());
            tryNum ++;
            response = chain.proceed(request);
        }
        if (!response.isSuccessful()) {
            Util.putErrMsg(String.format("网络连接失败, 信息\nmethod:%s\nurl:%s\nhost:%s\nheaders:%s\nbody:%s\ntag:%s",
                    request.method(),
                    request.url(),
                    request.url().host(),
                    request.headers(),
                    request.body(),
                    request.tag()
            ));
        }
        return response;
    }
}
