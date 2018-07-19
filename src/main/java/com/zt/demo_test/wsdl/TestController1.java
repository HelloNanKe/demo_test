package com.zt.demo_test.wsdl;


import com.intersult.net.http.NtlmHandler;
import org.apache.commons.lang.CharSet;
import org.apache.http.*;
import org.apache.http.auth.AuthScheme;
import org.apache.http.auth.AuthSchemeRegistry;
import org.apache.http.auth.AuthScope;
import org.apache.http.auth.NTCredentials;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.ResponseHandler;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.InputStreamEntity;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.impl.io.HttpResponseWriter;
import org.apache.http.util.EntityUtils;
import org.apache.tomcat.util.digester.DocumentProperties;
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
import java.net.Authenticator;
import java.net.HttpURLConnection;
import java.net.PasswordAuthentication;
import java.net.URL;
import java.util.*;
import java.util.zip.GZIPInputStream;

/**
 * @Author: zt
 * @Date: 2018/7/6 11:09
 */
@Controller
@RequestMapping(value = "test/")
public class TestController1 {


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

   /* public static void main(String[] args) {
        try {
            NtlmHandler handler = new NtlmHandler();
            handler.setUsername("wxtestbusiness.nabeluse.com//test123@ad");
            handler.setPassword("test123");
            URL url = new URL(null,"http://wxtestbusiness.nabeluse.com:5555/NobelDev/AppWebServices/AppGridWebService.ashx?id=crmGrid&operation=Reset",handler);
            //第二步：打开一个通向服务地址的连接
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            //第三步：设置参数
            //3.1发送方式设置：POST必须大写
            connection.setRequestMethod("POST");
            //3.2设置数据格式：content-type
            connection.setRequestProperty("content-type", "text/xml;charset=utf-8");
            //3.3设置输入输出，因为默认新创建的connection没有读写权限，
            connection.setDoInput(true);
            connection.setDoOutput(true);
            //connection.setRequestProperty("Cookie", "ReqClientId=d8ba64b5-9cc3-423c-8217-b93b0213585b");
            //connection.setRequestProperty("Authorization", "Negotiate TlRMTVNTUAADAAAAGAAYAIoAAABIAUgBogAAAAAAAABYAAAAFAAUAFgAAAAeAB4AbAAAABAAEADqAQAAFYKI4goA7kIAAAAP7mFJ38EVmLK+GFNbfNSIFXQAZQBzAHQAMQAyADMAQABhAGQARABFAFMASwBUAE8AUAAtAEIARABSAFEAUQA1AEEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0WQnoCdPnUaQjEv6djb/hAEBAAAAAAAAHfVNxpgd1AEjvuszdim5tAAAAAACAAQAQQBEAAEACgBDAFIATQAwADEABAAWAGEAZAAuAG4AYQBiAGUAbAAuAGMAYwADACIAQwBSAE0AMAAxAC4AYQBkAC4AbgBhAGIAZQBsAC4AYwBjAAUAFgBhAGQALgBuAGEAYgBlAGwALgBjAGMABwAIAB31TcaYHdQBBgAEAAIAAAAIADAAMAAAAAAAAAABAAAAABAAAK+b2hdDwL/2QSnEjFWwl4EJ4DBsPZHuQ73TCK46nmzcCgAQAAAAAAAAAAAAAAAAAAAAAAAJAEAASABUAFQAUAAvAHcAeAB0AGUAcwB0AGIAdQBzAGkAbgBlAHMAcwAuAG4AYQBiAGUAbAB1AHMAZQAuAGMAbwBtAAAAAAAAAAAAAAAAAIX0ZE9ilzm0HOZv9wF2+fE=");
            //第四步：组织SOAP数据，发送请求
            String ss="<grid><sortColumns>name&#58;1</sortColumns><pageNum>1</pageNum><recsPerPage>50</recsPerPage><dataProvider>Microsoft.Crm.Application.Controls.ReportGridDataProvider</dataProvider><uiProvider>Microsoft.Crm.Application.Controls.GridUIProvider</uiProvider><cols/><max>-1</max><refreshAsync>False</refreshAsync><pagingCookie/><enableMultiSort>true</enableMultiSort><enablePagingWhenOnePage>true</enablePagingWhenOnePage><parameters><autorefresh>1</autorefresh><isGridHidden>false</isGridHidden><isGridFilteringEnabled>1</isGridFilteringEnabled><viewid>&#123;5579F470-EBBF-46D7-9EC6-25B4F50DCB8B&#125;</viewid><viewtype>1039</viewtype><RecordsPerPage>50</RecordsPerPage><viewTitle>&#21487;&#29992;&#25253;&#34920;</viewTitle><preview>1</preview><otc>9100</otc><otn>report</otn><entitydisplayname>&#25253;&#34920;</entitydisplayname><titleformat>&#123;0&#125; &#123;1&#125;</titleformat><entitypluraldisplayname>&#25253;&#34920;</entitypluraldisplayname><isWorkflowSupported>true</isWorkflowSupported><fetchXmlForFilters>&#60;fetch version&#61;&#34;1.0&#34; output-format&#61;&#34;xml-platform&#34; mapping&#61;&#34;logical&#34;&#62;&#60;entity name&#61;&#34;report&#34;&#62;&#60;attribute name&#61;&#34;name&#34; &#47;&#62;&#60;attribute name&#61;&#34;reporttypecode&#34; &#47;&#62;&#60;attribute name&#61;&#34;filename&#34; &#47;&#62;&#60;attribute name&#61;&#34;bodyurl&#34; &#47;&#62;&#60;attribute name&#61;&#34;modifiedon&#34; &#47;&#62;&#60;attribute name&#61;&#34;description&#34; &#47;&#62;&#60;attribute name&#61;&#34;reportid&#34; &#47;&#62;&#60;attribute name&#61;&#34;iscustomreport&#34; &#47;&#62;&#60;order attribute&#61;&#34;name&#34; descending&#61;&#34;false&#34; &#47;&#62;&#60;filter type&#61;&#34;and&#34;&#62;&#60;condition attribute&#61;&#34;languagecode&#34; operator&#61;&#34;eq-userlanguage&#34; &#47;&#62;&#60;&#47;filter&#62;&#60;link-entity name&#61;&#34;reportvisibility&#34; from&#61;&#34;reportid&#34; to&#61;&#34;reportid&#34; alias&#61;&#34;aa&#34;&#62;&#60;filter type&#61;&#34;and&#34;&#62;&#60;condition attribute&#61;&#34;visibilitycode&#34; operator&#61;&#34;eq&#34; value&#61;&#34;1&#34; &#47;&#62;&#60;&#47;filter&#62;&#60;&#47;link-entity&#62;&#60;&#47;entity&#62;&#60;&#47;fetch&#62;</fetchXmlForFilters><isFetchXmlNotFinal>False</isFetchXmlNotFinal><effectiveFetchXml>&#60;fetch distinct&#61;&#34;false&#34; no-lock&#61;&#34;false&#34; mapping&#61;&#34;logical&#34; page&#61;&#34;1&#34; count&#61;&#34;50&#34; returntotalrecordcount&#61;&#34;true&#34;&#62;&#60;entity name&#61;&#34;report&#34;&#62;&#60;attribute name&#61;&#34;name&#34; &#47;&#62;&#60;attribute name&#61;&#34;reporttypecode&#34; &#47;&#62;&#60;attribute name&#61;&#34;filename&#34; &#47;&#62;&#60;attribute name&#61;&#34;bodyurl&#34; &#47;&#62;&#60;attribute name&#61;&#34;modifiedon&#34; &#47;&#62;&#60;attribute name&#61;&#34;description&#34; &#47;&#62;&#60;attribute name&#61;&#34;reportid&#34; &#47;&#62;&#60;attribute name&#61;&#34;iscustomreport&#34; &#47;&#62;&#60;attribute name&#61;&#34;name&#34; &#47;&#62;&#60;attribute name&#61;&#34;reporttypecode&#34; &#47;&#62;&#60;attribute name&#61;&#34;modifiedon&#34; &#47;&#62;&#60;attribute name&#61;&#34;description&#34; &#47;&#62;&#60;attribute name&#61;&#34;filename&#34; &#47;&#62;&#60;attribute name&#61;&#34;bodyurl&#34; &#47;&#62;&#60;attribute name&#61;&#34;iscustomreport&#34; &#47;&#62;&#60;filter type&#61;&#34;and&#34;&#62;&#60;condition attribute&#61;&#34;languagecode&#34; operator&#61;&#34;eq-userlanguage&#34; &#47;&#62;&#60;&#47;filter&#62;&#60;order attribute&#61;&#34;name&#34; descending&#61;&#34;false&#34; &#47;&#62;&#60;link-entity name&#61;&#34;reportvisibility&#34; to&#61;&#34;reportid&#34; from&#61;&#34;reportid&#34; link-type&#61;&#34;inner&#34; alias&#61;&#34;aa&#34;&#62;&#60;filter type&#61;&#34;and&#34;&#62;&#60;condition attribute&#61;&#34;visibilitycode&#34; operator&#61;&#34;eq&#34; value&#61;&#34;1&#34; &#47;&#62;&#60;&#47;filter&#62;&#60;&#47;link-entity&#62;&#60;&#47;entity&#62;&#60;&#47;fetch&#62;</effectiveFetchXml><LayoutStyle>GridList</LayoutStyle><enableFilters>1</enableFilters><quickfind/><filter/><filterDisplay/></parameters></grid>";
            String soapXML = getXML("15226466316");
            OutputStream os = connection.getOutputStream();
            os.write("id=crmGrid&operation=Reset".getBytes());
            //第五步：接收服务端响应，打印
            int responseCode = connection.getResponseCode();
            System.out.println(responseCode);
            if(200 == responseCode){//表示服务端响应成功
                InputStream is = connection.getInputStream();
                InputStreamReader isr = new InputStreamReader(is);
                BufferedReader br = new BufferedReader(isr);

                StringBuilder sb = new StringBuilder();
                String temp = null;
                while(null != (temp = br.readLine())){
                    sb.append(temp);
                }
                System.out.println(sb.toString());

                is.close();
                isr.close();
                br.close();
            }

            os.close();

        } catch (Exception e) {
            e.printStackTrace();
        }

    }*/

