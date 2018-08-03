package com.zt.demo_test.controller.webexController;

import com.google.gson.Gson;
import com.zt.demo_test.domain.WebxDomain;
import com.zt.demo_test.util.HttpUtils;
import com.zt.demo_test.util.httpsUtils.HttpClientUtil;
import org.apache.http.Header;
import org.apache.http.NameValuePair;
import org.apache.http.message.BasicNameValuePair;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.*;

/**
 * @Author: zt
 * webex视频会议对接
 * @Date: 2018/7/30 11:16
 */
@Controller
@RequestMapping(value = "")
public class WebexController {


    private static final String USER_NAME = "nankezt@gmail.com";

    private static final String PWD = "zt123456";

    private static final String AUTH_URL = "https://signin.webex.com/collabs/auth?TrackID=1&hbxref=https%3A%2F%2Fwww.webex.com.cn%2F&goid=cn_host-meeting";


    //1.上传用户名的url
    private static final String JSONRP = "https://signin.webex.com/collabs/JSONRPCHandler.do";

    //2.上传密码的url
    private static final String PWD_UPLOAD = "https://idbroker.webex.com/idb/UI/Login";

    //3.申请票据的url
    private static final String TICKT_URL = "https://meetings.webex.com/collabs/auth/ssologin?backlink=https%3A%2F%2Fmeetings.webex.com%2Fcollabs%2Fauth&service=wbx11&from=default&email=nankezt%40gmail.com";

    private static final String TICKT_URL1 = "https://meetings.webex.com/collabs/auth/ssologin";
    //4.请求首页的信息
    private static final String INDEX_URL = "https://meetings.webex.com/collabs/";


    @RequestMapping(value = "/webex")
    public String webxLogin() {
        return "webx.html";
    }

