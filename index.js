const sendEmail = require('./emailClientApi');
const templatesProvider = require('./templatesProvider');

const defaultOptions = {
  to: [
    {
      name: 'John Doe',
      email: 'john@doe.co',
    },
  ],
  content: '', // template from sendinblue api
  contentParams: {
    name: 'Some key',
    code: 'some value',
  }, // key and value for replace in the template
  subject: '[Subject] My subject info',
};

class SendinBlueClient {
  apiKey;
  constructor(apiKey) {
    this.apiKey = apiKey;
  }
  async sendEmail(options) {
    return await sendEmail(options, this.apiKey);
  }
  async templatesProvider(templateId = 0) {
    return await templatesProvider(templateId, this.apiKey);
  }
}

module.exports = SendinBlueClient;
