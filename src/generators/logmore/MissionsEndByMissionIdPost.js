const faker = require('faker');

const generateAlertLog = () => {
  return {
    ack_id: faker.datatype.uuid(),
    ack_time: faker.date.past().toISOString(),
    ack_count: faker.datatype.number(),
    ack_user: faker.datatype.uuid(),
    loggers: [faker.datatype.uuid()],
    from: faker.date.past().toISOString(),
    to: faker.date.past().toISOString()
  };
};

const generateComment = () => {
  return {
    updated_at: faker.date.past().toISOString(),
    created_at: faker.date.past().toISOString(),
    id: faker.datatype.uuid(),
    comment: faker.lorem.sentence(),
    user_id: faker.datatype.uuid(),
    user_email: faker.internet.email(),
    user_name: faker.name.findName()
  };
};

const generateAlertRule = () => {
  return {
    id: faker.datatype.uuid(),
    mission_id: faker.datatype.uuid(),
    type: 'sensor',
    description: faker.lorem.sentence(),
    ack_log: [generateAlertLog()],
    sensor: faker.datatype.number(),
    delay: faker.datatype.number(),
    method: 'lt',
    limit: faker.datatype.number()
  };
};

const generateJSON = () => {
  return {
    id: faker.datatype.uuid(),
    allowed_operations: ['can_edit', 'can_read', 'can_leave_comments'],
    name: 'Mission',
    updated_at: faker.date.past().toISOString(),
    created_at: faker.date.past().toISOString(),
    starts_at: faker.date.past().toISOString(),
    ends_at: faker.date.future().toISOString(),
    loggers: [faker.datatype.uuid()],
    note: faker.lorem.word(),
    ended_by: faker.datatype.uuid(),
    comments: [generateComment()],
    alert_rules: [generateAlertRule()],
    alert_hits_count: faker.datatype.number(),
    public: true,
    archived: true,
    logger_aliases: {
      [faker.datatype.uuid()]: 'Logger #1'
    }
  };
};

const json = JSON.stringify(generateJSON());
console.log(json);
