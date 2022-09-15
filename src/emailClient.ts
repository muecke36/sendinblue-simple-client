import { MailerOptions } from '.';

const SibApiV3Sdk = require('sib-api-v3-sdk');
const defaultClient = SibApiV3Sdk.ApiClient.instance;

export const emailClient = (
  { sender, to, contentParams, subject, content = '' }: MailerOptions,
  clientApiKey: string,
) =>
  new Promise((resolve: any, reject: any) => {
    const apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = clientApiKey;

    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    sendSmtpEmail.subject = subject;
    sendSmtpEmail.htmlContent = content;
    sendSmtpEmail.sender = sender;
    sendSmtpEmail.to = to;
    sendSmtpEmail.params = {
      parameter: '',
      ...contentParams,
    };
    apiInstance.sendTransacEmail(sendSmtpEmail).then(resolve, reject);
  });

export const emailClientByTemplateId = (
  { sender, to, contentParams, subject, templateId = 0 }: MailerOptions,
  clientApiKey: string,
) =>
  new Promise((resolve: (arg0: null) => any) => {
    const apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = clientApiKey;

    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    sendSmtpEmail.subject = subject;
    sendSmtpEmail.templateId = templateId;
    sendSmtpEmail.sender = sender;
    sendSmtpEmail.to = to;
    sendSmtpEmail.params = {
      parameter: '',
      ...contentParams,
    };
    apiInstance
      .sendTransacEmail(sendSmtpEmail)
      .then(resolve, () => resolve(null));
  });

export const updateTemplate = (
  templateId: number,
  content: string,
  clientApiKey: string
) =>
  new Promise((resolve: (arg0: null) => any) => {
    const apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = clientApiKey;

    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    let smtpTemplate = new SibApiV3Sdk.UpdateSmtpTemplate();
    smtpTemplate.htmlContent = content;

    apiInstance.updateSmtpTemplate(templateId, smtpTemplate).then(resolve, (error) => {
      console.error(error);
      resolve(null)
    });
  });


export default emailClient;
