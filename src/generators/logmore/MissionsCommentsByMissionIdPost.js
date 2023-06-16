const faker = require('faker');

const generateJSON = () => {
  const json = {
    updated_at: faker.date.recent().toISOString(),
    created_at: faker.date.recent().toISOString(),
    id: faker.datatype.uuid(),
    comment: faker.lorem.sentence(),
    user_id: faker.datatype.uuid(),
    user_email: faker.internet.email(),
    user_name: faker.name.firstName(),
    mission_id: faker.datatype.uuid()
  };

  return json;
};

const json = JSON.stringify(generateJSON());

console.log(json);
