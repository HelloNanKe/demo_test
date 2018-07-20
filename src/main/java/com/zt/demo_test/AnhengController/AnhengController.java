package com.zt.demo_test.AnhengController;

import com.zt.demo_test.fateadm.Api;
import com.zt.demo_test.fateadm.Util;
import com.zt.demo_test.util.EntityUtil;
import com.zt.demo_test.util.HttpUtils;
import com.zt.demo_test.util.ImageUtil;
import org.apache.http.HttpHost;
import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.DefaultHttpClient;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Controller;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;

/**
 * @Author: zt
 * @Date: 2018/7/19 11:00
 */
@Controller
@RequestMapping(value = "/anheng")
public class AnhengController {

    private static final String userName = "admin";

    private static final String pwd = "1q2w3e";


    @RequestMapping(value = "/login")
    public String loginAnheng() {
        return "/anhengLogin.html";
    }

    /**
     * 从登录页中解析出验证码图片的链接
     *
     * @return
     */
    @RequestMapping(value = "/getHtml")
    @ResponseBody
    public String getLoginHtml() {

        String htmlDoc = HttpUtils.doHttpsRequest("https://47.100.184.150/index.php", "","GET");
        Document doc = Jsoup.parse(htmlDoc);
        Elements elements = doc.getElementsByTag("img");
        String src = elements.get(0).attr("src");
        src = "https://47.100.184.150" + src;
        System.err.println("验证码地址:" + src);
        byte[] imgBit = HttpUtils.getHttpsImg(src);

        byte[] grayByte;
        try {
            grayByte = ImageUtil.grayImage(imgBit);
            Api api = new Api();
            String app_id = "100001";
            String app_key = "123456";
            String pd_id = "104620";
            String pd_key = "G1/t9RkbHMctbikiwsXHmpNTivPjGACU";
            // 对象生成之后，在任何操作之前，需要先调用初始化接口
            api.Init(app_id, app_key, pd_id, pd_key);
            Util.HttpResp resp = null;
            //表示4位纯英文字母
            String pred_type = "20400";
            resp = api.Predict(pred_type, grayByte);
            System.err.println("返回值:" + resp);
//            验证码识别结果
            String res = resp.pred_resl;
            String param = " username=" + userName + "&pwd=" + pwd + "&captcha=" + res + "&method=pwd&thirdinfo=undefined";

            String result = HttpUtils.doHttpsRequest("https://47.100.184.150/index.php/login/auth3", param,"POST");

            System.err.println("登录结果:------>"+result);

        } catch (Exception e) {
            e.printStackTrace();
        }

        return src;
    }


}
