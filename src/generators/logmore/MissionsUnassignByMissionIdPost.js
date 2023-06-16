const faker = require('faker');

const generateJSON = () => {
  const id = faker.datatype.uuid();
  const loggers = [faker.datatype.uuid()];
  const comments = [
    {
      updated_at: faker.date.recent().toISOString(),
      created_at: faker.date.recent().toISOString(),
      id: faker.datatype.uuid(),
      comment: faker.lorem.sentence(),
      user_id: faker.datatype.uuid(),
      user_email: faker.internet.email(),
      user_name: faker.name.findName()
    }
  ];
  const ackLogs = [
    {
      ack_id: faker.datatype.uuid(),
      ack_time: faker.date.recent().toISOString(),
      ack_count: faker.datatype.number(),
      ack_user: faker.datatype.uuid(),
      loggers: [faker.datatype.uuid()],
      from: faker.date.recent().toISOString(),
      to: faker.date.recent().toISOString()
    }
  ];
  const loggerAliases = {
    [loggers[0]]: `Logger #${faker.datatype.number()}`
  };

  const json = {
    id,
    allowed_operations: [
      faker.lorem.word(),
      faker.lorem.word(),
      faker.lorem.word()
    ],
    name: faker.lorem.word(),
    updated_at: faker.date.recent().toISOString(),
    created_at: faker.date.recent().toISOString(),
    starts_at: faker.date.recent().toISOString(),
    ends_at: faker.date.recent().toISOString(),
    loggers,
    note: faker.lorem.sentence(),
    ended_by: faker.datatype.uuid(),
    comments,
    alert_rules: [
      {
        id: faker.datatype.uuid(),
        mission_id: faker.datatype.uuid(),
        type: faker.lorem.word(),
        description: faker.lorem.sentence(),
        ack_log: ackLogs,
        sensor: faker.datatype.number(),
        delay: faker.datatype.number(),
        method: faker.lorem.word(),
        limit: faker.datatype.number()
      }
    ],
    alert_hits_count: faker.datatype.number(),
    public: faker.datatype.boolean(),
    archived: faker.datatype.boolean(),
    logger_aliases: loggerAliases
  };

  return json;
};

const json = JSON.stringify(generateJSON(), null, 2);
console.log(json);
