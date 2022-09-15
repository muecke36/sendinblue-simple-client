const SibApiV3Sdk = require('sib-api-v3-sdk');
let defaultClient = SibApiV3Sdk.ApiClient.instance;

export const templatesProvider = (
  templateNumber = 0,
  clientApiKey = '',
): Promise<string | null> =>
  new Promise(async (resolve) => {
    try {
      let apiKey = defaultClient.authentications['api-key'];
      apiKey.apiKey = clientApiKey;

      let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

      let templateId = templateNumber;
      apiInstance.getSmtpTemplate(templateId).then(
        (data: any) => resolve(data.htmlContent),
        (err: any) => {
          console.error(JSON.stringify(err));
          resolve(null);
        },
      );
    } catch (err) {
      console.error(JSON.stringify(err));
      return null;
    }
  });

export default templatesProvider;
