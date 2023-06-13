const faker = require('faker');

const generateJSON = () => {
  return {
    id: faker.datatype.uuid(),
    rule_id: faker.datatype.uuid(),
    logger_id: faker.datatype.uuid(),
    ts: faker.date.past().toISOString(),
    sensor: faker.datatype.number(),
    val: faker.datatype.float(),
    violation: faker.datatype.float(),
    ack_ref: faker.datatype.uuid()
  };
};

const jsonData = [generateJSON()];
const json = JSON.stringify(jsonData);

console.log(json);
