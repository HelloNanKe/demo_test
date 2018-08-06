package com.zt.demo_test.controller.crmController;

import org.apache.http.Header;
import org.apache.http.HttpEntity;
import org.apache.http.HttpHost;
import org.apache.http.HttpResponse;
import org.apache.http.auth.AuthScope;
import org.apache.http.auth.NTCredentials;
import org.apache.http.client.ResponseHandler;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.DefaultHttpClient;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.stereotype.Controller;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.ServletInputStream;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;

/**
 * @Author: zt
 * @Date: 2018/7/6 11:09
 */
@Controller
@RequestMapping(value = "/crm")
public class TestController {

    //目标应用的域名或ip
    private static final String SERVER_HOST = "wxtestbusiness.nabeluse.com";
    //    目标应用的端口
    private static final int SERVER_PORT = 5555;
    //    目标应用的协议
    private static final String SERVER_PROTOCO = "http";
    //    用户名密码的组装
        private static final String USERPWD = "test123@ad:test123";




    @RequestMapping(value = "/crmAuth")
    public void crmAuth(HttpServletRequest request, HttpServletResponse response) {
        DefaultHttpClient httpclient = new DefaultHttpClient();
        NTCredentials creds = new NTCredentials(USERPWD);
        httpclient.getCredentialsProvider().setCredentials(AuthScope.ANY, creds);
        HttpHost target = new HttpHost(SERVER_HOST, SERVER_PORT, SERVER_PROTOCO);
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
            if(!ObjectUtils.isEmpty(entity1)){
                response.setContentType(entity1.getContentType().getValue());
            }
            Document doc=Jsoup.parse(res);
            //doc.body().getElementById("crmTopBar").html(PAGE_BAR_HTML);
            //doc.body().getElementById("crmMasthead").html(PAGE_TITLE_HTML);
            //doc.body().append(PAGE_SELECT_HTML);
            res=doc.outerHtml();
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

    @RequestMapping(value = "**/**")
    public void nobeluse(HttpServletRequest request, HttpServletResponse response) {
        String method = request.getMethod();
        if (request.getRequestURI().endsWith(".asmx")) {
            System.out.println(method + "-------"+request.getRequestURI());
            doAsmxWebService(request, response);
        } else if (request.getRequestURI().endsWith(".ashx")) {
            System.out.println(method + "++++++++"+request.getRequestURI());
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
        NTCredentials creds = new NTCredentials(USERPWD);
        httpclient.getCredentialsProvider().setCredentials(AuthScope.ANY, creds);
        HttpHost target = new HttpHost(SERVER_HOST, SERVER_PORT, SERVER_PROTOCO);
//        HttpHost target = new HttpHost("192.168.1.190", 5555, "http");
//        System.err.println("GET请求的参数:" + queryStr);
        HttpGet httpget = null;
        if (StringUtils.isEmpty(queryStr)) {
            httpget = new HttpGet(request.getRequestURI());
        } else {
            httpget = new HttpGet(request.getRequestURI() + "?" + queryStr);
        }

        if (request.getRequestURI().contains("js.aspx")) {
            httpget.setHeader("Referer","http://wxtestbusiness.nabeluse.com:5555/NobelDev/main.aspx");
        }

        if (request.getRequestURI().contains("css.aspx")) {
            httpget.setHeader("Referer","http://wxtestbusiness.nabeluse.com:5555/NobelDev/main.aspx");
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


            if (!ObjectUtils.isEmpty(entity1)) {
                response.setContentType(entity1.getContentType().getValue());
            }

            response.setHeader("Pragma", "No-cache");
            response.setHeader("Cache-Control", "no-cache");
            response.setDateHeader("Expires", 0);
            out = response.getWriter();
            out.write(res);
            out.flush();

            if (request.getRequestURI().contains("RibbonLayout.js.aspx")) {
                httpget.setHeader("Referer","http://wxtestbusiness.nabeluse.com:5555/NobelDev/main.aspx");
            }
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
        NTCredentials creds = new NTCredentials(USERPWD);
        httpclient.getCredentialsProvider().setCredentials(AuthScope.ANY, creds);
        HttpHost target = new HttpHost(SERVER_HOST, SERVER_PORT, SERVER_PROTOCO);
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
            if (!ObjectUtils.isEmpty(entity1)) {
                response.setContentType(entity1.getContentType().getValue());
            }

            response.setHeader("Pragma", "No-cache");
            response.setHeader("Cache-Control", "no-cache");
            response.setDateHeader("Expires", 0);
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
        NTCredentials creds = new NTCredentials(USERPWD);
        httpclient.getCredentialsProvider().setCredentials(AuthScope.ANY, creds);
        HttpHost target = new HttpHost(SERVER_HOST, SERVER_PORT, SERVER_PROTOCO);
        String queryStr = request.getQueryString();

        HttpPost httpPost = null;
        HttpGet httpGet = null;


        if (request.getMethod().equals("POST")) {
            if (StringUtils.isEmpty(queryStr)) {
                httpPost = new HttpPost(request.getRequestURI());
            } else {
                httpPost = new HttpPost(request.getRequestURI() + "?" + queryStr);
            }
            StringEntity stringEntity = new StringEntity(payloadStr, ContentType.create("text/plain", "UTF-8"));
            httpPost.setEntity(stringEntity);

            httpPost.setHeader("Content-Type", "text/plain");
            httpPost.setHeader("Referer", "http://wxtestbusiness.nabeluse.com:5555/NobelDev/_root/homepage.aspx?etc=9100&pagemode=iframe&sitemappath=WorkPlace%7cMyWork%7cnav_reports");
            PrintWriter out = null;
            try {

                ResponseHandler<String> responseHandler = response -> {
                    servletResponse.setStatus(response.getStatusLine().getStatusCode());
                    System.err.println("webService请求：" + request.getRequestURI() + "?" + "状态码:  " + response.getStatusLine().getStatusCode());
                    HttpEntity entity = response.getEntity();
                    servletResponse.setContentType(entity.getContentType().getValue());
                    return entityToString(entity);
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
        } else if (request.getMethod().equals("GET")) {
            if (StringUtils.isEmpty(queryStr)) {
                httpGet = new HttpGet(request.getRequestURI());
            } else {
                httpGet = new HttpGet(request.getRequestURI() + "?" + queryStr);
            }

            //httpGet.setHeader("Content-Type", "text/plain");
            httpGet.setHeader("Referer", "http://wxtestbusiness.nabeluse.com:5555/NobelDev/main.aspx");
            PrintWriter out = null;
            HttpResponse response1 = null;
            try {
                response1 = httpclient.execute(target, httpGet);
                servletResponse.setStatus(response1.getStatusLine().getStatusCode());
                HttpEntity entity1 = response1.getEntity();
                String res = entityToString(entity1);

                if (entity1 != null) {
                    entity1.consumeContent();
                }

                if (!ObjectUtils.isEmpty(entity1)) {
                    servletResponse.setContentType(entity1.getContentType().getValue());
                }

                out = servletResponse.getWriter();
                out.write(res);
                out.flush();
            } catch (IOException e) {
                e.printStackTrace();
            } finally {
                if (!ObjectUtils.isEmpty(out)) {
                    out.close();
                }
                if (!ObjectUtils.isEmpty(httpclient)) {
                    httpclient.close();
                }
            }
        }

    }


    /**
     * 处理webService请求
     *
     * @param request
     */
    private void doAsmxWebService(HttpServletRequest request, HttpServletResponse servletResponse) {
        System.out.println(request.getMethod() + "---" + request.getRequestURI());
        String payloadStr = getPayloadStr(request);
        DefaultHttpClient httpclient = new DefaultHttpClient();
        NTCredentials creds = new NTCredentials(USERPWD);
        httpclient.getCredentialsProvider().setCredentials(AuthScope.ANY, creds);
        HttpHost target = new HttpHost(SERVER_HOST, SERVER_PORT, SERVER_PROTOCO);
        String queryStr = request.getQueryString();

        HttpPost httpPost = null;
        if (StringUtils.isEmpty(queryStr)) {
            httpPost = new HttpPost(request.getRequestURI());
        } else {
            httpPost = new HttpPost(request.getRequestURI() + "?" + queryStr);
        }

        httpPost.setHeader("Content-Type", "text/xml; charset=UTF-8");
        httpPost.setHeader("Referer", "http://wxtestbusiness.nabeluse.com:5555/NobelDev/main.aspx");
        if (request.getRequestURI().contains("RecentlyViewedWebService")) {
            httpPost.setHeader("SOAPAction", "http://schemas.microsoft.com/crm/2009/WebServices/RetrieveRecentlyViewedData");
        }

        StringEntity stringEntity = new StringEntity(payloadStr, ContentType.create("text/xml", "UTF-8"));
        httpPost.setEntity(stringEntity);




        PrintWriter out = null;
        HttpResponse response1 = null;
        try {
            response1 = httpclient.execute(target, httpPost);
            servletResponse.setStatus(response1.getStatusLine().getStatusCode());
            HttpEntity entity1 = response1.getEntity();
            String res = entityToString(entity1);
            if (entity1 != null) {
                entity1.consumeContent();
            }
            if (!ObjectUtils.isEmpty(entity1)) {
                servletResponse.setContentType(entity1.getContentType().getValue());
            }

            servletResponse.setHeader("Pragma", "No-cache");
            servletResponse.setHeader("Cache-Control", "no-cache");
            servletResponse.setDateHeader("Expires", 0);
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
            InputStreamReader inputStreamReader = new InputStreamReader(entity.getContent(),"utf-8");
            String s = inputStreamReader.getEncoding();
            BufferedReader bufferedReader = new BufferedReader(inputStreamReader);
            String line = "";
            while ((line = bufferedReader.readLine()) != null) {
                if (line.contains("RibbonLayout.js.aspx")||line.contains("crmTopBar")) {
                    System.out.println(line+"---------------------------------->>>>>>>>>>>>");
                   String ss=line+"11";
                }
                result += line + "\n";

            }
            inputStreamReader.close();
            bufferedReader.close();
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

    private static final String PAGE_BAR_HTML="<div id=\"crmAppMessageBar\" class=\"crmAppMessageBar\" style=\"height: 32px;\">\n" +
            "\t\t\t\t\t\t\t\t\t<span class=\"crmAppMessageBarLeftBorder\"><img id=\"messageBarLeftBorder\" src=\"/_imgs/imagestrips/transparent_spacer.gif\" class=\"ms-crm-ImageStrip-msgbar_border\" alt=\"\"></span>\n" +
            "\t\t\t\t\t\t\t\t\t<span class=\"crmAppMessageBarRightBorder\"><img id=\"messageBarRightBorder\" src=\"/_imgs/imagestrips/transparent_spacer.gif\" class=\"ms-crm-ImageStrip-msgbar_border\" alt=\"\"></span>\n" +
            "\t\t\t\t\t\t\t\t\t<table cellpadding=\"0\" cellspacing=\"0\" class=\"crmAppMessageBarMessageTable\">\n" +
            "\t\t\t\t\t\t\t\t\t\t<tbody><tr class=\"crmAppMessageBarRow\">\n" +
            "\t\t\t\t\t\t\t\t\t\t\t<td nowrap=\"\" class=\"crmAppMessageBarIcon\"><img id=\"messageBarIcon\" src=\"/_imgs/messagebar/msgbar_icn_info.png\" class=\"ms-crm-ImageStrip-msgbar_icn_info\" alt=\"\"></td>\n" +
            "\t\t\t\t\t\t\t\t\t\t\t<td nowrap=\"\" class=\"crmAppMessageBarTitle\"><span id=\"crmAppMessageBarTitle\">Dynamics 365 应用程序</span></td>\n" +
            "\t\t\t\t\t\t\t\t\t\t\t<td class=\"crmAppMessageBarMessage\">\n" +
            "\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"crmAppMessageBarMessageDiv\"><label id=\"crmAppMessageBarHyperlink\" class=\"crmAppMessageBarHyperlink\">使用适用于手机、平板电脑、Outlook 等设备或软件的应用程序在外出时查看 Dynamics 365 信息!</label></div>\n" +
            "\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
            "\t\t\t\t\t\t\t\t\t\t\t<td nowrap=\"\" class=\"crmAppMessageBarButtonContainer\" style=\"margin-top: 5px;\">\n" +
            "\t\t\t\t\t\t\t\t\t\t\t\t<a id=\"crmAppMessageBarButton\" class=\"crmAppMessageBarButton\" href=\"#\" target=\"_self\">\n" +
            "\t\t\t\t\t\t\t\t\t\t\t\t\t<span id=\"crmAppMessageBarButtonText\" class=\"ms-crm-msgbar_button_cold\">获取 Dynamics 365 应用程序</span>\n" +
            "\t\t\t\t\t\t\t\t\t\t\t\t</a>\n" +
            "\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
            "\t\t\t\t\t\t\t\t\t\t\t<td nowrap=\"\">\n" +
            "\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"crmAppMessageBarSpacer\"></div>\n" +
            "\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
            "\t\t\t\t\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t\t\t\t</tbody></table>\n" +
            "\t\t\t\t\t\t\t\t\t<span class=\"crmAppMessageBarCloseButtonContainer\">\n" +
            "\t\t\t\t\t\t\t\t\t\t<a id=\"crmAppMessageBarCloseButton\" class=\"crmAppMessageBarCloseButton\" href=\"#\" title=\"清除此消息\">\n" +
            "\t\t\t\t\t\t\t\t\t\t\t<img id=\"crmAppMessageBarCloseButtonImage\" src=\"/_imgs/imagestrips/transparent_spacer.gif\" class=\"ms-crm-ImageStrip-msgbar_close_button_cold\" alt=\"\">\n" +
            "\t\t\t\t\t\t\t\t\t\t</a>\n" +
            "\t\t\t\t\t\t\t\t\t</span>\n" +
            "\t\t\t\t\t\t\t</div>\n" +
            "<div id=\"crmRibbonManager\" currentribbonelement=\"commandContainer0\" style=\"height: 62px; display: block; visibility: visible;\"><div id=\"commandContainer0\" style=\"display: inline;\"><ul role=\"application\" class=\"ms-crm-CommandBar-Menu\"><li tabindex=\"-1\" class=\"ms-crm-CommandBarItem ms-crm-CommandBar-Menu ms-crm-CommandBar-SplitButton\" title=\"通过\u200B\u200B电子邮件\u200B\u200B发送链接 \n" +
            "\n" +
            "发送指向电子邮件中选定记录的链接。\" id=\"report|NoRelationship|HomePageGrid|Mscrm.HomepageGrid.report.Send\" command=\"report|NoRelationship|HomePageGrid|Mscrm.SendShortcutSelected.AlwaysEnabled\" style=\"white-space: pre-line; display: inline-block;\"><span tabindex=\"-1\" class=\"ms-crm-Menu-Label ms-crm-CommandBar-Button\" style=\"max-width:200px\"><a tabindex=\"0\" class=\"ms-crm-Menu-Label\" onclick=\"return false\"><img tabindex=\"-1\" class=\"ms-crm-ImageStrip-EmailLink_16 ms-crm-commandbar-image16by16\" src=\"/_imgs/imagestrips/transparent_spacer.gif\" style=\"vertical-align:top\"> <span tabindex=\"-1\" class=\"ms-crm-CommandBar-Menu\" style=\"max-width:150px\" command=\"report|NoRelationship|HomePageGrid|Mscrm.SendShortcutSelected.AlwaysEnabled\"> 通过\u200B\u200B电子邮件\u200B\u200B发送链接 </span><div class=\"ms-crm-div-NotVisible\"> 发送指向电子邮件中选定记录的链接。 </div> <span class=\"splitButtonSplitter\"><img tabindex=\"-1\" class=\"ms-crm-ImageStrip-commandbar_divider\" src=\"/_imgs/imagestrips/transparent_spacer.gif\" alt=\"\"></span></a><a tabindex=\"0\" class=\"ms-crm-Menu-Label-Flyout\" title=\"通过\u200B\u200B电子邮件\u200B\u200B发送链接 \n" +
            "\n" +
            "发送指向电子邮件中选定记录的链接。\" onclick=\"return false\" role=\"flyout\"><img tabindex=\"-1\" class=\"flyoutAnchorArrow\" src=\"/_imgs/commandbarmenudown.png\" id=\"\" role=\"flyout\" alt=\"\"> </a> </span> </li><li tabindex=\"-1\" class=\"ms-crm-CommandBarItem ms-crm-CommandBar-Menu ms-crm-CommandBar-FlyoutAnchor\" title=\"图表 \n" +
            "\n" +
            "显示图表以及视图。\" id=\"report|NoRelationship|HomePageGrid|Mscrm.HomepageGrid.report.Charts\" command=\"report|NoRelationship|HomePageGrid|Mscrm.Charts.Flyout\" style=\"white-space: pre-line; display: inline-block;\"><span tabindex=\"-1\" class=\"ms-crm-CommandBar-Button ms-crm-Menu-Label\" style=\"max-width:200px\"><a tabindex=\"0\" class=\"ms-crm-Menu-Label\" onclick=\"return false\"><img tabindex=\"-1\" class=\"ms-crm-ImageStrip-ChartPane_16 ms-crm-commandbar-image16by16\" src=\"/_imgs/imagestrips/transparent_spacer.gif\" style=\"vertical-align:top\"> <span tabindex=\"-1\" class=\"ms-crm-CommandBar-Menu\" style=\"max-width:150px\" command=\"report|NoRelationship|HomePageGrid|Mscrm.Charts.Flyout\"> 图表窗格\u200B\u200B </span><div class=\"ms-crm-div-NotVisible\"> 显示图表以及视图。 </div> <img tabindex=\"-1\" class=\"flyoutAnchorArrow\" src=\"/_imgs/commandbarmenudown.png\" id=\"\" alt=\"\"> </a> </span> </li><li class=\"ms-crm-CommandBarItem ms-crm-CommandBar-Menu ms-crm-CommandBar-MoreMenu\" id=\"moreCommands\" title=\"更多命令\" style=\"display: none;\"><span class=\"ms-crm-Menu-Label ms-crm-More-Menu-Label\"><a onclick=\"return false\" tabindex=\"0\" class=\"ms-crm-Menu-Label\"><img tabindex=\"-1\" alt=\"更多命令\" src=\"/_imgs/more_16.png\" class=\"ms-crm-moreCommand-image\"></a></span></li></ul></div></div>\n" +
            "\n" +
            "<div id=\"contextualActionBar\" style=\"top: 32px;\">\n" +
            "<a title=\"查看此记录及其父记录和子记录的层次结构。\" tabindex=\"0\" class=\"contextualAction\" id=\"hierarchyButton\" href=\"javascript:ShowHierarchicalPage();\" style=\"display:none\">\n" +
            "<img src=\"/_imgs/imagestrips/transparent_spacer.gif?ver=-81851465\" alt=\"查看此记录及其父记录和子记录的层次结构。\" title=\"查看此记录及其父记录和子记录的层次结构。\" class=\"ms-crm-ImageStrip-hierarchytoolbar\">\n" +
            "</a>\n" +
            "<span id=\"recordSetToolBarProxy\" class=\"ms-crm-Form-RecNav recordSetControlProxy contextualAction\" style=\"display:none\">\n" +
            "<a class=\"recnav-dropdown ms-crm-recnav-default\" style=\"display:none\" title=\"\">\n" +
            "<span class=\"recnav-dropdown recnav-dropdown-disabled\">\n" +
            "</span><img align=\"top\" src=\"/_imgs/imagestrips/transparent_spacer.gif?ver=-81851465\" alt=\"\" class=\"recnav-dropdown ms-crm-ImageStrip-disabled_arrow\"></a><div class=\"recordSetControlProxy contextualAction\" title=\"上一条记录(Ctrl+<)\"><a class=\"recnav-up ms-crm-recnav-default\" aria-label=\"上一条记录(Ctrl+<)\" tabindex=\"0\"> \n" +
            "<img align=\"top\" src=\"/_imgs/imagestrips/transparent_spacer.gif\" title=\"上一条记录(Ctrl+<)\" alt=\"上一条记录(Ctrl+<)\" class=\"recnav-up ms-crm-ImageStrip-Up_Disabled_proxy\"></a></div>\n" +
            "<div class=\"recordSetControlProxy contextualAction\" title=\"下一条记录(Ctrl+>)\"><a class=\"recnav-down ms-crm-recnav-default\" aria-label=\"下一条记录(Ctrl+>)\" tabindex=\"0\">\n" +
            "<img align=\"top\" src=\"/_imgs/imagestrips/transparent_spacer.gif\" title=\"下一条记录(Ctrl+>)\" alt=\"下一条记录(Ctrl+>)\" class=\"recnav-down ms-crm-ImageStrip-Down_Disabled_proxy\"></a></div></span>\n" +
            "<div title=\"弹出\" onclick=\"popOutSourceUrl(document.getElementById('popoutButton').getAttribute('sourceUrl')); return false;\" class=\"contextualAction\" id=\"popoutButton\" style=\"display: none\">\n" +
            "<a tabindex=\"0\" aria-label=\"弹出\" href=\"#\">\n" +
            "<img alt=\"弹出\" title=\"弹出\" src=\"/_imgs/imagestrips/transparent_spacer.gif?ver=-81851465\" class=\"ms-crm-ImageStrip-popout\">\n" +
            "</a>\n" +
            "</div>\n" +
            "<div title=\"关闭\" onclick=\"closeSourceUrl(document.getElementById('closeButton')); return false;\" class=\"contextualAction\" id=\"closeButton\" style=\"display: none\">\n" +
            "<a tabindex=\"0\" aria-label=\"关闭\" href=\"#\">\n" +
            "<img alt=\"关闭\" title=\"关闭\" src=\"/_imgs/Cancel_16.png\" class=\"closeButton\">\n" +
            "</a>\n" +
            "</div>\n" +
            "</div>";

    private static final String PAGE_TITLE_HTML="<div id=\"crmMasthead\" tabindex=\"-1\">\n" +
            "\n" +
            "\n" +
            "<div class=\"navStatusArea\" id=\"navStatusArea\"></div>\n" +
            "\n" +
            "<div class=\"navigationControl\" id=\"navBar\" role=\"navigation\"><div id=\"navTabGroupDiv\" class=\"navTabGroup\"><span id=\"TabnavTabLogoTextId\" class=\"navTabButton navTabThemeButton\" title=\"Microsoft Dynamics 365\n" +
            "\n" +
            "转到主页。\"><a title=\"Microsoft Dynamics 365\n" +
            "\n" +
            "转到主页。\" class=\"navTabButtonLink\" onkeypress=\"return true;\" onclick=\"return false;\" href=\"javascript:;\" unselectable=\"on\"><span id=\"navTabLogoTextId\" class=\"navTabLogoTextThemeImage\"><img alt=\"Microsoft Dynamics 365\" unselectable=\"on\" src=\"/_static/oobwebresource/Theme_NavBarLogo.png\"></span></a></span><span id=\"TabnavTabLogoTextId_divider\" class=\"navTabButton navTabButtonModuleSwitcher\" title=\"Microsoft Dynamics 365\n" +
            "\n" +
            "转到主页。_divider\"><span class=\"navTabButtonImageContainer\" unselectable=\"on\"><img class=\"navTabDivider\" alt=\"|\" unselectable=\"on\" src=\"/_imgs/NavBar/NavBarDivider.png\"></span></span><span class=\"navTabButton navHomeButton navHomeMargin navTabHidden\" id=\"TabCRMHome\" title=\"Microsoft Dynamics 365\n" +
            "\n" +
            "转到主页。\"><a title=\"Microsoft Dynamics 365\n" +
            "\n" +
            "转到主页。\" class=\"navTabButtonLink homeMarginRemover\" onkeypress=\"return true;\" onclick=\"return false;\" href=\"javascript:;\" unselectable=\"on\"><span class=\"navTabButtonImageContainer\" unselectable=\"on\"><img class=\"tabHomeButtonImage\" alt=\"Microsoft Dynamics 365\n" +
            "\n" +
            "转到主页。\" unselectable=\"on\" src=\"/_imgs/NavBar/Invisible.gif\"></span></a></span><span class=\"navBarTopLevelItem\" unselectable=\"on\"><span id=\"TabWorkPlace-main\" class=\"navTabButton navTabButtonLeft AreaNodePadding\" title=\"工作区\"><a class=\"navTabButtonLink\" onkeypress=\"return true;\" onclick=\"return true;\" href=\"javascript:;\" unselectable=\"on\"><span class=\"navTabButtonLabel\" unselectable=\"on\"><span class=\"navTabButtonText navTabSplitButtonTextCss navTabButtonAreaText\">工作区</span></span></a></span><span id=\"TabWorkPlace\" name=\"TabHome\" class=\"navTabButton navTabButtonRight SubAreaNodePadding\" title=\"工作区\"><a class=\"navTabButtonLink\" onkeypress=\"return true;\" onclick=\"return true;\" href=\"javascript:;\" unselectable=\"on\" title=\"工作区\"><span class=\"navTabButtonImageContainer\" unselectable=\"on\"><span class=\"navTabButtonArrowDown\"></span></span></a></span><span id=\"TabWorkPlace_splitter\" class=\"navTabButton navTabSplitterSpan\"><span class=\"navTabButtonImageContainer\" unselectable=\"on\"><img src=\"/_imgs/NavBar/NavBarDivider.png\" alt=\"|\" class=\"navTabSplitter\"></span></span></span><span class=\"navBarTopLevelItem\" unselectable=\"on\"><span id=\"Tabnav_reports-main\" class=\"navTabButton navTabButtonLeft\" title=\"报表\"><a class=\"navTabButtonLink\" onkeypress=\"return true;\" onclick=\"return true;\" href=\"javascript:;\" unselectable=\"on\"><span class=\"navTabButtonLabel\" unselectable=\"on\"><span class=\"navTabButtonText navTabSplitButtonTextCss navTabButtonSubAreaText\">报表</span></span></a></span><span id=\"Tabnav_reports\" name=\"\" class=\"navTabButton navTabButtonRight\" title=\"报表\"><a class=\"navTabButtonLink\" onkeypress=\"return true;\" onclick=\"return true;\" href=\"javascript:;\" unselectable=\"on\" title=\"报表\"><span class=\"navTabButtonImageContainer\" unselectable=\"on\"><span class=\"navTabButtonArrowRight\"></span></span></a></span></span><div class=\"navFloatRight\"><span valign=\"top\" id=\"SearchNode\" class=\"navTabButton navBarSearchButton\" nowrap=\"\"><a title=\"开始搜索\" tabindex=\"0\" class=\"ms-crm-FindButton\" style=\"width: 37px\" id=\"\" href=\"#\" target=\"_self\"><span class=\"navTabButtonImageContainer\" unselectable=\"on\"><span title=\"开始搜索\" class=\"navImageFlipHorizontal\"></span></span></a></span><span class=\"navTabButton\" id=\"TabGlobalMruNode\" title=\"最近查看的项\n" +
            "\n" +
            "将快捷方式放回当前工作和固定的收藏夹。\">\n" +
            "\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"navTabButtonLink\" href=\"#\" unselectable=\"on\" title=\"最近查看的项\n" +
            "\n" +
            "将快捷方式放回当前工作和固定的收藏夹。\">\n" +
            "\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"navTabButtonImageContainer\" unselectable=\"on\">\n" +
            "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span id=\"navTabGlobalMruImage_TabGlobalMruNode\" class=\"globalMruButtonImage\" unselectable=\"on\"></span>\n" +
            "\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n" +
            "\t\t\t\t\t\t\t\t\t\t\t\t</a>\n" +
            "\t\t\t\t\t\t\t\t\t\t\t</span><span class=\"navTabButton navTabQuickCreateMargin\" id=\"TabGQC\" title=\"新建\n" +
            "\n" +
            "添加信息和活动。\"><a title=\"新建\n" +
            "\n" +
            "添加信息和活动。\" tabindex=\"0\" class=\"navTabButtonLink\" onkeypress=\"return true;\" onclick=\"return true;\" href=\"#\" unselectable=\"on\"><span class=\"navTabButtonImageContainer\" unselectable=\"on\"><span id=\"navTabGlobalCreateImage\" class=\"globalCreateButtonImage\" unselectable=\"on\"></span></span><span id=\"\" class=\"navTabButtonLabel\" unselectable=\"on\"><span class=\"navTabButtonText\"></span></span></a></span><span class=\"navTabButton navHomeButton navAdvSearch\" id=\"AdvFindSearch\" title=\"高级查找\n" +
            "\n" +
            "创建高级搜索查询。\"><a class=\"navTabButtonLink\" onkeypress=\"return true;\" onclick=\"return true;\" tabindex=\"0\" title=\"高级查找\n" +
            "\n" +
            "创建高级搜索查询。\" href=\"#\" unselectable=\"on\"><span class=\"navTabButtonImageContainer\" unselectable=\"on\"><span unselectable=\"on\" id=\"advancedFindImage\"></span></span></a></span><span id=\"TabButtonSettingsId_divider\" class=\"navTabButton navTabButtonModuleSwitcher\"><span class=\"navTabButtonImageContainer\" unselectable=\"on\"><img class=\"navTabDivider\" alt=\"|\" unselectable=\"on\" src=\"/_imgs/NavBar/NavBarDivider.png\"></span></span><span id=\"TabButtonSettingsId\" title=\"设置\n" +
            "\n" +
            "设置个人选项并查看隐私声明。查看列表时打印记录。\" class=\"navTabButton navTabButtonSettings navBarSpacing\"><a tabindex=\"0\" class=\"navTabButtonLink\" title=\"设置\n" +
            "\n" +
            "设置个人选项并查看隐私声明。查看列表时打印记录。\" onkeypress=\"return true;\" onclick=\"return true;\" href=\"#\" unselectable=\"on\"><span class=\"navTabButtonImageContainer\" unselectable=\"on\"><span id=\"navBarSettingsId\" class=\"\" unselectable=\"on\"></span></span></a></span><span class=\"navTabButton navTabButtonHelp\" id=\"TabButtonHelpId\" title=\"帮助\n" +
            "\n" +
            "查找帮助和培训。\" data-id=\"help\"><a class=\"navTabButtonLink\" title=\"帮助\n" +
            "\n" +
            "查找帮助和培训。\" onkeypress=\"return true;\" onclick=\"return true;\" href=\"javascript:;\" unselectable=\"on\"><span class=\"navTabButtonImageContainer\" unselectable=\"on\"><span class=\"navTabHelpImage\" id=\"navTabButtonHelpImageId\" unselectable=\"on\"></span></span></a></span><span id=\"TabUserInfoId\" class=\"navTabButton navTabButtonUserInfo\" title=\"test123test NobelDev\">\n" +
            "\t\t\t\t<a id=\"navTabButtonUserInfoLinkId\" class=\"navTabButtonLink\" onkeypress=\"return true;\" onclick=\"return false;\" href=\"#\" unselectable=\"on\">\n" +
            "\t\t\t\t\t<span id=\"navTabButtonChangeProfileImageLink\" class=\"navTabButtonImageContainer\" unselectable=\"on\">\n" +
            "\t\t\t\t\t\t<img alt=\"test123test NobelDev\" unselectable=\"on\" src=\"/_imgs/navbar/emptyuserimage.png?ver=-81851465\" class=\"navTabButtonUserInfoProfileImage\">\n" +
            "\t\t\t\t\t</span>\n" +
            "\t\t\t\t</a>\n" +
            "\t\t\t</span></div><div class=\"navTabFiller\"></div></div></div>\n" +
            "<div class=\"navBarOverlay\" id=\"navBarOverlay\" style=\"display: none;\"></div>\n" +
            "\n" +
            "</div>";

    private static final String PAGE_SELECT_HTML="<div class=\"ui-dialog ui-widget ui-widget-content ui-corner-all ui-flyout-dialog ms-crm-moreCommands-flyout\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ui-dialog-title-1\" style=\"display: none; z-index: 1002; outline: 0px; max-height: 225px; top: 118px; left: 206px; height: auto; width: 200px;\"><div class=\"ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix\" style=\"display: none;\"><span class=\"ui-dialog-title\" id=\"ui-dialog-title-1\">&nbsp;</span><a href=\"#\" class=\"ui-dialog-titlebar-close ui-corner-all\" role=\"button\" tabindex=\"0\" style=\"display: none;\"><img src=\"/_imgs/closeicon.png?ver=-81851465\" class=\"\" alt=\"close\" title=\"close\"></a></div><div class=\"ui-flyout-dialog-moreCommands ui-dialog-content ui-widget-content\" scrolltop=\"0\" scrollleft=\"0\" style=\"display: block; width: auto; min-height: 10px; height: auto;\"><ul id=\"report_NoRelationship_HomePageGrid_Mscrm_HomepageGrid_report_ChartsMenu\"><li tabindex=\"-1\" class=\"ms-crm-CommandBarItem ms-crm-CommandBar-Menu ms-crm-CommandBar-Button menuUnselected\" title=\"更改\u200B\u200B布局 \n" +
            "\n" +
            "更改布局，以便图表显示在视图旁边或视图上方。\" id=\"report|NoRelationship|HomePageGrid|Mscrm.HomepageGrid.report.ChangeLayout.LeftRight\" command=\"report|NoRelationship|HomePageGrid|Mscrm.ChartsLayout.LeftRight\" style=\"display:block\" float=\"none\"><span tabindex=\"-1\" class=\"ms-crm-Menu-Label ms-crm-CommandBar-Button ms-crm-CommandBarToggleButton-Active\" style=\"max-width:200px\"><a tabindex=\"0\" class=\"ms-crm-Menu-Label\" onclick=\"return false\"><img tabindex=\"-1\" class=\"ms-cui-img-16by16 ms-crm-commandbar-image16by16\" src=\"/_imgs/imagestrips/transparent_spacer.gif\" style=\"vertical-align:top\"> <span tabindex=\"-1\" class=\"ms-crm-CommandBar-Menu\" style=\"max-width:150px\" command=\"report|NoRelationship|HomePageGrid|Mscrm.ChartsLayout.LeftRight\"> 靠右\u200B\u200B </span><div class=\"ms-crm-div-NotVisible\"> 更改布局，以便图表显示在视图旁边或视图上方。 </div>  </a> </span> </li><li tabindex=\"-1\" class=\"ms-crm-CommandBarItem ms-crm-CommandBar-Menu ms-crm-CommandBar-Button menuUnselected\" title=\"更改\u200B\u200B布局 \n" +
            "\n" +
            "更改布局，以便图表显示在视图旁边或视图上方。\" id=\"report|NoRelationship|HomePageGrid|Mscrm.HomepageGrid.report.ChangeLayout.Top\" command=\"report|NoRelationship|HomePageGrid|Mscrm.ChartsLayout.Top\" style=\"display:block\" float=\"none\"><span tabindex=\"-1\" class=\"ms-crm-Menu-Label ms-crm-CommandBar-Button\" style=\"max-width:200px\"><a tabindex=\"0\" class=\"ms-crm-Menu-Label\" onclick=\"return false\"><img tabindex=\"-1\" class=\"ms-cui-img-16by16 ms-crm-commandbar-image16by16\" src=\"/_imgs/imagestrips/transparent_spacer.gif\" style=\"vertical-align:top\"> <span tabindex=\"-1\" class=\"ms-crm-CommandBar-Menu\" style=\"max-width:150px\" command=\"report|NoRelationship|HomePageGrid|Mscrm.ChartsLayout.Top\"> 顶部\u200B\u200B </span><div class=\"ms-crm-div-NotVisible\"> 更改布局，以便图表显示在视图旁边或视图上方。 </div>  </a> </span> </li><li tabindex=\"-1\" class=\"ms-crm-CommandBarItem ms-crm-CommandBar-Menu ms-crm-CommandBar-Button menuUnselected\" title=\"更改\u200B\u200B布局 \n" +
            "\n" +
            "更改布局，以便图表显示在视图旁边或视图上方。\" id=\"report|NoRelationship|HomePageGrid|Mscrm.HomepageGrid.report.ChangeLayout.Off\" command=\"report|NoRelationship|HomePageGrid|Mscrm.Charts.HomePage.Off\" style=\"display:block\" float=\"none\"><span tabindex=\"-1\" class=\"ms-crm-Menu-Label ms-crm-CommandBar-Button\" style=\"max-width:200px\"><a tabindex=\"0\" class=\"ms-crm-Menu-Label\" onclick=\"return false\"><img tabindex=\"-1\" class=\"ms-cui-img-16by16 ms-crm-commandbar-image16by16\" src=\"/_imgs/imagestrips/transparent_spacer.gif\" style=\"vertical-align:top\"> <span tabindex=\"-1\" class=\"ms-crm-CommandBar-Menu\" style=\"max-width:150px\" command=\"report|NoRelationship|HomePageGrid|Mscrm.Charts.HomePage.Off\"> 关闭\u200B\u200B </span><div class=\"ms-crm-div-NotVisible\"> 更改布局，以便图表显示在视图旁边或视图上方。 </div>  </a> </span> </li></ul></div><div class=\"ui-dialog-buttonpane ui-widget-content ui-helper-clearfix\" style=\"display: none;\"><div class=\"ui-dialog-buttonset\"><button type=\"button\" class=\"ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only\" role=\"button\" aria-disabled=\"false\"><span class=\"ui-button-text\"></span></button><button type=\"button\" class=\"ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only\" role=\"button\" aria-disabled=\"false\"><span class=\"ui-button-text\"></span></button></div></div></div>" +
            "<div class=\"ui-dialog ui-widget ui-widget-content ui-corner-all ui-flyout-dialog ms-crm-moreCommands-flyout\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ui-dialog-title-2\" style=\"display: none; z-index: 1004; outline: 0px; max-height: 225px; top: 118px; left: 20px; height: auto; width: 200px;\"><div class=\"ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix\" style=\"display: none;\"><span class=\"ui-dialog-title\" id=\"ui-dialog-title-2\">&nbsp;</span><a href=\"#\" class=\"ui-dialog-titlebar-close ui-corner-all\" role=\"button\" tabindex=\"0\" style=\"display: none;\"><img src=\"/_imgs/closeicon.png?ver=-81851465\" class=\"\" alt=\"close\" title=\"close\"></a></div><div class=\"ui-flyout-dialog-moreCommands ui-dialog-content ui-widget-content\" scrolltop=\"0\" scrollleft=\"0\" style=\"display: block; width: auto; min-height: 10px; height: auto;\"><ul id=\"report_NoRelationship_HomePageGrid_Mscrm_HomepageGrid_report_SendMenu\"><li tabindex=\"-1\" class=\"ms-crm-CommandBarItem ms-crm-CommandBar-Menu ms-crm-CommandBar-Button menuSelected\" title=\"当前视图\u200B\u200B \n" +
            "\n" +
            "通过电子邮件发送指向此视图的链接。\n" +
            "\n" +
            "此视图中的信息可能会更改，或由于收件人没有权限而对其不可用。\" id=\"report|NoRelationship|HomePageGrid|Mscrm.HomepageGrid.report.Send.View\" command=\"report|NoRelationship|HomePageGrid|Mscrm.SendShortcutView\" style=\"display:block\" float=\"none\"><span tabindex=\"-1\" class=\"ms-crm-Menu-Label ms-crm-CommandBar-Button\" style=\"max-width:200px\"><a tabindex=\"0\" class=\"ms-crm-Menu-Label\" onclick=\"return false\"><img tabindex=\"-1\" class=\"ms-crm-ImageStrip-SendView_16 ms-crm-commandbar-image16by16\" src=\"/_imgs/imagestrips/transparent_spacer.gif\" style=\"vertical-align:top\"> <span tabindex=\"-1\" class=\"ms-crm-CommandBar-Menu\" style=\"max-width:150px\" command=\"report|NoRelationship|HomePageGrid|Mscrm.SendShortcutView\"> 当前视图\u200B\u200B </span><div class=\"ms-crm-div-NotVisible\"> 通过电子邮件发送指向此视图的链接。\n" +
            "\n" +
            "此视图中的信息可能会更改，或由于收件人没有权限而对其不可用。 </div>  </a> </span> </li></ul></div><div class=\"ui-dialog-buttonpane ui-widget-content ui-helper-clearfix\" style=\"display: none;\"><div class=\"ui-dialog-buttonset\"><button type=\"button\" class=\"ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only\" role=\"button\" aria-disabled=\"false\"><span class=\"ui-button-text\"></span></button><button type=\"button\" class=\"ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only\" role=\"button\" aria-disabled=\"false\"><span class=\"ui-button-text\"></span></button></div></div></div>";

}

