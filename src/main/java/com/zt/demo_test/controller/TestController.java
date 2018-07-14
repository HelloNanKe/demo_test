package com.zt.demo_test.controller;


import org.apache.http.*;
import org.apache.http.auth.AuthScope;
import org.apache.http.auth.NTCredentials;
import org.apache.http.client.CookieStore;
import org.apache.http.client.HttpClient;
import org.apache.http.client.UserTokenHandler;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.impl.io.HttpResponseWriter;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.message.BufferedHeader;
import org.apache.http.protocol.BasicHttpContext;
import org.apache.http.protocol.HttpContext;
import org.apache.http.util.CharArrayBuffer;
import org.apache.http.util.EntityUtils;
import org.springframework.http.RequestEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.w3c.dom.Document;
import org.xml.sax.SAXException;


import javax.servlet.ServletInputStream;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import java.io.*;
import java.net.*;
import java.util.*;

/**
 * @Author: zt
 * @Date: 2018/7/6 11:09
 */
@Controller
public class TestController {


    private static final String SERVICE_URL = "http://wxtestbusiness.nabeluse.com";
    private static final String SERVER_HOST = "wxtestbusiness.nabeluse.com";

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
            if (!ObjectUtils.isEmpty(out)) {
                out.close();
            }
        }
    }

    @RequestMapping(value = "/NobelDev/**")
    public void nobeluse(HttpServletRequest request, HttpServletResponse response) {
        String s = request.getRequestURI();
        String method = request.getMethod();
        if (request.getRequestURI().endsWith(".asmx")) {
            doGet(response, request);
        } else if ("GET".equals(method)) {
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
//        System.err.println("GET请求的参数:" + queryStr);
        HttpGet httpget = null;
        if (StringUtils.isEmpty(queryStr)) {
            httpget = new HttpGet(request.getRequestURI());
        } else {
            httpget = new HttpGet(request.getRequestURI() + "?" + queryStr);
        }

        HttpResponse response1 = null;
        PrintWriter out = null;
        try {
            response1 = httpclient.execute(target, httpget);
            System.err.println("get请求：" + httpget.getURI() + "?" + queryStr + "  状态码:" + response1.getStatusLine().getStatusCode());
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
            if (!ObjectUtils.isEmpty(out)) {
                out.close();
            }

        }
    }


    /**
     * 处理post请求
     *
     * @param request
     * @param response
     */
    private void doPost(HttpServletRequest request, HttpServletResponse response) {

        String payloadStr = getStringFromStream(request);

        DefaultHttpClient httpclient = new DefaultHttpClient();
        NTCredentials creds = new NTCredentials("test123@ad:test123");
        httpclient.getCredentialsProvider().setCredentials(AuthScope.ANY, creds);
        HttpHost target = new HttpHost("wxtestbusiness.nabeluse.com", 5555, "http");

        String queryStr = "";
        queryStr = request.getQueryString();
        System.err.println("post的请求参数:" + queryStr);
        HttpPost httpPost = null;
        if (StringUtils.isEmpty(queryStr)) {
            httpPost = new HttpPost(request.getRequestURI());
        } else {
            httpPost = new HttpPost(request.getRequestURI() + "?" + queryStr);
            StringEntity stringEntity = new StringEntity(payloadStr, "utf-8");
            httpPost.setEntity(stringEntity);
        }
        HttpResponse response1 = null;
        PrintWriter out = null;
        try {
            response1 = httpclient.execute(target, httpPost);
            System.err.println("post请求：" + httpPost.getURI() + "?" + queryStr + "状态码:  " + response1.getStatusLine().getStatusCode());
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
            if (!ObjectUtils.isEmpty(out)) {
                out.close();
            }
        }
    }


    private String getStringFromStream(HttpServletRequest req) {
        ServletInputStream is;
        try {
            is = req.getInputStream();
            int nRead = 1;
            int nTotalRead = 0;
            byte[] bytes = new byte[10240];
            while (nRead > 0) {
                nRead = is.read(bytes, nTotalRead, bytes.length - nTotalRead);
                if (nRead > 0)
                    nTotalRead = nTotalRead + nRead;
            }
            String str = new String(bytes, 0, nTotalRead, "utf-8");
            return str;
        } catch (IOException e) {
            e.printStackTrace();
            return "";
        }
    }

    private String entityToString(HttpEntity entity) throws IOException {
        String result = "";
        if (entity != null) {
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

