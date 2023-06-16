const faker = require('faker');

const generateJSON = () => {
  const json = {
    id: faker.datatype.uuid(),
    allowed_operations: ["can_edit", "can_read", "can_leave_comments"],
    name: "Mission",
    updated_at: faker.date.recent().toISOString(),
    created_at: faker.date.recent().toISOString(),
    starts_at: faker.date.recent().toISOString(),
    ends_at: faker.date.recent().toISOString(),
    loggers: [faker.datatype.uuid()],
    note: "string",
    ended_by: faker.datatype.uuid(),
    comments: [
      {
        updated_at: faker.date.recent().toISOString(),
        created_at: faker.date.recent().toISOString(),
        id: faker.datatype.uuid(),
        comment: faker.lorem.sentence(),
        user_id: faker.datatype.uuid(),
        user_email: faker.internet.email(),
        user_name: faker.name.firstName(),
      },
    ],
    alert_rules: [
      {
        id: faker.datatype.uuid(),
        mission_id: faker.datatype.uuid(),
        type: "sensor",
        description: "stuffs freezing....",
        ack_log: [
          {
            ack_id: faker.datatype.uuid(),
            ack_time: faker.date.recent().toISOString(),
            ack_count: faker.datatype.number(),
            ack_user: faker.datatype.uuid(),
            loggers: [faker.datatype.uuid()],
            from: faker.date.past().toISOString(),
            to: faker.date.past().toISOString(),
          },
        ],
        sensor: faker.datatype.number(),
        delay: faker.datatype.number(),
        method: "lt",
        limit: faker.datatype.number({ min: -10, max: 10 }),
      },
    ],
    alert_hits_count: faker.datatype.number(),
    public: true,
    archived: true,
    logger_aliases: {
      [faker.datatype.uuid()]: "Logger #1",
    },
  };

  return json;
};

const json = JSON.stringify(generateJSON());

console.log(json);
