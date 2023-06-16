const faker = require('faker');

const generateJSON = () => {
  const id = faker.datatype.uuid();
  const loggerId = faker.datatype.uuid();
  const endedBy = faker.datatype.uuid();
  const userId = faker.datatype.uuid();
  const missionId = faker.datatype.uuid();
  const loggerAliasId = faker.datatype.uuid();
  
  const loggers = [loggerId];
  
  const commentId = faker.datatype.uuid();
  const commentsLength = faker.datatype.number({ min: 1, max: 5 });
  const comments = Array.from({ length: commentsLength }).map(() => ({
    updated_at: faker.date.recent().toISOString(),
    created_at: faker.date.recent().toISOString(),
    id: faker.datatype.uuid(),
    comment: faker.lorem.sentence(),
    user_id: userId,
    user_email: faker.internet.email(),
    user_name: faker.name.findName()
  }));
  
  const ackId = faker.datatype.uuid();
  const ackLogsLength = faker.datatype.number({ min: 1, max: 3 });
  const ackLogs = Array.from({ length: ackLogsLength }).map(() => ({
    ack_id: ackId,
    ack_time: faker.date.recent().toISOString(),
    ack_count: faker.datatype.number(),
    ack_user: userId,
    loggers: [faker.datatype.uuid()],
    from: faker.date.recent().toISOString(),
    to: faker.date.recent().toISOString()
  }));
  
  const loggerAliases = {
    [loggerAliasId]: faker.lorem.word()
  };

  const json = {
    id,
    allowed_operations: [
      "can_edit",
      "can_read",
      "can_leave_comments"
    ],
    name: "Mission",
    updated_at: faker.date.recent().toISOString(),
    created_at: faker.date.recent().toISOString(),
    starts_at: faker.date.recent().toISOString(),
    ends_at: faker.date.recent().toISOString(),
    loggers,
    note: faker.lorem.word(),
    ended_by: endedBy,
    comments,
    alert_rules: [
      {
        id: faker.datatype.uuid(),
        mission_id: missionId,
        type: "sensor",
        description: faker.lorem.sentence(),
        ack_log: ackLogs,
        sensor: faker.datatype.number(),
        delay: faker.datatype.number(),
        method: "lt",
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
