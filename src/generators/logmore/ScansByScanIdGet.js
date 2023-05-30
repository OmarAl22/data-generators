const faker = require('faker');

const data = {
  id: faker.random.uuid(),
  secret: faker.random.uuid(),
  logger_id: faker.random.uuid(),
  new_data: faker.random.number(),
  data_count: faker.random.number(),
  device_conf_version: faker.random.number(),
  config_id: faker.random.uuid(),
  location: {
    type: 'point',
    coordinates: [0]
  },
  protocol: faker.random.number(),
  full_url: faker.random.alphaNumeric(40),
  battery_level: faker.random.number({ min: 0, max: 100 }),
  created_at: faker.date.past().toISOString(),
  meta_flags: {},
  ip: faker.internet.ip(),
  useragent: faker.internet.userAgent(),
  status: 'ok'
};

const json = JSON.stringify(data);

console.log(json);