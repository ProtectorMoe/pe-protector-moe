package moe.protector.pe.util;

import android.content.Context;
import android.content.res.AssetManager;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.util.Log;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class FileUtil {
    private static final String TAG = "FileUtil";
    // 读取一个文件,返回一个字符串
    public static String readFile(String path){
        FileInputStream in = null;
        BufferedReader reader = null;
        StringBuilder builder = new StringBuilder();
        try {
            in = App.getContext().openFileInput(path);
            reader = new BufferedReader(new InputStreamReader(in));
            String line;
            while ((line = reader.readLine()) != null){
                builder.append(line);
            }
            return builder.toString();
        } catch (IOException e) {
            Log.e(TAG, "读入文件失败!" + e.getMessage());
        } finally {
            try {
                if (reader != null) {
                    reader.close();
                }
            }catch (IOException e) {
                Log.e(TAG, "读入文件失败!" + e.getMessage());
            }
        }
        return "";
    }

    // 将字符串写到文件里
    public static boolean writeFile(String path, String data){
        FileOutputStream out = null;
        BufferedWriter writer = null;
        try {
            out =  App.getContext().openFileOutput(path, Context.MODE_PRIVATE);
            writer = new BufferedWriter(new OutputStreamWriter(out));
            writer.write(data);

        } catch (IOException e) {
            Log.e(TAG, "写出文件错误!" + e.getMessage());
            return false;
        } catch (Exception e) {
            Log.e(TAG, "写出文件错误!" + e.getMessage());
            return false;
        } finally {
            try {
                if (writer != null) {
                    writer.close();
                }
            }catch (IOException e) {
                Log.e(TAG, "写出文件失败!" + e.getMessage());
            }
        }
        return true;
    }


    public static boolean isExist(String path) {
        String root = App.getContext().getPackageResourcePath() + "/files/" + path;
        File file = new File(root);
        return file.exists();
    }

    public static Bitmap getImageFromAssetsFile(String fileName) {
        Bitmap image = null;
        AssetManager am = App.getContext().getResources().getAssets();
        try {
            InputStream is = am.open(fileName);
            image = BitmapFactory.decodeStream(is);
            is.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return image;
    }
}
