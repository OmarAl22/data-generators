const faker = require('faker');

// Generate a random number between min and max (inclusive)
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generatePinterestAdAccount = () => {
  const boardOwnerId = faker.datatype.uuid();
  const itemId = faker.datatype.uuid();
  const createdAtTimestamp = Math.floor(faker.date.past().getTime() / 1000);

  const adAccount = {
    items: [
      {
        id: itemId,
        name: faker.name.findName(),
        owner: {
          username: faker.internet.userName(),
          id: boardOwnerId,
        },
        country: faker.address.countryCode(),
        currency: faker.finance.currencyCode(),
        permissions: ['ADMIN'],
        created_time: createdAtTimestamp,
        updated_time: createdAtTimestamp,
      },
    ],
    bookmark: faker.random.word(),
  };

  return adAccount;
};

const adAccountData = generatePinterestAdAccount();
const json = JSON.stringify(adAccountData, null, 2);  

console.log(json);
