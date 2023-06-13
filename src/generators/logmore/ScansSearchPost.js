const faker = require('faker');

const generateData = () => {
  const data = [
    {
      id: faker.datatype.uuid(),
      secret: faker.datatype.uuid(),
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
      full_url: faker.random.alphaNumeric(40),
      battery_level: faker.datatype.number({ min: 0, max: 100 }),
      created_at: faker.date.past().toISOString(),
      meta_flags: {},
      ip: faker.internet.ip(),
      useragent: faker.internet.userAgent(),
      status: 'ok'
    }
  ];

  return data;
};

const jsonData = generateData();
const json = JSON.stringify(jsonData, null, 2);

console.log(json);
