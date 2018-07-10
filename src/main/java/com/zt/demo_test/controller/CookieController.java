package com.zt.demo_test.controller;

import org.apache.http.HttpEntity;
import org.apache.http.HttpHost;
import org.apache.http.HttpResponse;
import org.apache.http.auth.AuthScope;
import org.apache.http.auth.Credentials;
import org.apache.http.auth.NTCredentials;
import org.apache.http.client.CookieStore;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.BasicCookieStore;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.impl.cookie.BasicClientCookie;
import org.apache.http.util.CharArrayBuffer;
import org.apache.http.util.EntityUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.Cookie;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpCookie;

/**
 * @Author: zt
 * @Date: 2018/7/10 16:01
 */
@Controller
@RequestMapping(value = "/")
public class CookieController {

    @RequestMapping(value = "setCookie")
    @ResponseBody
    public String setCookie(@RequestParam(value = "cookie") String cookie) {

        System.err.println("收入到的cookie:"+cookie);

        DefaultHttpClient httpclient = new DefaultHttpClient();
        HttpHost target = new HttpHost("wxtestbusiness.nabeluse.com", 5555, "http");
//        http://wxtestbusiness.nabeluse.com:5555/NobelDev/_forms/navtour/dlg_navtour.aspx
        HttpGet httpGet = new HttpGet("/NobelDev/_forms/navtour/dlg_navtour.aspx");
        httpGet.addHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
        httpGet.addHeader("Accept-Encoding","gzip, deflate, br");
        httpGet.addHeader("Accept-Language","zh-CN,zh;q=0.9");
        httpGet.addHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36");

        // 传输的类型
//        httpGet.addHeader("Content-Type", "application/x-www-form-urlencoded");
        CookieStore cookieStore = new BasicCookieStore();
        cookieStore.addCookie(new BasicClientCookie("Cookie", cookie));
        httpclient.setCookieStore(cookieStore);


        try {
            HttpResponse httpResponse = httpclient.execute(target, httpGet);
            HttpEntity entity = httpResponse.getEntity();
            String res = entityToString(entity);
            System.err.println("返回结果：+++++++++》"+res);
            return res;
        } catch (IOException e) {
            e.printStackTrace();
        }

        return "error";


    }


    private String entityToString(HttpEntity entity) throws IOException {
        String result = null;
        if (entity != null) {
            long lenth = entity.getContentLength();
            if (lenth != -1 && lenth < 2048) {
                result = EntityUtils.toString(entity, "UTF-8");
            } else {
                InputStreamReader reader1 = new InputStreamReader(entity.getContent(), "UTF-8");
                CharArrayBuffer buffer = new CharArrayBuffer(2048);
                char[] tmp = new char[1024];
                int l;
                while ((l = reader1.read(tmp)) != -1) {
                    buffer.append(tmp, 0, l);
                }
                result = buffer.toString();
            }
        }
        return result;
    }

}
