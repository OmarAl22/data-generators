const faker = require('faker');

const generateJSON = () => {
  const teams = [];
  const alertRules = [];

  // Generate a random number of teams (1 to 5)
  const numTeams = faker.datatype.number({ min: 1, max: 5 });
  for (let i = 0; i < numTeams; i++) {
    teams.push(faker.datatype.uuid());
  }

  // Generate a random number of alert rules (1 to 3)
  const numAlertRules = faker.datatype.number({ min: 1, max: 3 });
  for (let i = 0; i < numAlertRules; i++) {
    const alertRule = {
      type: 'sensor',
      description: faker.lorem.sentence(),
      sensor: faker.datatype.number(),
      delay: faker.datatype.number(),
      method: faker.lorem.word(),
      limit: faker.datatype.number(),
      set_active: faker.datatype.boolean()
    };
    alertRules.push(alertRule);
  }

  const json = {
    description: 'Mission Template Description',
    naming_guide: 'Mission naming guide',
    name: 'Mission Template',
    mission_name: {
      format: 'Mission {i}',
      ask_on_creation: true
    },
    archived: false,
    mission_note: {
      format: 'Mission {i}',
      ask_on_creation: true
    },
    teams,
    alert_rules: alertRules
  };

  return json;
};

const json = JSON.stringify(generateJSON(), null, 2);
console.log(json);
