package com.zt.demo_test.controller.BiController;

import com.zt.demo_test.commons.BiKey;
import com.zt.demo_test.util.httpsUtils.BiHttpClientUtils;
import org.apache.http.Header;
import org.springframework.stereotype.Controller;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

/**
 * @Author: zt
 * @Date: 2018/8/6 11:09
 */

@Controller
@RequestMapping(value = "")
public class BiController {

    /**
     * 用户名
     */
    private static final String USERNAME = "test";

    private Map<String, String> cookieMap = new HashMap<>();

    /**
     * 密码
     */
    private static final String PWD = "test";

    /**
     * BI系统的地址前缀
     */
    private static final String server_pre = "https://bi.nabeluse.com";


    /**
     * 登录链接
     */
    private static final String ssoLoginUrl = "https://bi.nabeluse.com/ReportServer?op=fs_load&cmd=sso&fr_username=" + USERNAME + "&fr_password=" + PWD;

    /**
     * 首页html链接
     */
    private static final String indexHtml = "https://bi.nabeluse.com:443/ReportServer?op=fs";


    @RequestMapping(value = "/login")
    public void biLogin(HttpServletRequest request, HttpServletResponse response) {
        Map<String, Object> resMap = BiHttpClientUtils.doGet(ssoLoginUrl, null, "UTF-8", "");
        Header[] headers = (Header[]) resMap.get(BiKey.HEADERS);
        String res = (String) resMap.get(BiKey.RES);
        System.out.println(res);
        String cookieInfo = null;
        for (Header header : headers) {
            if (header.getValue().startsWith("JSESSIONID")) {
                cookieInfo = header.getValue();
            }
//            System.out.println(header.getName() + "-----header----" + header.getValue());
        }
        String pageType = (String) resMap.get(BiKey.PAGETYPE);
        response.setContentType(pageType);
//        System.out.println("页面类型:" + pageType);
//        System.out.println("bi登录:" + res);


        Map<String, String> indexMap = new HashMap<>();
        String[] jsessionId = cookieInfo.split(";");


        String jsessionid = jsessionId[0];
        String[] cookieJseId = jsessionid.split("=");
        cookieMap.put(cookieJseId[0], cookieJseId[1]);


        indexMap.put("cookie", jsessionId[0]);
        Map<String, Object> indexResMap = BiHttpClientUtils.doGet(indexHtml, indexMap, "UTF-8", "");
        String html = (String) indexResMap.get(BiKey.RES);
//        System.out.println("html========>" + html);
        try {
            PrintWriter out = response.getWriter();
            out.write(html);
            out.flush();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


    @RequestMapping(value = "/ReportServer/**")
    public void all(HttpServletRequest request, HttpServletResponse response) {

        System.out.println("method:" + request.getMethod()+"---"+request.getRequestURI()+"?"+request.getQueryString());

        cookieMap.put("fr_password","");
        cookieMap.put("fr_remember","false");
        cookieMap.put("fr_usernmae",USERNAME);

        Map<String, Object> resMap = null;

        PrintWriter out = null;

        try {
            if ("GET".equals(request.getMethod())) {
                resMap = BiHttpClientUtils.doGet(server_pre + request.getRequestURI(), cookieMap, "UTF-8", request.getQueryString());
                response.setContentType(resMap.get(BiKey.PAGETYPE).toString());
            } else {
                resMap = BiHttpClientUtils.doPost(server_pre + request.getRequestURI(), null,cookieMap, "", request.getQueryString());
            }
            System.err.println(request.getRequestURI() + "?" + request.getQueryString()+"-----------》请求返回码:"+resMap.get(BiKey.STATUS_CODE));
            response.setStatus((Integer) resMap.get(BiKey.STATUS_CODE));
            out = response.getWriter();
            out.write(resMap.get(BiKey.RES).toString());
            out.flush();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (!ObjectUtils.isEmpty(out)) {
                out.close();
            }
        }
    }

}
