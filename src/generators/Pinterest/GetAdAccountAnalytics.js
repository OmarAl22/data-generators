const faker = require('faker');

const generateAdAccountStats = () => {
  const adAccountId = faker.datatype.uuid();
  const date = faker.date.between('2021-01-01', '2021-12-31').toISOString().split('T')[0];

  const adStats = {
    DATE: date,
    AD_ACCOUNT_ID: adAccountId,
    SPEND_IN_DOLLAR: faker.datatype.float({ min: 1, max: 100, precision: 2 }),
    TOTAL_CLICKTHROUGH: faker.datatype.number({ min: 100, max: 500 }),
  };

  return adStats;
};

const adStatsData = [generateAdAccountStats()];
const json = JSON.stringify(adStatsData, null, 2); // Pretty-print the JSON

console.log(json);
