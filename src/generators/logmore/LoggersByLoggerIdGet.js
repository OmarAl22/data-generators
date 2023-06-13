const faker = require('faker');

const generateMission = () => {
  // Code for generating mission object
};

const generateData = () => {
  const mission = generateMission();

  const data = {
    id: faker.datatype.uuid(),
    name: faker.name.title(),
    serial: faker.datatype.number(),
    location_note: faker.lorem.sentence(),
    device_last_config: faker.datatype.number(),
    latest_missions: [mission],
    last_scan: {
      id: faker.datatype.uuid(),
      logger_id: faker.datatype.uuid(),
      new_data: faker.datatype.number(),
      data_count: faker.datatype.number(),
      device_conf_version: faker.datatype.number(),
      config_id: faker.datatype.uuid(),
      location: {
        type: 'point',
        coordinates: [0]
      },
      protocol: faker.datatype.number(),
      battery_level: faker.datatype.number({ min: 0, max: 100 }),
      created_at: faker.date.past().toISOString(),
      ip: faker.internet.ip(),
      useragent: faker.internet.userAgent(),
      status: 'ok'
    },
    config_id: faker.datatype.uuid(),
    has_ongoing_missions: faker.datatype.boolean(),
    missions: [mission],
    latest_measurements: [
      {
        last_val: faker.datatype.number(),
        last_date: faker.date.past().toISOString(),
        unit: 'C',
        channel_id: faker.datatype.number(),
        name: 'temperature'
      }
    ],
    archived: faker.datatype.boolean(),
    public: faker.datatype.boolean(),
    linked_at: faker.date.past().toISOString(),
    meta: {}
  };

  return data;
};

const jsonData = generateData();
const json = JSON.stringify(jsonData, null, 2);

console.log(json);
