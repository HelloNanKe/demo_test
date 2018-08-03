/*
package com.zt.demo_test.controller;

import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URL;

*/
/**
 * @Author: zt
 * @Date: 2018/7/12 10:28
 *//*


@Controller
@RequestMapping(value = "")
public class StaticResourceController {

    private static final String STATIC_RESOURCE = "http://wxtestbusiness.nabeluse.com:5555";

//    @RequestMapping(value = "/NobelDev/**")
//    @ResponseBody
//    public String cssGet(HttpServletRequest request, HttpServletResponse response){
//        System.err.println("进入静态资源请求:NobelDev:"+request.getRequestURI());
//      return  getJsonFromServer(STATIC_RESOURCE+request.getRequestURI());
//    }


    @RequestMapping(value = "/_static/**")
    @ResponseBody
    public String formGet(HttpServletRequest request, HttpServletResponse response) {
        System.err.println("进入静态资源请求:_static:" + request.getRequestURI());
        String querStr = request.getQueryString();
        String url=request.getRequestURI();
        if(!StringUtils.isEmpty(querStr)){
            url+="?"+querStr;
        }
        return getJsonFromServer(STATIC_RESOURCE + url);
    }

    @RequestMapping(value = "/_imgs/**")
    @ResponseBody
    public byte[] imgsGet(HttpServletRequest request, HttpServletResponse response) {
        System.err.println("进入静态资源请求:_static:" + request.getRequestURI());
        return getImageFromNetByUrl(STATIC_RESOURCE + request.getRequestURI());
    }

    public static byte[] getImageFromNetByUrl(String strUrl) {
        try {
            URL url = new URL(strUrl);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setConnectTimeout(5 * 1000);
            InputStream inStream = conn.getInputStream();//通过输入流获取图片数据
            byte[] btImg = readInputStream(inStream);//得到图片的二进制数据
            return btImg;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }


    */
/**
     * 从输入流中获取数据
     *
     * @param inStream 输入流
     * @return
     * @throws Exception
     *//*

    public static byte[] readInputStream(InputStream inStream) throws Exception {
        ByteArrayOutputStream outStream = new ByteArrayOutputStream();
        byte[] buffer = new byte[1024];
        int len = 0;
        while ((len = inStream.read(buffer)) != -1) {
            outStream.write(buffer, 0, len);
        }
        inStream.close();
        return outStream.toByteArray();
    }

    private static String getJsonFromServer(String url) {
        HttpClientBuilder httpClientBuilder = HttpClientBuilder.create();
        CloseableHttpClient closeableHttpClient = httpClientBuilder.build();
        HttpGet httpGet = new HttpGet(url);
//        httpGet.addHeader("Cookie",cookie);
        httpGet.addHeader("Content-type", "application/x-www-form-urlencoded");
        try {
//            httpPost.setEntity(new UrlEncodedFormEntity(nameValuePairs,"UTF-8"));
            HttpResponse response = closeableHttpClient.execute(httpGet);
            if (response.getStatusLine().getStatusCode() == 200) {
//                System.err.println("返回数据:------------------------>"+ EntityUtils.toString(response.getEntity()));
                */
/*读返回数据*//*

                return EntityUtils.toString(response.getEntity());
            } else {
                String err = response.getStatusLine().getStatusCode() + "";
                System.err.println("发送HTTP请求失败:" + err);
            }
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        } catch (ClientProtocolException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return "";
    }


}
*/
