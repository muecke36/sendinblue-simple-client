# SendinBlue Simplified Client

To install you only need to:

```
yarn install
```

Example of usage:

```javascript
import ClientSendingBlue from 'sendinblue-simple-client';

const mySecretApiKey = process.env.API_KEY; 

async function main() {
  const emailClient = new ClientSendingBlue(
    mySecretApiKey,
  );
  const sender = { name: 'dotnotreply', email: 'dotnotreply@mydomain.com.br' };

  const destination = {
    name: 'John',
    email: 'john@doe.com',
  };
  
  const content = await emailClient.templatesProvider(3);
  if (content) {
    try {
      const response = await emailClient.sendEmail({
        sender: sender,
        to: [destination],
        subject: '[SUBJECT-here] MY Subject',

        content: content,
        contentParams: {
          name: 'John Doe',
          someOtherParam: '123123',
        },
      });
      console.log(response);
    } catch (error) {
      console.lor(error);
    }
  }
}

main();
```
