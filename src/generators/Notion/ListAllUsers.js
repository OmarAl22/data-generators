const faker = require('faker');

// Generate random user data
const user1 = {
  object: 'user',
  id: faker.datatype.uuid(),
  type: 'person',
  person: {
    email: faker.internet.email(),
  },
  name: faker.name.findName(),
  avatar_url: faker.image.avatar(),
};

const user2 = {
  object: 'user',
  id: faker.datatype.uuid(),
  type: 'bot',
  bot: {},
  name: faker.name.findName(),
  avatar_url: faker.image.avatar(),
};

// Create JSON object
const jsonObject = {
  results: [user1, user2],
  next_cursor: faker.datatype.uuid(),
  has_more: true,
};

// Convert object to JSON string
const jsonString = JSON.stringify(jsonObject);

console.log(jsonString);