const faker = require('faker');

const generateJSON = () => {
  const json = {
    id: faker.datatype.uuid(),
    allowed_operations: [
      "can_edit",
      "can_read",
      "can_leave_comments"
    ],
    name: faker.lorem.word(),
    updated_at: faker.date.past().toISOString(),
    created_at: faker.date.past().toISOString(),
    starts_at: faker.date.past().toISOString(),
    ends_at: faker.date.future().toISOString(),
    loggers: [
      faker.datatype.uuid()
    ],
    note: faker.lorem.sentence(),
    ended_by: faker.datatype.uuid(),
    comments: [
      {
        updated_at: faker.date.past().toISOString(),
        created_at: faker.date.past().toISOString(),
        id: faker.datatype.uuid(),
        comment: faker.lorem.sentence(),
        user_id: faker.datatype.uuid(),
        user_email: faker.internet.email(),
        user_name: faker.internet.userName()
      }
    ],
    alert_rules: [
      {
        id: faker.datatype.uuid(),
        mission_id: faker.datatype.uuid(),
        type: "sensor",
        description: faker.lorem.sentence(),
        ack_log: [
          {
            ack_id: faker.datatype.uuid(),
            ack_time: faker.date.past().toISOString(),
            ack_count: faker.datatype.number(),
            ack_user: faker.datatype.uuid(),
            loggers: [
              faker.datatype.uuid()
            ],
            from: faker.date.past().toISOString(),
            to: faker.date.future().toISOString()
          }
        ],
        sensor: faker.datatype.number(),
        delay: faker.datatype.number(),
        method: "lt",
        limit: faker.datatype.number({ min: -10, max: 10 })
      }
    ],
    alert_hits_count: faker.datatype.number(),
    public: faker.datatype.boolean(),
    archived: faker.datatype.boolean(),
    logger_aliases: {
      [faker.datatype.uuid()]: faker.lorem.word()
    }
  };

  return json;
};

const json = JSON.stringify(generateJSON());

console.log(json);
