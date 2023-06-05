const faker = require('faker');

const generateMission = () => {
  const missionId = faker.datatype.uuid();

  return {
    id: missionId,
    allowed_operations: ['can_edit', 'can_read', 'can_leave_comments'],
    name: 'Mission',
    updated_at: faker.date.past().toISOString(),
    created_at: faker.date.past().toISOString(),
    starts_at: faker.date.past().toISOString(),
    ends_at: faker.date.past().toISOString(),
    loggers: [faker.datatype.uuid()],
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
        user_name: faker.name.findName(),
      },
    ],
    alert_rules: [
      {
        id: faker.datatype.uuid(),
        mission_id: faker.datatype.uuid(),
        type: 'sensor',
        description: faker.lorem.sentence(),
        ack_log: [
          {
            ack_id: faker.datatype.uuid(),
            ack_time: faker.date.past().toISOString(),
            ack_count: faker.datatype.number(),
            ack_user: faker.datatype.uuid(),
            loggers: [faker.datatype.uuid()],
            from: faker.date.past().toISOString(),
            to: faker.date.past().toISOString(),
          },
        ],
        sensor: faker.datatype.number(),
        delay: faker.datatype.number(),
        method: 'lt',
        limit: faker.datatype.number(),
      },
    ],
    alert_hits_count: faker.datatype.number(),
    public: true,
    archived: true,
    logger_aliases: {
      [faker.datatype.uuid()]: 'Logger #1',
    },
  };
};

const generateMeasurement = () => {
  return {
    last_val: faker.datatype.number(),
    last_date: faker.date.past().toISOString(),
    unit: 'C',
    channel_id: faker.datatype.number(),
    name: faker.lorem.word(),
  };
};

const generateJSON = () => {
  const data = {
    id: faker.datatype.uuid(),
    name: faker.lorem.word(),
    serial: faker.datatype.number(),
    location_note: faker.lorem.sentence(),
    device_last_config: faker.datatype.number(),
    latest_missions: [generateMission()],
    last_scan: {
      id: faker.datatype.uuid(),
      logger_id: faker.datatype.uuid(),
      new_data: faker.datatype.number(),
      data_count: faker.datatype.number(),
      device_conf_version: faker.datatype.number(),
      config_id: faker.datatype.uuid(),
      location: {
        type: 'point',
        coordinates: [0],
      },
      protocol: faker.datatype.number(),
      battery_level: faker.datatype.number({ min: 0, max: 100 }),
      created_at: faker.date.past().toISOString(),
      ip: faker.internet.ip(),
      useragent: faker.internet.userAgent(),
      status: 'ok',
    },
    config_id: faker.datatype.uuid(),
    has_ongoing_missions: true,
    missions: [generateMission()],
    latest_measurements: [generateMeasurement()],
    archived: true,
    public: true,
    linked_at: faker.date.past().toISOString(),
    linked_by: faker.datatype.uuid(),
    type: faker.random.arrayElement(['type1', 'type2', 'type3']),
    firmware_version: faker.system.semver(),
  };

  return JSON.stringify(data, null, 2);
};

const json = generateJSON();
console.log(json);
