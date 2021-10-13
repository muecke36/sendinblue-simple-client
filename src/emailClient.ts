import { MailerOptions } from '.';

const SibApiV3Sdk = require('sib-api-v3-sdk');
const defaultClient = SibApiV3Sdk.ApiClient.instance;

export const emailClient = (
  { sender, to, contentParams, subject, content = '' }: MailerOptions,
  clientApiKey: string,
) =>
  new Promise((resolve, reject) => {
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

export default emailClient;