    /**
     * 第一步:上传用户名:nannkezt@gmail.com
     *
     * @param response
     * @param request
     * @return
     */
    @RequestMapping(value = "/collabs1")
    public void authWebex(HttpServletResponse response, HttpServletRequest request) {

        //1.上传用户名
        Map<String, Object> res1Map = uploadUserName(JSONRP, "");
//        String res1 = (String) res1Map.get("result");
//        System.err.println("res1=" + res1);
        List res1Cookie = (List) res1Map.get("cookie");
        for (Object o : res1Cookie) {
            response.addHeader("Set-Cookie", o.toString());
            System.err.println("res1的：cookie信息:" + o);
        }


//      2.上传密码
        String paramString = "IDToken0=&IDToken1=nankezt%40gmail.com&IDToken2=zt123456&IDButton=%E7%99%BB%E5%BD%95&goto=aHR0cHM6Ly9pZGJyb2tlci53ZWJleC5jb20vaWRiL0lkQk1lZXRpbmdzTG9naW4%2FcmV0dXJuVVJMPWh0dHBzJTNBJTJGJTJGY2FzLndlYmV4Y29ubmVjdC5jb20lMkZjYXMlMkZTQU1MMkF1dGhTZXJ2aWNlLmRvJTNGUmVsYXlTdGF0ZSUzRHMyMTlmZjllM2E5NzEzNjVmOGY4NzU2OGU5YmE2YTkzMmIxMWZkMGI5ZiZmcm9tQnJva2VyPXRydWUmd2ViZXhTaXRlTmFtZT1XZWJFeE9ubGluZSZjbGllbnRfaWQ9Q2I1ODVlZjg1OTFjZmFjMmQ5MTBiOTRkZmNjMWI4NTNhMDIwMTM2ZTdjY2ExYWNmNjZkYWQxN2Y2NGY4OGJiM2QmY3JlYXRlUmVmcmVzaFRva2VuPWZhbHNl&SunQueryParamsString=c2lnbnVwdXJsPWh0dHBzOi8vbWVldGluZ3Mud2ViZXguY29tL2NvbGxhYnMvYWNjb3VudC9nb2Vjb21tZXJjZT9rZXk9bG9naW4mY2lzU2VydmljZT1tZWV0aW5ncyZiYWNrdXJsPWh0dHBzOi8vc2lnbmluLndlYmV4LmNvbS9jb2xsYWJzL2F1dGg%2FVHJhY2tJRD0xJmhieHJlZj1odHRwcyUzQSUyRiUyRnd3dy53ZWJleC5jb20uY24lMkYmZ29pZD1jbl9ob3N0LW1lZXRpbmcmZnJvbUdsb2JhbD15ZXMmcmVhbG09Y29uc3VtZXImY2lzS2VlcE1lU2lnbmVkSW5PcHRpb249MSZ0eXBlPWxvZ2luJmdsYUVuZHBvaW50PSZlbWFpbD1uYW5rZXp0QGdtYWlsLmNvbQ%3D%3D&encoded=true&locale=zh_CN&loginid=nankezt%40gmail.com&isAudioCaptcha=false&gx_charset=UTF-8";
        Map<String, Object> res2Map = HttpUtils.sendPostGetCokie(PWD_UPLOAD, paramString);
//        String res2 = (String) res2Map.get("result");
//        System.err.println("res2=" + res2);
        List cookies = (List) res2Map.get("cookie");
        for (Object o : cookies) {
            response.addHeader("Set-Cookie", o.toString());
            System.err.println("res2的：cookie信息:" + o);
        }


        //        3.获取票据
        String ticktParam = "userId=UCWXC1JTZ97Z9ZM8IYOC17W31Z-4O2&email=nankezt%40gmail.com&token=AAABZPm3oskAAHCACEgAApBJElqCQazI8PcGTRRjdwxpkcpHdtrJ38w7FR39goF9ADJBSFNTAAAAAr9wRwyVMspXtXwEiLFjgZcf5RSlpcSSMPenBGGZGHTHcajh8FyvJLgheL64z53VKYW0VM1mTBDKiCUhCavfT1Ch3UE%2FNbf%2FsTaNcj0wK%2FHIHwXXo0NusIyB6zzI8RbZkwUFNt4X5LXKxnRh4WBuFqtaqQ02W711c2xI34coSS4U63sSD8KYm23Oh7SbC1eUFR2hUuHeIeYVOZol%2BeJzjPTL6E8uph8Y5WHtd7luDYkKDhwwcmhr1AQc%2F%2BYeJocl45OUeRnUQ%2F3VWvVSFHlfYgh8AE0%2Fl6HHpLnV%2FF5%2BnxzSex8yeJTPEt%2BeHp3VeVsMMLVY9NzTG4sC0BZ9cix4MvT5eBuFjDTbZjtpPZlZBDDa2F9qzu%2BB%2FmT8tHVnc8RJQA%3D%3D&createtime=1533197918921&timetolive=28800&serviceurl=dfwapi-sj1-tx1.webex.com%2Fwbxconnect&conferenceurl=meetings.webex.com&collabsurl=meetings.webex.com&boshURL=https%3A%2F%2Fim6.ciscowebex.com%2Fhttp-bind&jabberID=nankezt.gmail.com%40meetings.im.webex.com&jabberToken=uhQqkanezsU54rUwKx5uwxrB9jtlNJvyy0ccRLmb%2By3bLVO7ehDjDtrevt7zeNBCBuyBo0UTQPvu00wArYqLHBuKNYXfiy833hmclQ%2BSAe6igaD6onRXo8JuNeqjgoXr4nlcrh85oGcaY49LpubCAGUvKXtzt%2FSLTpufpWZ7l3gVc2DbAbE5jwtiQm2J9eQ3SxW8evac%2B4L8H11rdtXKktnoCFsqQEl4ARbvXWdjQKi0H1HSl1X87izbXcR4JRANJ0wa8ydbFesx261AGbQHCsUiuNArUq%2FDL5MTWqgN%2F4gNyHhmHxg3LbI8cMmra7FvRAqc7Z%2FtcJ7nreNdqyZRt85AmZqaHmVb9seEQd%2F%2BvryFD8CnTfQhQqV1WRMiSakMqW%2BMbSyQULlin8R1Ky77uX2r9ywePvZPop1xf%2BoKXAg%3D&jabberCluster=isj6cmx-gw.webexconnect.com&jabberName=isj6&orglevel=WAPI2&dcid=PM&cisRememberMyEmail=false&cisKeepMeSignedIn=false";
        Map<String, Object> ticktMap = HttpUtils.sendPostGetCokie(TICKT_URL, ticktParam);
//        String res3 = (String) ticktMap.get("result");
//        System.err.println("res3=" + res3);
        List tickCookie = (List) ticktMap.get("cookie");
        for (Object o : tickCookie) {
            response.addHeader("Set-Cookie", o.toString());
            System.err.println("tickCookie信息:" + o);
        }

        String indexRes = HttpUtils.sendGetAndGetCookie(INDEX_URL, "", tickCookie);


//        4.渲染
        try {
            PrintWriter out = response.getWriter();
            out.write(indexRes);
            out.flush();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


    //    上传用户名
    private Map<String, Object> uploadUserName(String url, String param) {
        WebxDomain webxDomain = new WebxDomain();
        webxDomain.setId("ED6214C9-E72B-45EA-84E8-5F087C16D3A8");
        webxDomain.setService("identity");
        webxDomain.setSpi("getAuthOneInfo");
        WebxDomain.ParametersBean parametersBean = new WebxDomain.ParametersBean();
        parametersBean.setUserName("nankezt@gmail.com");
        parametersBean.setBackUrl("https://signin.webex.com/collabs/auth?TrackID=1&hbxref=https%3A%2F%2Fwww.webex.com.cn%2F&goid=cn_host-meeting");
        parametersBean.setFrom("");
        parametersBean.setService("");
        webxDomain.setParameters(parametersBean);
        List<WebxDomain> paramList = new ArrayList<>();
        paramList.add(webxDomain);
        Gson gson = new Gson();
        String json = gson.toJson(paramList);
//        System.err.println("json=" + json);
        String param1 = "__spiCall__=" + json;
        String param2 = "&wbxcid=" + "02e3cf02-a186-4e7e-aa58-fd7716e58ebb";

        return HttpUtils.sendPostGetCokie(url, param1 + param2);
    }


    @RequestMapping(value = "**/**")
    public void TestHttps(HttpServletRequest request,HttpServletResponse response) {
        System.out.println(request.getRequestURI());
        List<NameValuePair> ticketParam = new ArrayList<>();
//        链接里的参数
        ticketParam.add(new BasicNameValuePair("backlink", "https://meetings.webex.com/collabs/auth"));
        ticketParam.add(new BasicNameValuePair("email", "nankezt@gmail.com"));
        ticketParam.add(new BasicNameValuePair("from", "default"));
        ticketParam.add(new BasicNameValuePair("service", "wbx11"));
//body里的参数
        ticketParam.add(new BasicNameValuePair("userId", "UCWXC1JTZ97Z9ZM8IYOC17W31Z-4O2"));
        ticketParam.add(new BasicNameValuePair("email", "nankezt@gmail.com"));
        ticketParam.add(new BasicNameValuePair("token", "AAABZP7qs8kAAHCACEgAAord3KOLzffs6m7rxvyDnNtktq6yqUiYPm3/x9h2/toYADJBSFNTAAAAAkAZRV7mfZavipixLpNw6qluAN6Kvqu4jgmvq73TznVtnuu79bLPBcrhqatjnAFJnJ/VYKYoj2fV8tmNhLWN/ddCcGzNlmKNGpFScNejmsrIKw6GhhtC5guLpECkj2WWtvVAQGKHurVni8OwJA4OHlo1bHHEB/CEHY2bDrkiIdvaMSDDSk8JwHdXMa4BGDolHSWgH64I1ZpT8kU5E0rEDSnFWJz1yXVLJG7CrlfNZEeUB4J+Hra4oJYR8DHeAL2geWCvAP9QhEeumyOVAdGFIJzAR04fPrcCJRWWCrrC+s3qDZw8aVzQNTylj3UXgqidHnKNAHpwgLaNQg0jlD8fXD4BZAu53NxuYN+gImMZYsC/vggsJmfLveVtk4oIm5S+dw=="));
        ticketParam.add(new BasicNameValuePair("createtime", new Date().toString()));
        ticketParam.add(new BasicNameValuePair("timetolive", "28800"));
        ticketParam.add(new BasicNameValuePair("serviceurl", "dfwapi-sj1-tx1.webex.com/wbxconnect"));
        ticketParam.add(new BasicNameValuePair("conferenceurl", "meetings.webex.com"));
        ticketParam.add(new BasicNameValuePair("collabsurl", "meetings.webex.com"));
        ticketParam.add(new BasicNameValuePair("boshURL", "https://im6.ciscowebex.com/http-bind"));
        ticketParam.add(new BasicNameValuePair("jabberID", "nankezt.gmail.com@meetings.im.webex.com"));
        ticketParam.add(new BasicNameValuePair("jabberToken", "CBL3P7kuDjfDyrSf6OOY/2Eqv6uG2OWVcFGiROmSgLiu9/8IBpTlE/YS/0/mIg3UQ3yGItQHzRaj4cK2y/5cbwpqj+A5FEsgEorztD1A/i6bo1q4nOJdgoeqh1SGqz1/MboDFsNeFZZE+3Ry0MyfpBMTqzw+SEjtZWZlXCz5ugLUsqxmo6fp4V1pIqzwXkTSBHnZaoJnlodiBTOzIKkNSOYi2uU/ch2AVmsKtRleFe4jj83B6bRtKpfKmtvzAZTR6m99UsH/Dnkgadmbjtg57wya7CIqVpoBgaUeIIqWMrxeZR4mcSDoAQv4eJkfmPZ9Su/kmCrY6wb4jN38gahlIrSuD96WF2pxLkzRIDH2bq7iVQj9FJw2iuRKEFoHDdUouOaqbKyM2fPQeYCHSJw6PdJJ51hpMdJyiezae1VhrHw="));
        ticketParam.add(new BasicNameValuePair("jabberCluster", "isj6cmx-gw.webexconnect.com"));
        ticketParam.add(new BasicNameValuePair("jabberName", "isj6"));
        ticketParam.add(new BasicNameValuePair("orglevel", "WAPI2"));
        ticketParam.add(new BasicNameValuePair("dcid", "PM"));
        ticketParam.add(new BasicNameValuePair("cisRememberMyEmail", "false"));
        ticketParam.add(new BasicNameValuePair("cisKeepMeSignedIn", "false"));

        Map<String, Object> resMap = HttpClientUtil.doPost(TICKT_URL1, ticketParam, "UTF-8");
//        System.err.println("res=" + res);
        Header[] headers = (Header[]) resMap.get("headers");

        String tokenTicket = null;
        for (Header header : headers) {
            System.err.println(header.getName() + "----->" + header.getValue());

            if (header.getValue().startsWith("WBX11Ticket")) {
                response.addHeader(header.getName(),header.getValue());
                tokenTicket = header.getValue();
            }

            if(header.getValue().startsWith("wbxSessionID")){
                response.addHeader(header.getName(),header.getValue());
            }

        }

//        System.err.println("tokenTicket====>"+tokenTicket);

//        带上票据去请求首页的源码
        Map<String, Object> map = getIndexHtml(tokenTicket);

        String result= (String) map.get("res");

        try {
            PrintWriter out=response.getWriter();
            out.write(result);
            out.flush();

        } catch (IOException e) {
            e.printStackTrace();
        }

    }

    private static final String INDEX_URL2 = "https://meetings.webex.com/collabs/";

    /**
     * 获取首页的html源码
     *
     * @param tokenTicket
     * @return
     */
    private Map<String, Object> getIndexHtml(String tokenTicket) {
        String [] tokens=tokenTicket.split("=");

        System.err.println(tokens[0]+"+++++++++++++++++++++++++"+tokens[1]);
        Map<String, String> headerMap = new HashMap<>();
        headerMap.put("amlbcookie", "16");
        headerMap.put("athena_cache_webim_offlined", "false");
        headerMap.put("backend", "PM");
        headerMap.put("cisPRODiPlanetDirectoryPro", "AQIC5wM2LY4SfcwtCwA5RtMeiTSeU6DUfsTIeoY9-fswpPQ.*AAJTSQACMDIAAlNLABItODc0Njg2OTY5ODA3ODk0MjMAAlMxAAIxNg..*");
        headerMap.put("CK_W11_CDNHostStatus", "AZKP%7Cakamaicdn.webex.com%7C1%7C1533284678686%7C120");
        headerMap.put("clientJodaID", "Asia%2FShanghai");
        headerMap.put("directlanding", "true");
        headerMap.put("WBX11Ticket", tokens[1]);
        headerMap.put("wbxSessionID", "84CD83B265D5FD6850262CC8860DBE21");
        headerMap.put("Referer","https://cas.webexconnect.com/cas/SAML2AuthService.do?RelayState=s2fe05a96904da1ea4d0d77bcc5a1a85baa8edb3e1");
        String res = HttpClientUtil.doGet(INDEX_URL2, headerMap, "UTF-8");

        Map<String, Object> map = new HashMap<>();
        map.put("res", res);
        return map;
    }


}
