const faker = require('faker');
faker.locale = 'en';
const generateData = () => {
  const data = {
    updated_at: faker.date.recent().toISOString(),
    created_at: faker.date.recent().toISOString(),
    id: faker.datatype.uuid(),
    comment: faker.lorem.sentence(),
    user_id: faker.datatype.uuid(),
    user_email: faker.internet.email(),
    user_name: faker.name.firstName(),
    logger_id: faker.datatype.uuid()
  };

  return data;
};

const jsonData = generateData();
const json = JSON.stringify(jsonData, null, 2);

console.log(json);
