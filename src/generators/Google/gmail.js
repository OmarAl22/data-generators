const faker = require('faker');
faker.locale = 'en';

const generateEmail = () => {
  const sender = faker.internet.email();
  const date = faker.date.recent();
  const content = faker.lorem.paragraph();
  const subject = faker.lorem.sentence();
  const url = faker.internet.url();

  return {
    Sender: sender,
    Date: date.toISOString(),
    Content: content,
    Subject: subject,
    URL: url,
  };
};

const gmailData = [];

for (let i = 0; i < 10; i++) {
  gmailData.push(generateEmail());
}

const json = JSON.stringify(gmailData, null, 2);

console.log(json);
