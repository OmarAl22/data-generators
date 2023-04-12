const faker = require('faker');

const user = {
  object: 'user',
  id: faker.datatype.uuid(),
  type: 'person',
  person: {
    email: faker.internet.email(),
  },
  name: faker.name.findName(),
  avatar_url: faker.image.avatar(),
};

const jsonString = JSON.stringify(user);
console.log(jsonString);