package com.zt.demo_test.main;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.StringReader;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.auth.AuthScope;
import org.apache.http.auth.NTCredentials;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.ResponseHandler;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;

/**
 * httpclient调用webservice
 *
 * @author muyunfei
 * <p>
 * <p>Modification History:</p>
 * <p>Date       Author      Description</p>
 * <p>------------------------------------------------------------------</p>
 * <p>Jan 11, 2017           牟云飞       		 新建</p>
 */
public class Client {
    public static void main(String[] args) {
        try {
            DefaultHttpClient httpclient = new DefaultHttpClient();
            NTCredentials creds = new NTCredentials("test123@ad:test123");
            httpclient.getCredentialsProvider().setCredentials(AuthScope.ANY, creds);
            HttpPost httpPost = new HttpPost("http://wxtestbusiness.nabeluse.com:5555/NobelDev/AppWebServices/RecentlyViewedWebService.asmx");
            String wsdlData ="<?xml version=\"1.0\" encoding=\"utf-8\" ?><soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"><soap:Body><UploadRecentlyViewed xmlns=\"http://schemas.microsoft.com/crm/2009/WebServices\"><recentlyViewedXml>&#60;RecentlyViewedData&#62;&#60;RecentlyViewedEntityData etc&#61;&#39;1030&#39;&#62;&#60;RecentlyViewedItem&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;Type&#62;0&#60;&#47;Type&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;ObjectId&#62;&#38;&#35;123&#59;b46aeb74-bf0c-44fb-8158-9575588d1b57&#38;&#35;125&#59;&#60;&#47;ObjectId&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;EntityTypeCode&#62;1030&#60;&#47;EntityTypeCode&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;EntityTypeName&#62;&#60;&#47;EntityTypeName&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;DisplayName&#62;&#38;&#35;31995&#59;&#38;&#35;32479&#59;&#38;&#35;31383&#59;&#38;&#35;20307&#59;&#60;&#47;DisplayName&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;Title&#62;&#38;&#35;24066&#59;&#38;&#35;22330&#59;&#38;&#35;33829&#59;&#38;&#35;38144&#59;&#38;&#35;31038&#59;&#38;&#35;20132&#59;&#38;&#35;20202&#59;&#38;&#35;34920&#59;&#38;&#35;26495&#59;&#60;&#47;Title&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;Action&#62;pagemode&#38;&#35;61&#59;iframe&#38;&#35;38&#59;sitemappath&#38;&#35;61&#59;WorkPlace&#38;&#35;37&#59;7cMyWork&#38;&#35;37&#59;7cnav_dashboards&#60;&#47;Action&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;IconPath&#62;&#60;&#47;IconPath&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;LastAccessed&#62;07&#38;&#35;47&#59;15&#38;&#35;47&#59;2018 06&#38;&#35;58&#59;27&#38;&#35;58&#59;42&#60;&#47;LastAccessed&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;PinStatus&#62;false&#60;&#47;PinStatus&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#60;&#47;RecentlyViewedItem&#62;&#60;&#47;RecentlyViewedEntityData&#62;&#60;RecentlyViewedEntityData etc&#61;&#39;4406&#39;&#62;&#60;RecentlyViewedItem&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;Type&#62;1&#60;&#47;Type&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;ObjectId&#62;&#38;&#35;123&#59;FD4DF17C-386E-4E29-9D31-529A568A3BBC&#38;&#35;125&#59;&#60;&#47;ObjectId&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;EntityTypeCode&#62;4406&#60;&#47;EntityTypeCode&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;EntityTypeName&#62;&#60;&#47;EntityTypeName&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;DisplayName&#62;&#38;&#35;24555&#59;&#38;&#35;36895&#59;&#38;&#35;24066&#59;&#38;&#35;22330&#59;&#38;&#35;27963&#59;&#38;&#35;21160&#59;&#60;&#47;DisplayName&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;Title&#62;&#38;&#35;25105&#59;&#38;&#35;30340&#59;&#38;&#35;24555&#59;&#38;&#35;36895&#59;&#38;&#35;24066&#59;&#38;&#35;22330&#59;&#38;&#35;27963&#59;&#38;&#35;21160&#59;&#60;&#47;Title&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;Action&#62;viewtype&#38;&#35;61&#59;1039&#38;&#35;38&#59;sitemappath&#38;&#35;61&#59;MA&#38;&#35;37&#59;7cmak&#38;&#35;37&#59;7cnav_minicamps&#38;&#35;38&#59;type&#38;&#35;61&#59;bulkoperation&#60;&#47;Action&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;IconPath&#62;&#60;&#47;IconPath&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;LastAccessed&#62;07&#38;&#35;47&#59;06&#38;&#35;47&#59;2018 05&#38;&#35;58&#59;43&#38;&#35;58&#59;52&#60;&#47;LastAccessed&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;PinStatus&#62;false&#60;&#47;PinStatus&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#60;&#47;RecentlyViewedItem&#62;&#60;&#47;RecentlyViewedEntityData&#62;&#60;RecentlyViewedEntityData etc&#61;&#39;9100&#39;&#62;&#60;RecentlyViewedItem&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;Type&#62;0&#60;&#47;Type&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;ObjectId&#62;&#38;&#35;123&#59;6EE9F41B-C828-E811-80C3-A7E593460C25&#38;&#35;125&#59;&#60;&#47;ObjectId&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;EntityTypeCode&#62;9100&#60;&#47;EntityTypeCode&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;EntityTypeName&#62;&#60;&#47;EntityTypeName&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;DisplayName&#62;&#38;&#35;25253&#59;&#38;&#35;34920&#59;&#60;&#47;DisplayName&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;Title&#62;&#38;&#35;38144&#59;&#38;&#35;21806&#59;&#38;&#35;21382&#59;&#38;&#35;21490&#59;&#38;&#35;35760&#59;&#38;&#35;24405&#59;&#60;&#47;Title&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;Action&#62;action&#38;&#35;61&#59;run&#38;&#35;38&#59;helpID&#38;&#35;61&#59;Sales&#38;&#35;37&#59;20History.rdl&#60;&#47;Action&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;IconPath&#62;&#60;&#47;IconPath&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;LastAccessed&#62;07&#38;&#35;47&#59;03&#38;&#35;47&#59;2018 08&#38;&#35;58&#59;00&#38;&#35;58&#59;57&#60;&#47;LastAccessed&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;PinStatus&#62;false&#60;&#47;PinStatus&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#60;&#47;RecentlyViewedItem&#62;&#60;RecentlyViewedItem&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;Type&#62;1&#60;&#47;Type&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;ObjectId&#62;&#38;&#35;123&#59;919A0451-03FB-405E-A800-1047B6E83E80&#38;&#35;125&#59;&#60;&#47;ObjectId&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;EntityTypeCode&#62;9100&#60;&#47;EntityTypeCode&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;EntityTypeName&#62;&#60;&#47;EntityTypeName&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;DisplayName&#62;&#38;&#35;25253&#59;&#38;&#35;34920&#59;&#60;&#47;DisplayName&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;Title&#62;&#38;&#35;25152&#59;&#38;&#35;26377&#59;&#38;&#35;25253&#59;&#38;&#35;34920&#59;&#38;&#35;65292&#59;&#38;&#35;21253&#59;&#38;&#35;25324&#59;&#38;&#35;23376&#59;&#38;&#35;25253&#59;&#38;&#35;34920&#59;&#60;&#47;Title&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;Action&#62;viewtype&#38;&#35;61&#59;1039&#38;&#35;38&#59;sitemappath&#38;&#35;61&#59;WorkPlace&#38;&#35;37&#59;7cMyWork&#38;&#35;37&#59;7cnav_reports&#60;&#47;Action&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;IconPath&#62;&#60;&#47;IconPath&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;LastAccessed&#62;07&#38;&#35;47&#59;13&#38;&#35;47&#59;2018 06&#38;&#35;58&#59;26&#38;&#35;58&#59;09&#60;&#47;LastAccessed&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;PinStatus&#62;false&#60;&#47;PinStatus&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#60;&#47;RecentlyViewedItem&#62;&#60;RecentlyViewedItem&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;Type&#62;1&#60;&#47;Type&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;ObjectId&#62;&#38;&#35;123&#59;7D7FA7C7-95F0-47C8-8A27-2B704C061EF4&#38;&#35;125&#59;&#60;&#47;ObjectId&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;EntityTypeCode&#62;9100&#60;&#47;EntityTypeCode&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;EntityTypeName&#62;&#60;&#47;EntityTypeName&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;DisplayName&#62;&#38;&#35;25253&#59;&#38;&#35;34920&#59;&#60;&#47;DisplayName&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;Title&#62;&#38;&#35;25105&#59;&#38;&#35;30340&#59;&#38;&#35;25253&#59;&#38;&#35;34920&#59;&#60;&#47;Title&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;Action&#62;viewtype&#38;&#35;61&#59;1039&#38;&#35;38&#59;sitemappath&#38;&#35;61&#59;WorkPlace&#38;&#35;37&#59;7cMyWork&#38;&#35;37&#59;7cnav_reports&#60;&#47;Action&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;IconPath&#62;&#60;&#47;IconPath&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;LastAccessed&#62;07&#38;&#35;47&#59;13&#38;&#35;47&#59;2018 08&#38;&#35;58&#59;51&#38;&#35;58&#59;32&#60;&#47;LastAccessed&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;PinStatus&#62;false&#60;&#47;PinStatus&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#60;&#47;RecentlyViewedItem&#62;&#60;RecentlyViewedItem&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;Type&#62;1&#60;&#47;Type&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;ObjectId&#62;&#38;&#35;123&#59;5579F470-EBBF-46D7-9EC6-25B4F50DCB8B&#38;&#35;125&#59;&#60;&#47;ObjectId&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;EntityTypeCode&#62;9100&#60;&#47;EntityTypeCode&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;EntityTypeName&#62;&#60;&#47;EntityTypeName&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;DisplayName&#62;&#38;&#35;25253&#59;&#38;&#35;34920&#59;&#60;&#47;DisplayName&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;Title&#62;&#38;&#35;31649&#59;&#38;&#35;29702&#59;&#38;&#35;25253&#59;&#38;&#35;34920&#59;&#60;&#47;Title&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;Action&#62;viewtype&#38;&#35;61&#59;1039&#38;&#35;38&#59;sitemappath&#38;&#35;61&#59;WorkPlace&#38;&#35;37&#59;7cMyWork&#38;&#35;37&#59;7cnav_reports&#60;&#47;Action&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;IconPath&#62;&#60;&#47;IconPath&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;LastAccessed&#62;07&#38;&#35;47&#59;13&#38;&#35;47&#59;2018 09&#38;&#35;58&#59;37&#38;&#35;58&#59;46&#60;&#47;LastAccessed&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;PinStatus&#62;false&#60;&#47;PinStatus&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#60;&#47;RecentlyViewedItem&#62;&#60;RecentlyViewedItem&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;Type&#62;1&#60;&#47;Type&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;ObjectId&#62;&#38;&#35;123&#59;23E5B494-6A64-4CDC-BEB4-F706698FB492&#38;&#35;125&#59;&#60;&#47;ObjectId&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;EntityTypeCode&#62;9100&#60;&#47;EntityTypeCode&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;EntityTypeName&#62;&#60;&#47;EntityTypeName&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;DisplayName&#62;&#38;&#35;25253&#59;&#38;&#35;34920&#59;&#60;&#47;DisplayName&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;Title&#62;&#38;&#35;26381&#59;&#38;&#35;21153&#59;&#38;&#35;25253&#59;&#38;&#35;34920&#59;&#60;&#47;Title&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;Action&#62;viewtype&#38;&#35;61&#59;1039&#38;&#35;38&#59;sitemappath&#38;&#35;61&#59;WorkPlace&#38;&#35;37&#59;7cMyWork&#38;&#35;37&#59;7cnav_reports&#60;&#47;Action&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;IconPath&#62;&#60;&#47;IconPath&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;LastAccessed&#62;07&#38;&#35;47&#59;15&#38;&#35;47&#59;2018 03&#38;&#35;58&#59;13&#38;&#35;58&#59;44&#60;&#47;LastAccessed&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;PinStatus&#62;false&#60;&#47;PinStatus&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#60;&#47;RecentlyViewedItem&#62;&#60;RecentlyViewedItem&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;Type&#62;1&#60;&#47;Type&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;ObjectId&#62;&#38;&#35;123&#59;68CA817C-3271-4C32-ABE6-80E18899365C&#38;&#35;125&#59;&#60;&#47;ObjectId&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;EntityTypeCode&#62;9100&#60;&#47;EntityTypeCode&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;EntityTypeName&#62;&#60;&#47;EntityTypeName&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;DisplayName&#62;&#38;&#35;25253&#59;&#38;&#35;34920&#59;&#60;&#47;DisplayName&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;Title&#62;&#38;&#35;24066&#59;&#38;&#35;22330&#59;&#38;&#35;33829&#59;&#38;&#35;38144&#59;&#38;&#35;25253&#59;&#38;&#35;34920&#59;&#60;&#47;Title&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;Action&#62;viewtype&#38;&#35;61&#59;1039&#38;&#35;38&#59;sitemappath&#38;&#35;61&#59;WorkPlace&#38;&#35;37&#59;7cMyWork&#38;&#35;37&#59;7cnav_reports&#60;&#47;Action&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;IconPath&#62;&#60;&#47;IconPath&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;LastAccessed&#62;07&#38;&#35;47&#59;15&#38;&#35;47&#59;2018 03&#38;&#35;58&#59;24&#38;&#35;58&#59;59&#60;&#47;LastAccessed&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;PinStatus&#62;false&#60;&#47;PinStatus&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#60;&#47;RecentlyViewedItem&#62;&#60;RecentlyViewedItem&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;Type&#62;1&#60;&#47;Type&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;ObjectId&#62;&#38;&#35;123&#59;687635FF-5117-40C8-9A04-3467307134E1&#38;&#35;125&#59;&#60;&#47;ObjectId&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;EntityTypeCode&#62;9100&#60;&#47;EntityTypeCode&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;EntityTypeName&#62;&#60;&#47;EntityTypeName&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;DisplayName&#62;&#38;&#35;25253&#59;&#38;&#35;34920&#59;&#60;&#47;DisplayName&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;Title&#62;&#38;&#35;21487&#59;&#38;&#35;29992&#59;&#38;&#35;25253&#59;&#38;&#35;34920&#59;&#60;&#47;Title&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;Action&#62;viewtype&#38;&#35;61&#59;1039&#38;&#35;38&#59;sitemappath&#38;&#35;61&#59;WorkPlace&#38;&#35;37&#59;7cMyWork&#38;&#35;37&#59;7cnav_reports&#60;&#47;Action&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;IconPath&#62;&#60;&#47;IconPath&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;LastAccessed&#62;07&#38;&#35;47&#59;15&#38;&#35;47&#59;2018 06&#38;&#35;58&#59;35&#38;&#35;58&#59;44&#60;&#47;LastAccessed&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#9;&#60;PinStatus&#62;false&#60;&#47;PinStatus&#62;&#13;&#10;&#9;&#9;&#9;&#9;&#9;&#60;&#47;RecentlyViewedItem&#62;&#60;&#47;RecentlyViewedEntityData&#62;&#60;&#47;RecentlyViewedData&#62;</recentlyViewedXml><retrieveAfterUpdated>false</retrieveAfterUpdated></UploadRecentlyViewed></soap:Body></soap:Envelope>";
            StringEntity myEntity = new StringEntity(wsdlData, ContentType.create("text/xml", "UTF-8"));
            httpPost.setEntity(myEntity);
            //发送请求
            ResponseHandler<String> responseHandler = new ResponseHandler<String>() {
                public String handleResponse(final HttpResponse response) throws ClientProtocolException, IOException {
                    int status = response.getStatusLine().getStatusCode();
                    HttpEntity entity = response.getEntity();
                    String res = entityToString(entity);
                    System.err.println("ashx请求的返回码:" + status + ":" + res);
                    return res;
                }
            };
            //返回的json对象
            String responseBody = httpclient.execute(httpPost, responseHandler);
            httpclient.close();
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }


    private static  String entityToString(HttpEntity entity) throws IOException {
        String result = "";
        if (entity != null) {
            InputStreamReader inputStreamReader = new InputStreamReader(entity.getContent());
            String s = inputStreamReader.getEncoding();
            BufferedReader bufferedReader = new BufferedReader(inputStreamReader);
            String line = "";
            while ((line = bufferedReader.readLine()) != null) {
                result += line;

            }
        }
        return result;
    }


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


}