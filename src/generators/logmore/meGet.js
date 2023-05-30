const faker = require('faker');

const user = {
  id: faker.random.uuid(),
  user_id: faker.random.alphaNumeric(28),
  teams: [faker.random.uuid()],
  name: faker.name.firstName(),
  nickname: faker.internet.userName(),
  email_verified: faker.random.boolean(),
  email: faker.internet.email(),
  last_login: faker.date.past().toISOString(),
  updated_at: faker.date.past().toISOString(),
  created_at: faker.date.past().toISOString()
};

const json = JSON.stringify(user, null, 2);
console.log(json);