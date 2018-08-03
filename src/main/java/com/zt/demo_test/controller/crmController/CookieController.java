package com.zt.demo_test.controller.crmController;

import org.apache.http.HttpEntity;
import org.apache.http.HttpHost;
import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.CookieStore;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.*;
import org.apache.http.impl.cookie.BasicClientCookie;
import org.apache.http.util.CharArrayBuffer;
import org.apache.http.util.EntityUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;


/**
 * @Author: zt
 * @Date: 2018/7/10 16:01
 */
@Controller
@RequestMapping(value = "/")
public class CookieController {

    @RequestMapping(value = "setCookie")
    @ResponseBody
    public String setCookie(@RequestParam(value = "cookie") String cookie, HttpServletResponse response) {
        System.err.println("收入到的cookie:" + cookie);
        DefaultHttpClient httpclient = new DefaultHttpClient();
        HttpHost target = new HttpHost("wxtestbusiness.nabeluse.com", 5555, "http");
//        http://wxtestbusiness.nabeluse.com:5555/NobelDev/_forms/navtour/dlg_navtour.aspx
//        http://wxtestbusiness.nabeluse.com:5555/NobelDev/_forms/controls/controls.css.aspx?lcid=2052&ver=-1540460521
        HttpGet httpGet = new HttpGet("/NobelDev/_forms/controls/controls.css.aspx?lcid=2052&ver=-1540460521");

        httpGet.addHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36");
        httpGet.addHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
//        httpGet.addHeader("Referer","http://wxtestbusiness.nabeluse.com:5555/NobelDev/main.aspx");
        httpGet.addHeader("Accept-Encoding", "gzip, deflate");
        httpGet.addHeader("Accept-Language", "zh-CN,zh;q=0.9");
//        httpGet.addHeader("Upgrade-Insecure-Requests", "1");
//        httpGet.addHeader("AuthOrization","Negotiate TlRMTVNTUAADAAAAGAAYAHoAAABIAUgBkgAAAAAAAABYAAAAFAAUAFgAAAAOAA4AbAAAABAAEADaAQAAFYKI4goA7kIAAAAPdVtiziRRpdRZY+f2ndQhLnQAZQBzAHQAMQAyADMAQABhAGQAWgBIAE8AVQBUAEEATwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIM13ys0IBaZXmuSY5tBAlAQEAAAAAAACCEYaC7hjUAXSQvmFvnR9/AAAAAAIABABBAEQAAQAKAEMAUgBNADAAMQAEABYAYQBkAC4AbgBhAGIAZQBsAC4AYwBjAAMAIgBDAFIATQAwADEALgBhAGQALgBuAGEAYgBlAGwALgBjAGMABQAWAGEAZAAuAG4AYQBiAGUAbAAuAGMAYwAHAAgAghGGgu4Y1AEGAAQAAgAAAAgAMAAwAAAAAAAAAAEAAAAAIAAA4NslkQC7Zq0Lj8Zkg6SjrJi3+lXP29TKE7KxvTDrfoYKABAAAAAAAAAAAAAAAAAAAAAAAAkAQABIAFQAVABQAC8AdwB4AHQAZQBzAHQAYgB1AHMAaQBuAGUAcwBzAC4AbgBhAGIAZQBsAHUAcwBlAC4AYwBvAG0AAAAAAAAAAAAAAAAAn/pkgitbVMbvr8lNtqVT7w==");
        // 传输的类型
//        httpGet.addHeader("Content-Type", "application/x-www-form-urlencoded");
        CookieStore cookieStore = new BasicCookieStore();
        cookieStore.addCookie(new BasicClientCookie("Cookie", "ReqClientId=" + cookie));
        httpclient.setCookieStore(cookieStore);
        response.addCookie(new Cookie("ReqClientId", cookie));

        try {
            HttpResponse httpResponse = httpclient.execute(target, httpGet);
            HttpEntity entity = httpResponse.getEntity();
            String res = entityToString(entity);
            System.err.println("返回结果：+++++++++》" + res);
            return res;
        } catch (IOException e) {
            e.printStackTrace();
        }

        return "error";
    }

    @RequestMapping(value = "setCookie1")
    @ResponseBody
    public void setCookie1(@RequestParam(value = "cookie") String cookie){
        cookie="ReqClientId="+cookie;
        System.err.println("收到的cookie:"+cookie);
//        getJsonFromServer("http://wxtestbusiness.nabeluse.com:5555/NobelDev/_forms/controls/controls.css.aspx?lcid=2052&ver=-1540460521",cookie);
        getJsonFromServer("http://wxtestbusiness.nabeluse.com:5555/NobelDev/main.aspx#627904338",cookie);
    }

    private static void getJsonFromServer(String url, String cookie) {
        HttpClientBuilder httpClientBuilder=HttpClientBuilder.create();
        CloseableHttpClient closeableHttpClient=httpClientBuilder.build();
        HttpGet httpGet=new HttpGet(url);
        httpGet.addHeader("Cookie",cookie);
        httpGet.addHeader("Content-type", "application/x-www-form-urlencoded");
        try {
//            httpPost.setEntity(new UrlEncodedFormEntity(nameValuePairs,"UTF-8"));
            HttpResponse response = closeableHttpClient.execute(httpGet);
            if (response.getStatusLine().getStatusCode() == 200) {
                System.err.println("返回数据:------------------------>"+EntityUtils.toString(response.getEntity()));
                /*读返回数据*/
                EntityUtils.toString(response.getEntity());
            } else {
                String err = response.getStatusLine().getStatusCode()+"";
                System.err.println("发送HTTP请求失败:"+err);
            }
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        } catch (ClientProtocolException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
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
