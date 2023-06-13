const faker = require('faker');

const generateJSON = () => {
  return {
    id: faker.datatype.uuid(),
    mission_id: faker.datatype.uuid(),
    type: 'sensor',
    description: faker.lorem.sentence(),
    sensor: faker.datatype.number(),
    delay: faker.datatype.number(),
    method: 'lt',
    limit: faker.datatype.number()
  };
};

const json = JSON.stringify(generateJSON());

console.log(json);