    public static void main(String[] args) {
        String url = "/NobelDev/AppWebServices/AppGridWebService.ashx?id=crmGrid&operation=Reset";
        String useraName = "test123@ad";
        String pwd = "test123";
        String domain = "microsoft.com";
        String payload = "<grid><sortColumns>name&#58;1</sortColumns><pageNum>1</pageNum><recsPerPage>50</recsPerPage><dataProvider>Microsoft.Crm.Application.Controls.ReportGridDataProvider</dataProvider><uiProvider>Microsoft.Crm.Application.Controls.GridUIProvider</uiProvider><cols/><max>-1</max><refreshAsync>False</refreshAsync><pagingCookie/><enableMultiSort>true</enableMultiSort><enablePagingWhenOnePage>true</enablePagingWhenOnePage><parameters><autorefresh>1</autorefresh><isGridHidden>false</isGridHidden><isGridFilteringEnabled>1</isGridFilteringEnabled><viewid>&#123;5579F470-EBBF-46D7-9EC6-25B4F50DCB8B&#125;</viewid><viewtype>1039</viewtype><RecordsPerPage>50</RecordsPerPage><viewTitle>&#21487;&#29992;&#25253;&#34920;</viewTitle><preview>1</preview><otc>9100</otc><otn>report</otn><entitydisplayname>&#25253;&#34920;</entitydisplayname><titleformat>&#123;0&#125; &#123;1&#125;</titleformat><entitypluraldisplayname>&#25253;&#34920;</entitypluraldisplayname><isWorkflowSupported>true</isWorkflowSupported><fetchXmlForFilters>&#60;fetch version&#61;&#34;1.0&#34; output-format&#61;&#34;xml-platform&#34; mapping&#61;&#34;logical&#34;&#62;&#60;entity name&#61;&#34;report&#34;&#62;&#60;attribute name&#61;&#34;name&#34; &#47;&#62;&#60;attribute name&#61;&#34;reporttypecode&#34; &#47;&#62;&#60;attribute name&#61;&#34;filename&#34; &#47;&#62;&#60;attribute name&#61;&#34;bodyurl&#34; &#47;&#62;&#60;attribute name&#61;&#34;modifiedon&#34; &#47;&#62;&#60;attribute name&#61;&#34;description&#34; &#47;&#62;&#60;attribute name&#61;&#34;reportid&#34; &#47;&#62;&#60;attribute name&#61;&#34;iscustomreport&#34; &#47;&#62;&#60;order attribute&#61;&#34;name&#34; descending&#61;&#34;false&#34; &#47;&#62;&#60;filter type&#61;&#34;and&#34;&#62;&#60;condition attribute&#61;&#34;languagecode&#34; operator&#61;&#34;eq-userlanguage&#34; &#47;&#62;&#60;&#47;filter&#62;&#60;link-entity name&#61;&#34;reportvisibility&#34; from&#61;&#34;reportid&#34; to&#61;&#34;reportid&#34; alias&#61;&#34;aa&#34;&#62;&#60;filter type&#61;&#34;and&#34;&#62;&#60;condition attribute&#61;&#34;visibilitycode&#34; operator&#61;&#34;eq&#34; value&#61;&#34;1&#34; &#47;&#62;&#60;&#47;filter&#62;&#60;&#47;link-entity&#62;&#60;&#47;entity&#62;&#60;&#47;fetch&#62;</fetchXmlForFilters><isFetchXmlNotFinal>False</isFetchXmlNotFinal><effectiveFetchXml>&#60;fetch distinct&#61;&#34;false&#34; no-lock&#61;&#34;false&#34; mapping&#61;&#34;logical&#34; page&#61;&#34;1&#34; count&#61;&#34;50&#34; returntotalrecordcount&#61;&#34;true&#34;&#62;&#60;entity name&#61;&#34;report&#34;&#62;&#60;attribute name&#61;&#34;name&#34; &#47;&#62;&#60;attribute name&#61;&#34;reporttypecode&#34; &#47;&#62;&#60;attribute name&#61;&#34;filename&#34; &#47;&#62;&#60;attribute name&#61;&#34;bodyurl&#34; &#47;&#62;&#60;attribute name&#61;&#34;modifiedon&#34; &#47;&#62;&#60;attribute name&#61;&#34;description&#34; &#47;&#62;&#60;attribute name&#61;&#34;reportid&#34; &#47;&#62;&#60;attribute name&#61;&#34;iscustomreport&#34; &#47;&#62;&#60;attribute name&#61;&#34;name&#34; &#47;&#62;&#60;attribute name&#61;&#34;reporttypecode&#34; &#47;&#62;&#60;attribute name&#61;&#34;modifiedon&#34; &#47;&#62;&#60;attribute name&#61;&#34;description&#34; &#47;&#62;&#60;attribute name&#61;&#34;filename&#34; &#47;&#62;&#60;attribute name&#61;&#34;bodyurl&#34; &#47;&#62;&#60;attribute name&#61;&#34;iscustomreport&#34; &#47;&#62;&#60;filter type&#61;&#34;and&#34;&#62;&#60;condition attribute&#61;&#34;languagecode&#34; operator&#61;&#34;eq-userlanguage&#34; &#47;&#62;&#60;&#47;filter&#62;&#60;order attribute&#61;&#34;name&#34; descending&#61;&#34;false&#34; &#47;&#62;&#60;link-entity name&#61;&#34;reportvisibility&#34; to&#61;&#34;reportid&#34; from&#61;&#34;reportid&#34; link-type&#61;&#34;inner&#34; alias&#61;&#34;aa&#34;&#62;&#60;filter type&#61;&#34;and&#34;&#62;&#60;condition attribute&#61;&#34;visibilitycode&#34; operator&#61;&#34;eq&#34; value&#61;&#34;1&#34; &#47;&#62;&#60;&#47;filter&#62;&#60;&#47;link-entity&#62;&#60;&#47;entity&#62;&#60;&#47;fetch&#62;</effectiveFetchXml><LayoutStyle>GridList</LayoutStyle><enableFilters>1</enableFilters><quickfind/><filter/><filterDisplay/></parameters></grid>";
//        String payloadCompress="H4sIAAAAAAAEAO1YX2/bOAz/KgEK9M1xnMZNgwgGlrS5O2DbFesddq+qLadEZMmTpWz59qMkp1Ect2iAYRhwe7L590eRNBmFrBUUGWmk0kvJTSWaTNCKXV6kN/OExCGf1HTNPpoqQ/7+lSiWN/dM3SOdpSMShzQpqKb3Sm6hYCr7ALmSjSz1cKmq4bu65pBTDVIMl1JoJXkz/MRqxPsDI7oNLEl85IcYOMen9fbvXwdfgTXJUSHOSEW/ZREeyj7xQKVizdO7ZifybEV5w+yhAp5NA4j1UsoNMLRmgj5y9sFwDQ8YfaaVQZMut1W7d7afn5j4WzCXpFD9VIpgCsuhmcL8U6NlG4qtQUgSaOxB/4SiYCIrfdhHvFZjBRydIcqdQyysoxckZAvsKzbH5UUyvpqn6XS2mkxH0d1isYom17fTaHa3vI7G6WKySke3y8XNwmqmcxK3hs6B3tUsS0ZXM892JPnEcqmKo8bpsJztP6A5Q/xxMrmZzvE5m83G9pmO0yt8Xk1m41GL53VJrZilXI+2r0TqPJslIwSxb0iKTLlOswxhS6NB7wpoak53tvuzU4hTHaItYilVRXWbo5FPwMBTyT4doWILVnOjKH8L5KkmVvKzVJuSy68PprbnwGL5NuqTkJLp/Om/iq+k8jVuEOx6NHf8wRZp/GCQkzjseTIcuedAGl0bHfnAD/JvFY8wFm35XrGidY19c1Dhco3fIXfvyLUlQzx/noEfL3tVX4iOJtVawaPRrKPsKQt5eTGZvsHAe7c9l8viPNMSODsb71EWO6P4WTaVLKAEVtganGFWsCZXUGs4086nBIqzjKDJTaNlFVSra4ofL1ODZwd9RbMhM1EctYobVb0OS9erA1u8gzoVRadXcokebRb6sDkVa4Pj5FB9WTNFcW4edNiXyDRM7VV7Y3GkD+jA5CA20StNvYUGHoGj2PsslaxeqoOWL0koB9oECaCd8/+INB0ifT1RXrKl3ATGydsz5phB2jqSXqabUo5H4p5JhsNw1XI/Sr0CQfl+a/dICCtLlmvYsr0oHIU4ZDWIPJh1QXcKGXGZb3plrw7AQe26qpOuXBoRAKXtzFVMGyW01JQrtxA7enbM/x6r/6Ox+ivU7Cen8qe1yBvS/8svoR++ds/dai9vrtf2nUM5zioIYQ/2e+cd77zTjUXe0x3+Nn/QO7zw2Jvbe9xbJA657W1zvyST/QXzeWt+MZBvShAFXmB9xM8vt/6qgXQcXj5j90fBd0AQROYvEAAA";
        try {
            String res = postAuthenticatedResponse(url, domain, useraName, pwd, payload);
            System.err.println("获取到的返回内容:" + res);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static String postAuthenticatedResponse(String urlStr, String domain, String userName,
                                                    String password, String payload) throws IOException {
        DefaultHttpClient httpclient = new DefaultHttpClient();
        NTCredentials creds = new NTCredentials("test123@ad:test123");
        httpclient.getCredentialsProvider().setCredentials(AuthScope.ANY, creds);
        HttpHost target = new HttpHost("wxtestbusiness.nabeluse.com", 5555, "http");
        HttpPost httpPost = new HttpPost(urlStr);
        StringEntity stringEntity = new StringEntity(payload, ContentType.create("text/xml", "UTF-8"));
        httpPost.setEntity(stringEntity);
        httpPost.setHeader("Content-Type", "text/plain");

        HttpResponse httpResponse = httpclient.execute(target, httpPost);
        System.err.println("状态码:" + httpResponse.getStatusLine().getStatusCode());
//        httpclient.execute(target,httpPost);

        return httpResponse.getEntity().getContent().toString();
    }
}

