package com.zt.demo_test.domain;

import java.io.Serializable;
import java.util.List;

/**
 * @Author: zt
 * @Date: 2018/8/1 20:17
 */
public class WebxDomain implements Serializable {


    /**
     * id : ED6214C9-E72B-45EA-84E8-5F087C16D3A8
     * service : identity
     * spi : getAuthOneInfo
     * parameters : {"userName":"nankezt@gmail.com","backUrl":"https://signin.webex.com/collabs/auth?TrackID=1&hbxref=https%3A%2F%2Fwww.webex.com.cn%2F&goid=cn_host-meeting","service":"","from":""}
     */

    private String id;
    private String service;
    private String spi;

    private ParametersBean parameters;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getService() {
        return service;
    }

    public void setService(String service) {
        this.service = service;
    }

    public String getSpi() {
        return spi;
    }

    public void setSpi(String spi) {
        this.spi = spi;
    }

    public ParametersBean getParameters() {
        return parameters;
    }

    public void setParameters(ParametersBean parameters) {
        this.parameters = parameters;
    }

    public static class ParametersBean {
        /**
         * userName : nankezt@gmail.com
         * backUrl : https://signin.webex.com/collabs/auth?TrackID=1&hbxref=https%3A%2F%2Fwww.webex.com.cn%2F&goid=cn_host-meeting
         * service :
         * from :
         */

        private String userName;
        private String backUrl;
        private String service;
        private String from;

        public String getUserName() {
            return userName;
        }

        public void setUserName(String userName) {
            this.userName = userName;
        }

        public String getBackUrl() {
            return backUrl;
        }

        public void setBackUrl(String backUrl) {
            this.backUrl = backUrl;
        }

        public String getService() {
            return service;
        }

        public void setService(String service) {
            this.service = service;
        }

        public String getFrom() {
            return from;
        }

        public void setFrom(String from) {
            this.from = from;
        }
    }
}
