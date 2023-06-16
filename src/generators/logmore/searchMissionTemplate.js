const faker = require('faker');

const generateJSON = () => {
  const allowedOperations = Array.from({ length: faker.datatype.number({ min: 1, max: 5 }) }, () => faker.random.word());

  const alertRules = [
    {
      type: 'sensor',
      description: 'stuffs freezing....',
      sensor: faker.datatype.number(),
      delay: faker.datatype.number(),
      method: 'lt',
      limit: -3,
      set_active: true
    }
  ];

  const json = [
    {
      id: faker.datatype.uuid(),
      description: 'Mission Template Description',
      naming_guide: 'Mission naming guide',
      archived: faker.datatype.boolean(),
      allowed_operations: allowedOperations,
      increment: 1,
      name: 'Mission Template',
      mission_name: {
        format: `Mission ${faker.datatype.number()}`,
        ask_on_creation: faker.datatype.boolean()
      },
      mission_note: {
        format: `Mission ${faker.datatype.number()}`,
        ask_on_creation: faker.datatype.boolean()
      },
      alert_rules: alertRules
    }
  ];

  return json;
};

const json = JSON.stringify(generateJSON(), null, 2);
console.log(json);
