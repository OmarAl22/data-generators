const faker = require('faker');

const generateCategory = () => {
  const category = {
    key: faker.datatype.uuid(),
    name: faker.random.word(),
    ratio: faker.datatype.float({ min: 0, max: 1, precision: 0.001 }),
    index: faker.datatype.float({ min: 0, max: 10, precision: 0.1 }),
    id: faker.datatype.uuid(),
    subcategories: [
      {
        key: faker.datatype.uuid(),
        name: faker.random.word(),
        ratio: faker.datatype.float({ min: 0, max: 1, precision: 0.001 }),
        index: faker.datatype.float({ min: 0, max: 10, precision: 0.1 }),
        id: faker.datatype.uuid(),
      }
    ]
  };

  return category;
};

const generateDemographics = () => {
  const demographics = {
    ages: [
      {
        name: faker.address.country(),
        key: faker.address.countryCode(),
        ratio: faker.datatype.float({ min: 0, max: 1, precision: 0.001 }),
      }
    ],
    genders: [
      {
        name: faker.address.country(),
        key: faker.address.countryCode(),
        ratio: faker.datatype.float({ min: 0, max: 1, precision: 0.001 }),
      }
    ],
    devices: [
      {
        name: faker.address.country(),
        key: faker.address.countryCode(),
        ratio: faker.datatype.float({ min: 0, max: 1, precision: 0.001 }),
      }
    ],
    metros: [
      {
        name: faker.address.country(),
        key: faker.address.countryCode(),
        ratio: faker.datatype.float({ min: 0, max: 1, precision: 0.001 }),
      }
    ],
    countries: [
      {
        name: faker.address.country(),
        key: faker.address.countryCode(),
        ratio: faker.datatype.float({ min: 0, max: 1, precision: 0.001 }),
      }
    ]
  };

  return demographics;
};

const jsonData = {
  categories: [generateCategory()],
  demographics: generateDemographics(),
  type: "YOUR_TOTAL_AUDIENCE",
  date: "2022-10-09",
  size: faker.datatype.number({ min: 10000, max: 50000 }),
  size_is_upper_bound: faker.datatype.boolean()
};

const json = JSON.stringify(jsonData, null, 2);
console.log(json);
