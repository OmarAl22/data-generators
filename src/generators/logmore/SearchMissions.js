const faker = require('faker');

const generateJSON = () => {
  const data = {
    total_count: 1,
    has_more_items: faker.datatype.boolean(),
    result: [
      {
        id: faker.datatype.uuid(),
        allowed_operations: [
          'can_edit',
          'can_read',
          'can_leave_comments',
          'can_end_mission',
        ],
        name: 'Mission',
        permissions: [
          {
            subject_id: faker.datatype.uuid(),
            subject_type: 'team',
            acc_lvl: 'mission_write',
            user_email: 'support@logmore.com (if subject_type \'user\' type)',
            user_name: 'Username',
            team_name: 'Logmore LTD (if subject_type \'team\' type)',
            created_at: faker.date.past().toISOString(),
          },
        ],
        updated_at: faker.date.past().toISOString(),
        created_at: faker.date.past().toISOString(),
        starts_at: faker.date.past().toISOString(),
        ends_at: faker.date.future().toISOString(),
        log: [
          {
            ts: faker.date.past().toISOString(),
            edited_by: faker.datatype.uuid(),
            data: {},
          },
        ],
        loggers: [faker.datatype.uuid()],
        alert_rules_ids: [faker.datatype.uuid()],
        note: 'Mission note',
        ended_by: faker.datatype.uuid(),
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
        mission_loggers: [
          {
            id: faker.datatype.uuid(),
            name: 'Demo Tag',
            note: 'Note',
            meta: {},
            public_meta: {},
            serial: 1337,
            model: 'Model 3',
            public: faker.datatype.boolean(),
          },
        ],
        mission_template_id: faker.datatype.uuid(),
        status: faker.random.arrayElement([
          'Ongoing',
          'Scheduled',
          'Ended',
        ]),
        logger_aliases: {
          [faker.datatype.uuid()]: 'Logger #1',
        },
      },
    ],
  };

  return JSON.stringify(data, null, 2);
};

const json = generateJSON();
console.log(json);
