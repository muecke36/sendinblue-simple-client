import bent from 'bent';
import { ContactInfo, ContactOptions, MailerOptions } from './index.js';

export class EmailClient {
  constructor(private apiKey: string) {}

  async sendEmail(opts: MailerOptions) {
    const post = bent('POST', 'json', { 'api-key': this.apiKey });
    let result;
    try {
      result = await post('https://api.brevo.com/v3/smtp/email', opts);
    } catch (e) {
      if (e.statusCode >= 400) throw e;
    }

    return result;
  }

  async createContact(opts: ContactOptions) {
    const post = bent('POST', 'json', { 'api-key': this.apiKey });
    let result;
    try {
      result = post('https://api.brevo.com/v3/contacts', opts);
    } catch (e) {
      if (e.statusCode >= 400) throw e;
    }

    return result;
  }

  async getContactInfo(email: string): Promise<ContactInfo> {
    const get = bent('GET', 'json', { 'api-key': this.apiKey });
    let result;
    try {
      result = get(
        `https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}`,
      );
    } catch (e) {
      if (e.statusCode >= 400) throw e;
    }

    return result;
  }

  async removeContactFromList(mailListId: string, opts: { emails: string[] }) {
    const post = bent('POST', 'json', { 'api-key': this.apiKey });
    let result;
    try {
      result = post(
        `https://api.brevo.com/v3/contacts/lists/${mailListId}/contacts/remove`,
        opts,
      );
    } catch (e) {
      if (e.statusCode >= 400) throw e;
    }

    return result;
  }
}
