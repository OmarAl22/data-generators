const faker = require('faker');

const permissions = [
  {
    subject_id: faker.random.uuid(),
    subject_type: 'user',
    acc_lvl: 'team_write',
    user_email: faker.internet.email(),
    user_name: faker.name.firstName(),
    team_name: faker.company.companyName(),
    created_at: faker.date.past().toISOString()
  }
];

const data = [
  {
    id: faker.random.uuid(),
    team_name: faker.company.companyName(),
    permissions: permissions,
    allowed_operations: ['can_read', 'can_edit']
  }
];

const json = JSON.stringify(data);

console.log(json);