package com.zt.demo_test.controller;


import org.apache.http.*;
import org.apache.http.auth.AuthScope;
import org.apache.http.auth.NTCredentials;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.ResponseHandler;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.util.EntityUtils;
import org.springframework.stereotype.Controller;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


import javax.servlet.ServletInputStream;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.util.*;

/**
 * @Author: zt
 * @Date: 2018/7/6 11:09
 */
@Controller
public class TestController {


    private static final String SERVICE_URL = "http://wxtestbusiness.nabeluse.com";
    private static final String SERVER_HOST = "wxtestbusiness.nabeluse.com";


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
        String method = request.getMethod();
        if (request.getRequestURI().endsWith(".asmx") || request.getRequestURI().endsWith(".ashx")) {
            doWebService(request, response);
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
            response.setStatus(response1.getStatusLine().getStatusCode());
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
            if (!ObjectUtils.isEmpty(httpget)) {
                httpget.releaseConnection();
            }
            if (!ObjectUtils.isEmpty(httpclient)) {
                httpclient.close();
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

        String payloadStr = getPayloadStr(request);

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
            response.setStatus(response1.getStatusLine().getStatusCode());
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
            if (!ObjectUtils.isEmpty(out)) {
                out.close();
            }
            if (!ObjectUtils.isEmpty(httpPost)) {
                httpPost.releaseConnection();
            }
            if (ObjectUtils.isEmpty(httpclient)) {
                httpclient.close();
            }
        }
    }


    /**
     * 处理webService请求
     *
     * @param request
     */
    private void doWebService(HttpServletRequest request, HttpServletResponse servletResponse) {
        String payloadStr = getPayloadStr(request);
        DefaultHttpClient httpclient = new DefaultHttpClient();
        NTCredentials creds = new NTCredentials("test123@ad:test123");
        httpclient.getCredentialsProvider().setCredentials(AuthScope.ANY, creds);
        HttpHost target = new HttpHost("wxtestbusiness.nabeluse.com", 5555, "http");
        String queryStr = request.getQueryString();
        HttpPost httpPost = null;
        if (StringUtils.isEmpty(queryStr)) {
            httpPost = new HttpPost(request.getRequestURI());
        } else {
            httpPost = new HttpPost(request.getRequestURI() + "?" + queryStr);
        }
        httpPost.setHeader("Content-Type", "text/xml");
        StringEntity stringEntity = new StringEntity(payloadStr, ContentType.create("text/xml", "UTF-8"));
        httpPost.setEntity(stringEntity);
        PrintWriter out = null;
        try {
            ResponseHandler<String> responseHandler = new ResponseHandler<String>() {
                public String handleResponse(final HttpResponse response) throws ClientProtocolException, IOException {
                    servletResponse.setStatus(response.getStatusLine().getStatusCode());
                    System.err.println("webService请求：" + request.getRequestURI() + "?" + "状态码:  " + response.getStatusLine().getStatusCode());
                    HttpEntity entity = response.getEntity();
                    servletResponse.setContentType(entity.getContentType().getValue());
                    return entityToString(entity);
                }
            };
            String res = httpclient.execute(target, httpPost, responseHandler);
//            System.err.println(request.getRequestURI()+"：webService请求的返回值:"+res);
            out = servletResponse.getWriter();
            out.write(res);
            out.flush();

        } catch (IOException e) {
            e.printStackTrace();
        } finally {

            if (!ObjectUtils.isEmpty(out)) {
                out.close();
            }
            if (!ObjectUtils.isEmpty(httpPost)) {
                httpPost.releaseConnection();
            }
            if (!ObjectUtils.isEmpty(httpclient)) {
                httpclient.close();
            }
        }
    }


    /**
     * 获取XMLHttpRequest携带的请求参数
     *
     * @param req
     * @return
     */
    private String getPayloadStr(HttpServletRequest req) {

        String params = "";
        BufferedReader br = null;
        try {
            br = new BufferedReader(new InputStreamReader((ServletInputStream) req.getInputStream(), "utf-8"));
            StringBuilder sb = new StringBuilder("");
            String temp;
            while ((temp = br.readLine()) != null) {
                sb.append(temp).append("\n");
            }
            br.close();
            params = sb.toString();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return params;

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

    /**
     * payload串包装
     *
     * @param rquestXML
     * @return
     */
    private static String wrapSoapTag(String rquestXML) {
        StringBuilder sb = new StringBuilder();
        sb.append("<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\">");
        sb.append("<soapenv:Header/>");
        sb.append("<soapenv:Body>");
        sb.append("<ns2:sayByeBye xmlns:ns2=\"http://server.cxf.zgf.org/\">");
        sb.append("<arg0>");
        sb.append("<![CDATA[");
        sb.append(rquestXML.trim());
        sb.append("]]>");
        sb.append("</arg0>");
        sb.append("</ns2:sayByeBye>");
        sb.append("</soapenv:Body>");
        sb.append("</soapenv:Envelope>");
        return sb.toString();
    }

}

