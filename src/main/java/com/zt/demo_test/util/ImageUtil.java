package com.zt.demo_test.util;

import java.awt.image.BufferedImage;
import java.io.*;

import javax.imageio.ImageIO;

/**
 * @Author: zt
 * 图像二值化处理
 * @Date: 2018/7/19 19:42
 */
public class ImageUtil {


    public void binaryImage() throws IOException {
        File file = new File("C:\\Users\\61959\\Desktop\\logo1_.jpg");
        BufferedImage image = ImageIO.read(file);

        int width = image.getWidth();
        int height = image.getHeight();

        BufferedImage grayImage = new BufferedImage(width, height, BufferedImage.TYPE_BYTE_BINARY);//重点，技巧在这个参数BufferedImage.TYPE_BYTE_BINARY
        for (int i = 0; i < width; i++) {
            for (int j = 0; j < height; j++) {
                int rgb = image.getRGB(i, j);
                grayImage.setRGB(i, j, rgb);
            }
        }

        File newFile = new File("C:\\Users\\61959\\Desktop\\logo1_2.jpg");
        ImageIO.write(grayImage, "jpg", newFile);
    }

    /**
     * 将图片的byte[]转成灰度的byte[]
     * @param imgByte
     * @return
     * @throws IOException
     */
    public static byte[] grayImage(byte[] imgByte) throws IOException {
        ByteArrayInputStream in = new ByteArrayInputStream(imgByte);    //将b作为输入流；
        BufferedImage image = ImageIO.read(in);     //将in作为输入流，读取图片存入image中，而这里in可以为ByteArrayInputStream();
        int width = image.getWidth();
        int height = image.getHeight();

        BufferedImage grayImage = new BufferedImage(width, height, BufferedImage.TYPE_BYTE_GRAY);//重点，技巧在这个参数BufferedImage.TYPE_BYTE_GRAY
//        BufferedImage grayImage = new BufferedImage(width, height, 6);
        for (int i = 0; i < width; i++) {
            for (int j = 0; j < height; j++) {
                int rgb = image.getRGB(i, j);
                grayImage.setRGB(i, j, rgb);
            }
        }
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        ImageIO.write(grayImage, "jpg", byteArrayOutputStream);

        File file = new File("C:\\Users\\61959\\Desktop\\logo\\logo4_.jpg");
        FileOutputStream fileOutputStream = new FileOutputStream(file);
        fileOutputStream.write(byteArrayOutputStream.toByteArray());


        return byteArrayOutputStream.toByteArray();
    }

}
