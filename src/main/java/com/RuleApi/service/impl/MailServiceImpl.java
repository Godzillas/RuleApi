package com.RuleApi.service.impl;

import java.io.File;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.RuleApi.service.MailService;

@Service
@PropertySource(value="classpath:mail.properties", encoding="utf-8", ignoreResourceNotFound = true)
public class MailServiceImpl implements MailService{

    private final Logger log = LoggerFactory.getLogger(MailServiceImpl.class);

    @Value("${spring.mail.default-encoding}")
    public String defaultEncoding;

    /**
     * Spring Boot 提供了一个发送邮件的简单抽象，使用的是下面这个接口，这里直接注入即可使用
     */
    @Autowired
    private JavaMailSender mailSender;

    @Value(value = "${spring.mail.username}")
    private String username;

    @Value(value = "${email.from.name}")
    private String emailFromName;


    /**
     * 处理附件
     */
    @Override
    public void handleAttachments(MimeMessageHelper mimeMessageHelper, String subject, String[] attachmentFilePaths){
        //判断是否需要处理邮件的附件
        if(attachmentFilePaths != null && attachmentFilePaths.length > 0) {
            FileSystemResource resource;
            String fileName;
            //循环处理邮件的附件
            for (String attachmentFilePath : attachmentFilePaths) {
                //获取该路径所对应的文件资源对象
                resource = new FileSystemResource(new File(attachmentFilePath));
                //判断该资源是否存在，当不存在时仅仅会打印一条警告日志，不会中断处理程序。
                // 也就是说在附件出现异常的情况下，邮件是可以正常发送的，所以请确定你发送的邮件附件在本机存在
                if (!resource.exists()) {
                    log.warn("邮件->{} 的附件->{} 不存在！", subject, attachmentFilePath);
                    //开启下一个资源的处理
                    throw new RuntimeException("邮件需要发送的附件不存在。");
                }
                //获取资源的名称
                fileName = resource.getFilename();
                try {
                    //添加附件
                    mimeMessageHelper.addAttachment(fileName, resource);
                } catch (MessagingException e) {
                    e.printStackTrace();
                    log.error("邮件->{} 添加附件->{} 出现异常->{}", subject, attachmentFilePath, e.getMessage());
                }
            }
        }
    }


    /**
     * 发送附件
     * @param subject 邮件主题
     * @param content 邮件内容
     * @param toEmails 接收的邮箱
     * @param ccPeoples 抄送人
     * @param bccPeoples 密送人，就是发送人和抄送人那里都不显示该收件人，但能收到邮件。
     * @param attachmentFilePaths 附件
     * @throws MessagingException
     */
    @Override
    public void send(String subject, String content,
                     String[] toEmails, String[] ccPeoples, String[] bccPeoples,
                     String[] attachmentFilePaths) throws MessagingException {
        //附件处理需要进行二进制传输
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true, defaultEncoding);

        //设置发件人
        log.info("emailFromName = " + emailFromName);
        //log.info("from = " + from);
        mimeMessageHelper.setFrom(emailFromName + "<"+ username + ">");

        //设置邮件的主题
        log.info("subject = " + subject);
        mimeMessageHelper.setSubject(subject);

        //设置邮件的内容，区别是否是HTML邮件
        mimeMessageHelper.setText(content, true);//所有都以html格式发送

        //设置邮件的收件人
        log.info("toEmails = " + toEmails);
        mimeMessageHelper.setTo(toEmails);

        if(ccPeoples != null && ccPeoples.length > 0) {
            //设置邮件的抄送人
            mimeMessageHelper.setCc(ccPeoples);
        }

        if(bccPeoples != null && bccPeoples.length > 0) {
            //设置邮件的密送人
            mimeMessageHelper.setBcc(bccPeoples);
        }

        if(attachmentFilePaths != null && attachmentFilePaths.length > 0) {
            handleAttachments(mimeMessageHelper, subject, attachmentFilePaths);
        }

        mailSender.send(mimeMessage);
    }

    /**
     * 发送附件
     * @param subject String 邮件主题
     * @param content String 邮件内容
     * @param toEmails String[] 接收的邮箱
     */
    @Override
    public void send(String subject, String content, String[] toEmails) throws MessagingException {

        this.send(subject, content, toEmails, null, null, null);

    }


    /**
     * 发送附件
     * @param subject String 邮件主题
     * @param content String 邮件内容
     * @param toEmails String[] 接收的邮箱
     * @param attachmentFilePaths String[] 附件
     * @throws MessagingException
     */
    @Override
    public void send(String subject, String content, String[] toEmails, String[] attachmentFilePaths) throws MessagingException {

        this.send(subject, content, toEmails, null, null, attachmentFilePaths);

    }




}