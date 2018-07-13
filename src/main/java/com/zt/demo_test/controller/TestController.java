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
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.w3c.dom.Document;
import org.xml.sax.SAXException;


import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import java.io.*;
import java.net.*;
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


    private static final String SERVICE_URL="http://wxtestbusiness.nabeluse.com";
    private static  final String SERVER_HOST="wxtestbusiness.nabeluse.com";

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
        String s = request.getRequestURI();

        String method = request.getMethod();
      /*  if(s.endsWith(".ashx")){
            queryWebService(request,response);
        } else*/ if ("GET".equals(method)) {
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
        System.err.println("GET请求的参数:" + queryStr);
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

        Map<String,String[]> paramMap=new HashMap<>();

        String queryStr = "";
        queryStr = request.getQueryString();
        HttpPost httpPost = null;
        if (StringUtils.isEmpty(queryStr)) {
            httpPost = new HttpPost(request.getRequestURI());
        } else {
            httpPost = new HttpPost(request.getRequestURI() + "?" + queryStr);
        }
        HttpResponse response1 = null;
        PrintWriter out = null;
        try {
            response1 = httpclient.execute(target, httpPost);
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
     * 处理c#中webservice接口的调用
     * @param request
     * @param response
     */
    private void queryWebService(HttpServletRequest request,HttpServletResponse response){

        String paramString=request.getQueryString();
        InputStream inputStream = null;
        Document document = null;
        URL url = null;
        HttpURLConnection urlConn = null;
        DocumentBuilderFactory documentBuilderFactory = null;
        DocumentBuilder documentBuilder = null;
        String serverURL="";
        String requestMethod=request.getMethod();

        try {
            documentBuilderFactory = DocumentBuilderFactory.newInstance();
            documentBuilderFactory.setNamespaceAware(true);
            documentBuilder = documentBuilderFactory.newDocumentBuilder();

            String userInfo="test123@ad:test123";

            if ("GET".equalsIgnoreCase(request.getMethod())) {// GET方式
                if(StringUtils.isEmpty(paramString)){
                    serverURL = SERVICE_URL +request.getRequestURI();
                }else {
                    serverURL = SERVICE_URL +request.getRequestURI()+ "?" + paramString;
                }
                System.err.println("【请求WebService地址：" + serverURL + "，请求方式：" + requestMethod.toUpperCase() + "】");
                url = new URL(serverURL);
                urlConn = (HttpURLConnection) url.openConnection();
                urlConn.setRequestProperty("Authorization",userInfo);
                urlConn.setRequestMethod("GET");
//                urlConn.setRequestProperty("Host", SERVICE_HOST);
                urlConn.setRequestProperty("Host", SERVER_HOST);
                urlConn.setConnectTimeout(10000);// （单位：毫秒）
                urlConn.setReadTimeout(10000);// （单位：毫秒）
                urlConn.connect();
                inputStream = urlConn.getInputStream();
                document = documentBuilder.parse(inputStream);
                PrintWriter out=response.getWriter();
                if (!StringUtils.isEmpty(document.toString())){
                    out.write(document.toString());
                    out.flush();
                    out.close();
                }
                inputStream.close();
                urlConn.disconnect();
            } else if ("POST".equalsIgnoreCase(request.getMethod())) {// POST方式
                if(StringUtils.isEmpty(paramString)){
                    serverURL = SERVICE_URL +request.getRequestURI();
                }else {
                    serverURL = SERVICE_URL +request.getRequestURI()+ "?" + paramString;
                }

                System.err.println("【请求WebService地址：" + serverURL+request.getRequestURI() + "，请求方式：" + requestMethod.toUpperCase() + "】");
                url = new URL(serverURL);
                urlConn = (HttpURLConnection) url.openConnection();
                urlConn.setRequestMethod("POST");
                urlConn.setRequestProperty("Authorization",userInfo);
                urlConn.setConnectTimeout(10000);// （单位：毫秒）
                urlConn.setReadTimeout(10000);// （单位：毫秒）
                urlConn.setDoOutput(true);
                byte[] byteArray = paramString.getBytes();
                urlConn.getOutputStream().write(byteArray, 0, byteArray.length);
                urlConn.getOutputStream().flush();
                urlConn.getOutputStream().close();
                inputStream = urlConn.getInputStream();
                document = documentBuilder.parse(inputStream);
                PrintWriter out=response.getWriter();
                if (!StringUtils.isEmpty(document.toString())){
                    out.write(document.toString());
                    out.flush();
                    out.close();
                }


            } else {
                System.err.println(">>>>WebService请求方式错误！");
            }
        } catch (ParserConfigurationException e) {
            System.err.println("请求Webservice异常：解析配置文件异常！" + e.getMessage());
            e.printStackTrace();
            document = null;
        } catch (MalformedURLException e) {
            System.err.println("请求Webservice异常：URL协议错误！" + e.getMessage());
            e.printStackTrace();
            document = null;
        } catch (ConnectException e) {
            System.err.println("请求WebService连接超时！" + e.getMessage());
            e.printStackTrace();
            document = null;
        } catch (SocketTimeoutException e) {
            System.err.println("请求WebService连接超时！" + e.getMessage());
            e.printStackTrace();
            document = null;
        } catch (IOException e) {
            if (urlConn != null) {
                try {
                    int errorCode = urlConn.getResponseCode();
                    String errorMessage = "请求Webservice异常!服务器返回状态码:";
                    switch (errorCode) {
                        case 400:
                            System.err.println(errorMessage + "400，错误的请求！");
                            break;
                        case 403:
                            System.err.println(errorMessage + "403，服务器拒绝访问！");
                            break;
                        case 404:
                            System.err.println(errorMessage + "404，请求地址不存在！");
                            break;
                        case 500:
                            System.err.println(errorMessage + "500，WebService服务器内部错误！");
                            break;
                        case 503:
                            System.err.println(errorMessage + "503，WebService服务不可用！");
                            break;
                        default:
                            System.err.println(errorMessage + errorCode);
                            break;
                    }
                } catch (IOException e1) {
                    e1.printStackTrace();
                }
            }
            document = null;
        } catch (SAXException e) {
            System.err.println("请求Webservice异常：SAXException！" + e.getMessage());
            e.printStackTrace();
            document = null;
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

