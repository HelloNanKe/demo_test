package com.zt.demo_test.util.httpsUtils;


import org.apache.http.Header;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.util.EntityUtils;
import org.springframework.util.CollectionUtils;

import java.util.*;

/**
 * @Author: zt
 * @Date: 2018/8/3 15:28
 */

public class HttpClientUtil {

    /**
     * 发送post请求组
     *
     * @param url
     * @param list
     * @param charset
     * @return
     */
    public static Map<String, Object> doPost(String url, List<NameValuePair> list, String charset) {

        Map<String, Object> resMap = new HashMap<>();

        HttpClient httpClient = null;
        HttpPost httpPost = null;
        String result = null;
        try {
            httpClient = new SSLClient();
            httpPost = new HttpPost(url);

            if (list.size() > 0) {
                UrlEncodedFormEntity entity = new UrlEncodedFormEntity(list, charset);
                httpPost.setEntity(entity);
            }
            HttpResponse response = httpClient.execute(httpPost);
            Header[] headers = response.getAllHeaders();
            resMap.put("headers", headers);
//            for (Header header : headers) {
//                System.err.println(header.getName() + "----->" + header.getValue());
//            }
            if (response != null) {
                HttpEntity resEntity = response.getEntity();
                if (resEntity != null) {
                    result = EntityUtils.toString(resEntity, charset);
                    resMap.put("result", result);
                }
            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return resMap;
    }

    /**
     * 发送get请求
     *
     * @param url     链接地址
     * @param charset 字符编码，若为null则默认utf-8
     * @return
     */
    public static String doGet(String url, Map<String, String> headerMap, String charset) {
        if (null == charset) {
            charset = "utf-8";
        }
        HttpClient httpClient = null;
        HttpGet httpGet = null;
        String result = null;

        try {

            httpClient = new SSLClient();
            httpGet = new HttpGet(url);

            if (!CollectionUtils.isEmpty(headerMap)) {
                for (String key : headerMap.keySet()) {
                    httpGet.addHeader(key, headerMap.get(key));
                }
            }

            HttpResponse response = httpClient.execute(httpGet);
            System.out.println("GET请求的返回码:"+response.getStatusLine().getStatusCode());
            if (response != null) {
                HttpEntity resEntity = response.getEntity();
                if (resEntity != null) {
                    result = EntityUtils.toString(resEntity, charset);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return result;
    }

}
