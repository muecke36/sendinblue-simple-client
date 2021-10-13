var SibApiV3Sdk = require('sib-api-v3-sdk');
var defaultClient = SibApiV3Sdk.ApiClient.instance;

const sendEmail = (
  { sender, to, contentParams, subject, content = '' },
  clientApiKey,
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

module.exports = sendEmail;
