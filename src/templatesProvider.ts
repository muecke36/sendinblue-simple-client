const SibApiV3Sdk = require('sib-api-v3-sdk');
let defaultClient = SibApiV3Sdk.ApiClient.instance;

export const templatesProvider = (
  templateNumber = 0,
  clientApiKey = '',
): Promise<string> =>
  new Promise((resolve, reject) => {
    let apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = clientApiKey;

    let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    let templateId = templateNumber;

    apiInstance
      .getSmtpTemplate(templateId)
      .then((data: any) => resolve(data.htmlContent), reject)
      .catch((err: Error) => {
        console.log(err);
        return null;
      });
  });

export default templatesProvider;
