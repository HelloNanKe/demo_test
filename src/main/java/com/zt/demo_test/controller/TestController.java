package com.zt.demo_test.controller;

import org.apache.http.Header;
import org.apache.http.HttpEntity;
import org.apache.http.HttpHost;
import org.apache.http.HttpResponse;
import org.apache.http.auth.AuthScope;
import org.apache.http.auth.NTCredentials;
import org.apache.http.client.CookieStore;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.protocol.BasicHttpContext;
import org.apache.http.protocol.HttpContext;
import org.apache.http.util.CharArrayBuffer;
import org.apache.http.util.EntityUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;


import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.CookieHandler;
import java.net.CookieManager;
import java.net.HttpCookie;
import java.net.URLEncoder;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @Author: zt
 * @Date: 2018/7/6 11:09
 */
@Controller
public class TestController {

    @RequestMapping(value = "/test2")
    public String test() {
        System.err.println("进入页面请求---->");
        return "login.html";
    }


    @RequestMapping(value = "/test1")
    @ResponseBody
    public Map<String, String> httpQuery(HttpServletResponse response, HttpServletRequest request) {
        Map<String, String> map = new HashMap<>();
        DefaultHttpClient httpclient = new DefaultHttpClient();
        NTCredentials creds = new NTCredentials("test123@ad:test123");
        httpclient.getCredentialsProvider().setCredentials(AuthScope.ANY, creds);
        HttpHost target = new HttpHost("wxtestbusiness.nabeluse.com", 5555, "http");
        // 首先执行简便的方法。这会触发NTLM认证
        HttpGet httpget = new HttpGet("/NobelDev/main.aspx");
        HttpResponse response1 = null;
        try {
            response1 = httpclient.execute(target, httpget);
            System.err.println(response1);

            Header[] headers = response1.getAllHeaders();
            Header header = headers[5];
            Cookie cookie = new Cookie("ReqClientId", header.getValue());
            cookie.setMaxAge(-1);
            cookie.setHttpOnly(true);
            cookie.setDomain("wxtestbusiness.nabeluse.com");
            cookie.setPath("/");
            response.setHeader("ReqClientId", header.getValue());
            map.put("ReqClientId", header.getValue());
            response.addCookie(cookie);
            response.setContentType("application/x-www-form-urlencoded;charset=UTF-8");
            httpclient.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        map.put("url", "http://wxtestbusiness.nabeluse.com:5555/NobelDev/main.aspx#1611548464");
        return map;
    }

   /* BPM测试
    http://bpmtest.nabeluse.com/ 
    http://bpmtest.nabeluse.com/YZSoft/login/ajax_admin.ashx?do_login=true&action=login&posid=0&lis=%E4%B8%8B%E5%8D%882%3A02%3A55&uid=test&pwd=123456&vercode=
    test/test
    https://bi.nabeluse.com/ 
    test/test*/

//    @RequestMapping(value = "/queryBpm")
//    @ResponseBody
/*    public Map<String, Object> queryBpm(HttpServletResponse response, HttpServletRequest request) {
        Map<String, Object> map = new HashMap<>();
        try {
            CookieManager manager = new CookieManager();
            CookieHandler.setDefault(manager);
            HttpClient httpClient = new DefaultHttpClient();

            HttpGet httpGet = new HttpGet("/YZSoft/login/ajax_admin.ashx?do_login=true&action=login&posid=0&lis=" + URLEncoder.encode(new Date().toString()) + "&uid=test&pwd=test&vercode=");
            HttpHost httpHost = new HttpHost("bpmtest.nabeluse.com", 80, "http");
            HttpResponse response1 = httpClient.execute(httpHost, httpGet);
            Header[] headers = response1.getAllHeaders();
            for (Header header : headers) {
                System.err.println(header.getName() + "->" + header.getValue());
            }
            CookieStore cookieJar = manager.getCookieStore();
            List<HttpCookie> cookies = cookieJar.getCookies();

            for (HttpCookie cookie : cookies) {
                System.err.println(cookie);
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
        map.put("url", "http://bpmtest.nabeluse.com");
        return map;
    }*/


    @RequestMapping(value = "/crmAuth")
    @ResponseBody
    public Map<String, Object> crmAuth(HttpServletRequest request, HttpServletResponse response) {
        Map<String, Object> map = new HashMap<>();
        map.put("url", "http://wxtestbusiness.nabeluse.com:5555");
        DefaultHttpClient httpclient = new DefaultHttpClient();
//        NTCredentials creds = new NTCredentials("user", "pwd", "myworkstation", "microsoft.com");
        NTCredentials creds = new NTCredentials("test123@ad:test123");
        httpclient.getCredentialsProvider().setCredentials(AuthScope.ANY, creds);
        HttpHost target = new HttpHost("wxtestbusiness.nabeluse.com", 5555, "http");
// 保证相同的内容来用于执行逻辑相关的请求
        HttpContext localContext = new BasicHttpContext();
// 首先执行简便的方法。这会触发NTLM认证
        HttpGet httpget = new HttpGet("/NobelDev/main.aspx");
        HttpResponse response1 = null;
        try {
            response1 = httpclient.execute(target, httpget, localContext);
            System.err.println("response1---->:" + response1);
            HttpEntity entity1 = response1.getEntity();

            if (entity1 != null) {
                entity1.consumeContent();
            }

            CookieStore cookieStore2 = httpclient.getCookieStore();
            List<org.apache.http.cookie.Cookie> list = cookieStore2.getCookies();
            for (org.apache.http.cookie.Cookie cookie : list) {
//                ReqClientId
                System.err.println(cookie.getName() + "-----------------》" + cookie.getValue());
                response.addCookie(new Cookie(cookie.getName(), cookie.getValue()));
            }


//            response.addHeader("http.request", (String) localContext.getAttribute("http.request"));
            response.addHeader("http.request-config", localContext.getAttribute("http.request-config").toString());
//            response.addHeader("http.user-token", (String) localContext.getAttribute("http.user-token"));
//            response.addHeader("http.auth.proxy-scope", (String) localContext.getAttribute("http.auth.proxy-scope"));
//            response.addHeader("http.request_sent", (String) localContext.getAttribute("http.request_sent"));
//            response.addHeader("http.cookie-spec", (String) localContext.getAttribute("http.cookie-spec"));
//            response.addHeader("http.connection", (String) localContext.getAttribute("http.connection"));
//            response.addHeader("http.auth.target-scope", (String) localContext.getAttribute("http.auth.target-scope"));
//            response.addHeader("http.target_host", (String) localContext.getAttribute("http.target_host"));
//            response.addHeader("http.route", (String) localContext.getAttribute("http.route"));
//            response.addHeader("http.cookie-origin", (String) localContext.getAttribute("http.cookie-origin"));
//            response.addHeader("http.response", (String) localContext.getAttribute("http.response"));


//之后使用相同的内容（和连接）执行开销大的方法。
            HttpGet httppost = new HttpGet("/NobelDev/main.aspx");
//            httppost.setEntity(new StringEntity("lots and lots of data"));
            HttpResponse response2 = httpclient.execute(target, httppost, localContext);
            System.err.println("response2------->:" + response2);
            HttpEntity entity2 = response2.getEntity();
            String resultStr = entityToString(entity2);
            InputStream inputStream = entity2.getContent();
            if (entity2 != null) {
                entity2.consumeContent();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return map;
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

