const SibApiV3Sdk = require('sib-api-v3-sdk');
let defaultClient = SibApiV3Sdk.ApiClient.instance;

const templatesProvider = (templateNumber = 0, clientApiKey = '') =>
  new Promise((resolve) => {
    let apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = clientApiKey;

    let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    let templateId = templateNumber;

    apiInstance.getSmtpTemplate(templateId).then(
      function (data) {
        resolve(data.htmlContent);
      },
      function (error) {
        console.error(error);
        resolve(null);
      },
    );
  });

module.exports = templatesProvider;
