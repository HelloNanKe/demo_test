package com.zt.demo_test.wsdl;

import com.intersult.net.http.NtlmHandler;
import org.apache.axis2.AxisFault;
import org.apache.axis2.addressing.EndpointReference;
import org.apache.axis2.client.Options;
import org.apache.axis2.rpc.client.RPCServiceClient;

import javax.xml.namespace.QName;
import javax.xml.rpc.Call;
import javax.xml.ws.Service;
import java.io.*;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.util.HashMap;
import java.util.Map;


import org.jsoup.Connection;
import org.jsoup.Connection.Method;
import org.jsoup.Connection.Response;
import org.jsoup.Jsoup;


public class HelloWorldClient {
    public static void main(String[] argv) {

       /* try {
            NtlmHandler handler = new NtlmHandler();
            handler.setUsername("test123@ad");
            handler.setPassword("test123");
            URL url = new URL(null, "http://wxtestbusiness.nabeluse.com:5555/NobelDev/AppWebServices/AppGridWebService.ashx", handler);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            //第三步：设置参数
            //3.1发送方式设置：POST必须大写
            connection.setRequestMethod("POST");
            //3.2设置数据格式：content-type
            connection.setRequestProperty("content-type", "text/xml;charset=utf-8");
            //3.3设置输入输出，因为默认新创建的connection没有读写权限，
            connection.setDoInput(true);
            connection.setDoOutput(true);
            //第四步：组织SOAP数据，发送请求
            String param = "<grid><sortColumns>name&#58;1</sortColumns><pageNum>1</pageNum><recsPerPage>50</recsPerPage><dataProvider>Microsoft.Crm.Application.Controls.ReportGridDataProvider</dataProvider><uiProvider>Microsoft.Crm.Application.Controls.GridUIProvider</uiProvider><cols/><max>-1</max><refreshAsync>False</refreshAsync><pagingCookie/><enableMultiSort>true</enableMultiSort><enablePagingWhenOnePage>true</enablePagingWhenOnePage><parameters><autorefresh>1</autorefresh><isGridHidden>false</isGridHidden><isGridFilteringEnabled>1</isGridFilteringEnabled><viewid>&#123;5579F470-EBBF-46D7-9EC6-25B4F50DCB8B&#125;</viewid><viewtype>1039</viewtype><RecordsPerPage>50</RecordsPerPage><viewTitle>&#21487;&#29992;&#25253;&#34920;</viewTitle><preview>1</preview><otc>9100</otc><otn>report</otn><entitydisplayname>&#25253;&#34920;</entitydisplayname><titleformat>&#123;0&#125; &#123;1&#125;</titleformat><entitypluraldisplayname>&#25253;&#34920;</entitypluraldisplayname><isWorkflowSupported>true</isWorkflowSupported><fetchXmlForFilters>&#60;fetch version&#61;&#34;1.0&#34; output-format&#61;&#34;xml-platform&#34; mapping&#61;&#34;logical&#34;&#62;&#60;entity name&#61;&#34;report&#34;&#62;&#60;attribute name&#61;&#34;name&#34; &#47;&#62;&#60;attribute name&#61;&#34;reporttypecode&#34; &#47;&#62;&#60;attribute name&#61;&#34;filename&#34; &#47;&#62;&#60;attribute name&#61;&#34;bodyurl&#34; &#47;&#62;&#60;attribute name&#61;&#34;modifiedon&#34; &#47;&#62;&#60;attribute name&#61;&#34;description&#34; &#47;&#62;&#60;attribute name&#61;&#34;reportid&#34; &#47;&#62;&#60;attribute name&#61;&#34;iscustomreport&#34; &#47;&#62;&#60;order attribute&#61;&#34;name&#34; descending&#61;&#34;false&#34; &#47;&#62;&#60;filter type&#61;&#34;and&#34;&#62;&#60;condition attribute&#61;&#34;languagecode&#34; operator&#61;&#34;eq-userlanguage&#34; &#47;&#62;&#60;&#47;filter&#62;&#60;link-entity name&#61;&#34;reportvisibility&#34; from&#61;&#34;reportid&#34; to&#61;&#34;reportid&#34; alias&#61;&#34;aa&#34;&#62;&#60;filter type&#61;&#34;and&#34;&#62;&#60;condition attribute&#61;&#34;visibilitycode&#34; operator&#61;&#34;eq&#34; value&#61;&#34;1&#34; &#47;&#62;&#60;&#47;filter&#62;&#60;&#47;link-entity&#62;&#60;&#47;entity&#62;&#60;&#47;fetch&#62;</fetchXmlForFilters><isFetchXmlNotFinal>False</isFetchXmlNotFinal><effectiveFetchXml>&#60;fetch distinct&#61;&#34;false&#34; no-lock&#61;&#34;false&#34; mapping&#61;&#34;logical&#34; page&#61;&#34;1&#34; count&#61;&#34;50&#34; returntotalrecordcount&#61;&#34;true&#34;&#62;&#60;entity name&#61;&#34;report&#34;&#62;&#60;attribute name&#61;&#34;name&#34; &#47;&#62;&#60;attribute name&#61;&#34;reporttypecode&#34; &#47;&#62;&#60;attribute name&#61;&#34;filename&#34; &#47;&#62;&#60;attribute name&#61;&#34;bodyurl&#34; &#47;&#62;&#60;attribute name&#61;&#34;modifiedon&#34; &#47;&#62;&#60;attribute name&#61;&#34;description&#34; &#47;&#62;&#60;attribute name&#61;&#34;reportid&#34; &#47;&#62;&#60;attribute name&#61;&#34;iscustomreport&#34; &#47;&#62;&#60;attribute name&#61;&#34;name&#34; &#47;&#62;&#60;attribute name&#61;&#34;reporttypecode&#34; &#47;&#62;&#60;attribute name&#61;&#34;modifiedon&#34; &#47;&#62;&#60;attribute name&#61;&#34;description&#34; &#47;&#62;&#60;attribute name&#61;&#34;filename&#34; &#47;&#62;&#60;attribute name&#61;&#34;bodyurl&#34; &#47;&#62;&#60;attribute name&#61;&#34;iscustomreport&#34; &#47;&#62;&#60;filter type&#61;&#34;and&#34;&#62;&#60;condition attribute&#61;&#34;languagecode&#34; operator&#61;&#34;eq-userlanguage&#34; &#47;&#62;&#60;&#47;filter&#62;&#60;order attribute&#61;&#34;name&#34; descending&#61;&#34;false&#34; &#47;&#62;&#60;link-entity name&#61;&#34;reportvisibility&#34; to&#61;&#34;reportid&#34; from&#61;&#34;reportid&#34; link-type&#61;&#34;inner&#34; alias&#61;&#34;aa&#34;&#62;&#60;filter type&#61;&#34;and&#34;&#62;&#60;condition attribute&#61;&#34;visibilitycode&#34; operator&#61;&#34;eq&#34; value&#61;&#34;1&#34; &#47;&#62;&#60;&#47;filter&#62;&#60;&#47;link-entity&#62;&#60;&#47;entity&#62;&#60;&#47;fetch&#62;</effectiveFetchXml><LayoutStyle>GridList</LayoutStyle><enableFilters>1</enableFilters><quickfind/><filter/><filterDisplay/></parameters></grid>";
            String soapXML = getXML(param);
            OutputStream os = connection.getOutputStream();
            os.write(param.getBytes());
            //第五步：接收服务端响应，打印
            int responseCode = connection.getResponseCode();
            System.err.println("responseCode:" + responseCode);
            if (200 == responseCode) {//表示服务端响应成功
                System.err.println("响应成功");
                InputStream is = connection.getInputStream();
                InputStreamReader isr = new InputStreamReader(is);
                BufferedReader br = new BufferedReader(isr);
                StringBuilder sb = new StringBuilder();
                String temp = null;
                while (null != (temp = br.readLine())) {
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
        }*/

       /* String result = null;
        try {
            String endpoint = "http://wxtestbusiness.nabeluse.com:5555/NobelDev/AppWebServices/AppGridWebService.asmx?wsdl";

            RPCServiceClient serviceClient = new RPCServiceClient();
            Options options = serviceClient.getOptions();
            //第二步 远程wsdl文件
            EndpointReference target = new EndpointReference(endpoint);
            options.setTo(target);
            //第三步 命名空间和方法
            QName addEntry = new QName("http://schemas.microsoft.com/crm/2009/WebServices", "sayHello");
            //第四步 传入方法的参数，没有的话定义空数组
            Object[] addEntryArgs = new Object[]{ "shanshanbox.com" };
            //第五步 方法的返回值，可以不存在
            Class[] classes = new Class[] {String.class};

            Object[] invokeBlocking = serviceClient.invokeBlocking(addEntry, addEntryArgs, classes);

            System.out.println(invokeBlocking[0]);

            *//** 调用webser中nextNum方法 **//*
            addEntry = new QName("http://impl.service.jax/", "AppGridWebServiceSoap");
            classes = new Class[] { int.class };
            invokeBlocking = serviceClient.invokeBlocking(addEntry, new Object[]{ }, classes);
            System.out.println(invokeBlocking[0]);
        } catch (AxisFault axisFault) {
            axisFault.printStackTrace();
        }*/

        Map<String, String> map = new HashMap<>();
        map.put("userName", "test123@ad");
        map.put("password", "test123");

        Connection conn = Jsoup.connect("http://wxtestbusiness.nabeluse.com:5555/NobelDev/AppWebServices/AppGridWebService.ashx?id=crmGrid&operation=Reset");
        conn.header("Accept", "*/*");
        conn.header("X-Requested-With", "XMLHttpRequest");
        try {
            Response response = conn.ignoreContentType(true)
                    .method(Method.POST)
                    .data(map)
                    .execute();
            System.err.println(response.body());
        } catch (IOException e) {
            e.printStackTrace();
        }


    }

    public static String getXML(String phoneNum) {
        String soapXML = "<?xml version=\"1.0\" encoding=\"utf-8\"?>"
                + "<soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">"
                + "<soap:Body>"
                + "<getMobileCodeInfo xmlns=\"http://WebXml.com.cn/\">"
                + "<mobileCode>" + phoneNum + "</mobileCode>"
                + "<userID></userID>"
                + "</getMobileCodeInfo>"
                + "</soap:Body>"
                + "</soap:Envelope>";
        return soapXML;
    }
}