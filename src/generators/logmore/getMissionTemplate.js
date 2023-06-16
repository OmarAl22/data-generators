const faker = require('faker');

const generateJSON = () => {
  const allowedOperations = [
    'can_edit',
    'can_read',
    'can_use'
  ];

  const alertRulesLength = faker.datatype.number({ min: 1, max: 5 });

  const alertRules = Array.from({ length: alertRulesLength }).map(() => ({
    type: 'sensor',
    description: faker.lorem.sentence(),
    sensor: faker.datatype.number(),
    delay: faker.datatype.number(),
    method: faker.random.arrayElement(['lt', 'gt', 'eq']),
    limit: faker.datatype.number(),
    set_active: faker.datatype.boolean()
  }));

  const json = {
    id: faker.datatype.uuid(),
    description: faker.lorem.sentence(),
    naming_guide: faker.lorem.sentence(),
    archived: faker.datatype.boolean(),
    allowed_operations: allowedOperations,
    increment: faker.datatype.number(),
    name: faker.lorem.words(),
    mission_name: {
      format: `Mission {i}`,
      ask_on_creation: faker.datatype.boolean()
    },
    mission_note: {
      format: `Mission {i}`,
      ask_on_creation: faker.datatype.boolean()
    },
    alert_rules: alertRules
  };

  return json;
};

const json = JSON.stringify(generateJSON(), null, 2);
console.log(json);
