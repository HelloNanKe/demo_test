package com.zt.demo_test.util;

import org.apache.http.HttpEntity;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/**
 * @Author: zt
 * @Date: 2018/7/19 20:20
 */
public class EntityUtil {


    public static  String entityToString(HttpEntity entity) throws IOException {
        String result = "";
        if (entity != null) {
            InputStreamReader inputStreamReader = new InputStreamReader(entity.getContent());
            String s = inputStreamReader.getEncoding();
            BufferedReader bufferedReader = new BufferedReader(inputStreamReader);
            String line = "";
            while ((line = bufferedReader.readLine()) != null) {
                result += line;

            }
        }
        return result;
    }


}
