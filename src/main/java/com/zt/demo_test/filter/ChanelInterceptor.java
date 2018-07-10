package com.zt.demo_test.filter;

import org.apache.catalina.connector.Request;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.lang.reflect.Field;

@Component
public class ChanelInterceptor implements HandlerInterceptor {
    private static Logger logger = LoggerFactory.getLogger(ChanelInterceptor.class);

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object o) throws Exception {
        logger.info("============================拦截器启动==============================");
        request.setAttribute("starttime", System.currentTimeMillis());
        String url = request.getParameter("url");
        System.err.println("跳转的url:" + url);
        System.err.println("getRequestURL:" + request.getRequestURL());
        System.err.println("getRemoteAddr:" + request.getRemoteAddr());

//        Field field = Request.class.getDeclaredField("remoteAddr");
//        field.setAccessible(true);
//        field.set("remoteAddr",url);

        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object o, ModelAndView modelAndView) throws Exception {
        logger.info("===========================执行处理完毕=============================");
        long starttime = (long) request.getAttribute("starttime");
        request.removeAttribute("starttime");
        long endtime = System.currentTimeMillis();
        logger.info("============请求地址：" + request.getRequestURI() + "：处理时间：{}", (endtime - starttime) + "ms");
    }

    @Override
    public void afterCompletion(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, Exception e) throws Exception {
        logger.info("============================拦截器关闭==============================");
    }
}
