# SendinBlue Simplified Client

To install you only need to:

```
yarn add sendinblue-simple-client
```

Example of usage:

```javascript
import ClientSendingBlue, { EmailUser } from 'sendinblue-simple-client';

const mySecretApiKey = process.env.API_KEY;

async function main() {
  const emailClient: ClientSendingBlue = new ClientSendingBlue(mySecretApiKey);

  const sender: EmailUser = {
    name: 'dotnotreply',
    email: 'dotnotreply@mydomain.com.br',
  };

  const destination: EmailUser = {
    name: 'John',
    email: 'john@doe.com',
  };

  const content = await emailClient.templatesProvider(3);
  if (content) {
    try {
      const responseOfContent = await emailClient.sendEmail({
        sender: sender,
        to: [destination],
        subject: '[SUBJECT-here] MY Subject',
        content: content,
        contentParams: {
          name: 'John Doe',
          someOtherParam: '123123',
        },
      });

      // or send using a template Id
      const responseOfsendByTemplateId =
        await emailClient.sendEmailWithTemplateById({
          sender: sender,
          to: [destination],
          subject: '[SUBJECT-here] MY Subject',
          contentParams: {
            name: 'John Doe',
            someOtherParam: '123123',
          },
          templateId: 1,
        });

      console.log({ responseOfContent, responseOfsendByTemplateId });
    } catch (error) {
      console.log(error);
    }
  }
}

main();
```
