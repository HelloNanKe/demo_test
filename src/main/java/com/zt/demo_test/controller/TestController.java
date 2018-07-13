package com.zt.demo_test.controller;

import org.apache.http.Header;
import org.apache.http.HttpEntity;
import org.apache.http.HttpHost;
import org.apache.http.HttpResponse;
import org.apache.http.auth.AuthScope;
import org.apache.http.auth.NTCredentials;
import org.apache.http.client.CookieStore;
import org.apache.http.client.HttpClient;
import org.apache.http.client.UserTokenHandler;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.impl.io.HttpResponseWriter;
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
import java.io.*;
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


    @RequestMapping(value = "/crmAuth")
    public void crmAuth(HttpServletRequest request, HttpServletResponse response) {
        DefaultHttpClient httpclient = new DefaultHttpClient();
        NTCredentials creds = new NTCredentials("test123@ad:test123");
        httpclient.getCredentialsProvider().setCredentials(AuthScope.ANY, creds);
        HttpHost target = new HttpHost("wxtestbusiness.nabeluse.com", 5555, "http");
        HttpGet httpget = new HttpGet("/NobelDev/main.aspx");
        HttpResponse response1 = null;
        PrintWriter out = null;
        try {
            response1 = httpclient.execute(target, httpget);
            HttpEntity entity1 = response1.getEntity();
            String res = entityToString(entity1);
            Header[] headers = response1.getAllHeaders();
            Header header = headers[5];
            System.err.println("登录时的cookie:" + header.getValue());
            response.addCookie(new Cookie("ReqClientId", header.getValue()));
            if (entity1 != null) {
                entity1.consumeContent();
            }
            assert entity1 != null;
            response.setContentType(entity1.getContentType().getValue());
            out = response.getWriter();
            out.write(res);
            out.flush();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            httpclient.close();
            assert out != null;
            out.close();
        }
    }

    @RequestMapping(value = "/NobelDev/**")
    public void nobeluse(HttpServletRequest request, HttpServletResponse response) {
        String s = null;
        if (request.getRequestURI().endsWith(".asmx")) {
            s = request.getRequestURI();
        }
        String method = request.getMethod();
        if ("GET".equals(method)) {
            doGet(response, request);
        } else {
            doPost(request, response);
        }
    }


    /**
     * get请求
     *
     * @param response
     * @param request
     * @return
     */
    private void doGet(HttpServletResponse response, HttpServletRequest request) {
        String queryStr = request.getQueryString();
        DefaultHttpClient httpclient = new DefaultHttpClient();
        NTCredentials creds = new NTCredentials("test123@ad:test123");
        httpclient.getCredentialsProvider().setCredentials(AuthScope.ANY, creds);
        HttpHost target = new HttpHost("wxtestbusiness.nabeluse.com", 5555, "http");
        System.err.println("GET请求的参数:"+queryStr);
        HttpGet httpget = new HttpGet(request.getRequestURI() + "?" + queryStr);
//        HttpGet httpget = new HttpGet(request.getRequestURI());

        HttpResponse response1 = null;
        PrintWriter out = null;
        try {
            response1 = httpclient.execute(target, httpget);
            HttpEntity entity1 = response1.getEntity();
            String res = entityToString(entity1);
            if (entity1 != null) {
                entity1.consumeContent();
            }
            assert entity1 != null;
            response.setContentType(entity1.getContentType().getValue());
            out = response.getWriter();
            out.write(res);
            out.flush();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            httpclient.close();
            assert out != null;
            out.close();
        }
    }


    /**
     * 处理post请求
     *
     * @param request
     * @param response
     */
    private void doPost(HttpServletRequest request, HttpServletResponse response) {
        DefaultHttpClient httpclient = new DefaultHttpClient();
        NTCredentials creds = new NTCredentials("test123@ad:test123");
        httpclient.getCredentialsProvider().setCredentials(AuthScope.ANY, creds);
        HttpHost target = new HttpHost("wxtestbusiness.nabeluse.com", 5555, "http");
        HttpPost httpPost = new HttpPost(request.getRequestURI());
        HttpResponse response1 = null;
        PrintWriter out = null;
        try {
            response1 = httpclient.execute(target, httpPost);
            HttpEntity entity1 = response1.getEntity();
            String res = entityToString(entity1);
//            System.err.println("获取到的html页面:-------------->"+res);
            if (entity1 != null) {
                entity1.consumeContent();
            }
            assert entity1 != null;
            response.setContentType(entity1.getContentType().getValue());
            out = response.getWriter();
            out.write(res);
            out.flush();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            httpclient.close();
            assert out != null;
            out.close();
        }
    }

    private String entityToString(HttpEntity entity) throws IOException {
        String result = "";
        if (entity != null) {
//            long lenth = entity.getContentLength();
//            if (lenth != -1 && lenth < 2048) {
//                result = EntityUtils.toString(entity, "gb2312");
//            } else {
//                InputStreamReader reader1 = new InputStreamReader(entity.getContent(), "gb2312");
//                CharArrayBuffer buffer = new CharArrayBuffer(2048);
//                char[] tmp = new char[1024];
//                int l;
//                while ((l = reader1.read(tmp)) != -1) {
//                    buffer.append(tmp, 0, l);
//                }
//                result = buffer.toString();
//            }
            InputStreamReader inputStreamReader = new InputStreamReader(entity.getContent());
            String s = inputStreamReader.getEncoding();
            BufferedReader bufferedReader = new BufferedReader(inputStreamReader);
            String line = "";
            while ((line = bufferedReader.readLine()) != null) {
                result += line + "\n";

            }
        }
        return result;
    }

}

