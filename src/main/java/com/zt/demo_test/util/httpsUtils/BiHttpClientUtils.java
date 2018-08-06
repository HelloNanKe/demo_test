package com.zt.demo_test.util.httpsUtils;


import com.zt.demo_test.commons.BiKey;
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
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;

import javax.print.DocFlavor;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @Author: zt
 * @Date: 2018/8/3 15:28
 */

public class BiHttpClientUtils {

    /**
     * 发送post请求组
     *
     * @param url
     * @param list
     * @param charset
     * @return
     */
    public static Map<String, Object> doPost(String url, List<NameValuePair> list, String charset, String queryStr) {

        if (StringUtils.isEmpty(charset)) {
            charset = "UTF-8";
        }
        Map<String, Object> resMap = new HashMap<>();
        HttpClient httpClient = null;
        HttpPost httpPost = null;
        String result = null;
        try {

            httpClient = new SSLClient();

            if (StringUtils.isEmpty(queryStr)) {
                httpPost = new HttpPost(url);
            } else {
                httpPost = new HttpPost(url + "?" + queryStr);
            }
            if (!CollectionUtils.isEmpty(list)) {
                UrlEncodedFormEntity entity = new UrlEncodedFormEntity(list, charset);
                httpPost.setEntity(entity);
            }
            HttpResponse response = httpClient.execute(httpPost);
            if (!ObjectUtils.isEmpty(response)) {
                Header[] headers = response.getAllHeaders();
                resMap.put(BiKey.HEADERS, headers);
                resMap.put(BiKey.STATUS_CODE, response.getStatusLine().getStatusCode());
                HttpEntity resEntity = response.getEntity();
                if (!ObjectUtils.isEmpty(resEntity)) {
//                    System.out.println("contentType:"+resEntity.getContentType().getValue());
//                    resMap.put(BiKey.PAGETYPE, resEntity.getContentType().getValue());
                    result = EntityUtils.toString(resEntity, charset);
                    resMap.put(BiKey.RES, result);
                }
            }
        } catch (Exception ex) {
            ex.printStackTrace();
        } finally {
            if (!ObjectUtils.isEmpty(httpPost)) {
                httpPost.releaseConnection();
            }
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
    public static Map<String, Object> doGet(String url, Map<String, String> headerMap, String charset, String queryStr) {
        Map<String, Object> resMap = new HashMap<>();


        if (null == charset) {
            charset = "utf-8";
        }
        HttpClient httpClient = null;
        HttpGet httpGet = null;
        String result = null;

        try {
            httpClient = new SSLClient();
            if (StringUtils.isEmpty(queryStr)) {
                httpGet = new HttpGet(url);
            } else {
                httpGet = new HttpGet(url + "?" + queryStr);
            }


           /* if (queryStr.startsWith("formlet=demo/homepage")) {
                httpGet.addHeader("Referer", "https://bi.nabeluse.com/ReportServer?op=fs");
            }*/
            if (!CollectionUtils.isEmpty(headerMap)) {

                //首页加载的主页面需要携带cookie信息
                if (queryStr.startsWith("formlet=demo/homepage")) {
                    StringBuilder cookie = new StringBuilder();

                    for (String key : headerMap.keySet()) {
                        cookie.append(key).append("=").append(headerMap.get(key)).append("; ");
                    }
                    System.out.println("cookie++++" + cookie);
                    httpGet.addHeader("Cookie", cookie.toString());
                } else {
                    for (String key : headerMap.keySet()) {
                        httpGet.addHeader(key, headerMap.get(key));
                    }
                }

            }
            HttpResponse response = httpClient.execute(httpGet);
            resMap.put(BiKey.HEADERS, response.getAllHeaders());
            resMap.put(BiKey.STATUS_CODE, response.getStatusLine().getStatusCode());
            if (!ObjectUtils.isEmpty(response)) {
                HttpEntity resEntity = response.getEntity();
                resMap.put(BiKey.PAGETYPE, resEntity.getContentType().getValue());
                if (!ObjectUtils.isEmpty(resEntity)) {
                    result = EntityUtils.toString(resEntity, charset);
                    resMap.put(BiKey.RES, result);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (!ObjectUtils.isEmpty(httpGet)) {
                httpGet.releaseConnection();
            }
        }
        return resMap;
    }

}
