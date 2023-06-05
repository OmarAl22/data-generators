const faker = require('faker');

const generateMission = () => {
  const mission = {
    id: faker.datatype.uuid(),
    name: faker.random.word(),
    starts_at: faker.date.past().toISOString(),
    ends_at: faker.date.future().toISOString(),
    note: faker.lorem.sentence(),
    public: faker.datatype.boolean(),
    archived: faker.datatype.boolean(),
    has_alerts: faker.datatype.boolean(),
    has_unacked_alerts: faker.datatype.boolean(),
    needs_attention: faker.datatype.boolean(),
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
    mission_template_id: faker.datatype.uuid(),
    status: faker.random.arrayElement(['Ongoing', 'Scheduled', 'Ended']),
  };

  return mission;
};

const generateMeasurement = () => {
  const measurement = {
    last_val: faker.datatype.number(),
    last_date: faker.date.past().toISOString(),
    unit: faker.random.word(),
    channel_id: faker.datatype.number(),
    name: faker.random.word(),
  };

  return measurement;
};

const generatePermission = () => {
  const permission = {
    subject_id: faker.datatype.uuid(),
    subject_type: faker.random.arrayElement(['team', 'user']),
    acc_lvl: faker.random.word(),
    user_email: faker.internet.email(),
    user_name: faker.internet.userName(),
    team_name: faker.company.companyName(),
    created_at: faker.date.past().toISOString(),
  };

  return permission;
};

const generateLog = () => {
  const log = {
    ts: faker.date.past().toISOString(),
    edited_by: faker.datatype.uuid(),
    data: {},
  };

  return log;
};

const generateJSON = () => {
  const data = {
    total_count: 1,
    has_more_items: true,
    result: [
      {
        id: faker.datatype.uuid(),
        updated_at: faker.date.past().toISOString(),
        created_at: faker.date.past().toISOString(),
        allowed_operations: [
          [
            'can_read',
            'can_edit',
            'logger_can_read_comments',
            'logger_can_leave_comments',
            'can_see_logger_location_history',
          ],
        ],
        name: faker.random.word(),
        note: faker.lorem.sentence(),
        serial: faker.datatype.number(),
        model: faker.random.word(),
        latest_missions: [generateMission()],
        latest_measurements: [generateMeasurement()],
        latest_measurement_time: faker.date.past().toISOString(),
        permissions: [generatePermission()],
        log: [generateLog()],
        public: faker.datatype.boolean(),
        linked_at: faker.date.past().toISOString(),
        meta: {},
        last_scan: generateMission().last_scan,
        last_scan_location: faker.address.city(),
        has_ongoing_missions: faker.datatype.boolean(),
        data_cap: faker.date.past().toISOString(),
      },
    ],
  };

  return JSON.stringify(data, null, 2);
};

const json = generateJSON();
console.log(json);