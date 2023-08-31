const faker = require('faker');

const generatePinterestAdAccount = () => {
  const ownerId = faker.datatype.uuid();
  const itemId = faker.datatype.uuid();
  const createdAtTimestamp = Math.floor(faker.date.past().getTime() / 1000);

  const adAccount = {
    id: itemId,
    name: faker.name.findName(),
    owner: {
      username: faker.internet.userName(),
      id: ownerId,
    },
    country: faker.address.countryCode(),
    currency: faker.finance.currencyCode(),
    permissions: ['ADMIN'],
    created_time: createdAtTimestamp,
    updated_time: createdAtTimestamp,
  };

  return adAccount;
};

const adAccountData = generatePinterestAdAccount();
const json = JSON.stringify(adAccountData, null, 2); 

console.log(json);
