package com.zt.demo_test.filter;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * @Author: zt
 * @Date: 2018/7/12 11:01
 */
@Configuration
public class MyWebMvcConfigurerAdapter extends WebMvcConfigurerAdapter {
    /**
     * 配置静态访问资源
     * @param registry
     */
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/NobelDev/**").addResourceLocations("classpath:/NobelDev/");
        registry.addResourceHandler("/_static/**").addResourceLocations("classpath:/_static/");
        super.addResourceHandlers(registry);
    }
}
