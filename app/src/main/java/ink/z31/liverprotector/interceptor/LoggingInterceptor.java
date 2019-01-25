package ink.z31.liverprotector.interceptor;

import android.util.Log;

import java.io.IOException;

import okhttp3.Interceptor;
import okhttp3.Request;
import okhttp3.Response;

public class LoggingInterceptor implements Interceptor {
    private static final String TAG = "LoggingInterceptor";
    @Override
    public Response intercept(Chain chain) throws IOException {
        Request request = chain.request();

        long startTime = System.nanoTime();
        Log.d(TAG, String.format("发送数据 %s on %s%n",
                request.url(), chain.connection()));

        Response response =  chain.proceed(request);

        long endTime = System.nanoTime();
        Log.d(TAG, String.format("接收数据 %s in %.1fms%n",
                response.request().url(), (endTime - startTime) / 1e6d));
        return response;
    }
}