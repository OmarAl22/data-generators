const faker = require('faker');
let currentID = 1;

const generateFormattedAddress = () => {
  const streetAddress = faker.address.streetAddress(true);
  const city = faker.address.city();
  const state = faker.address.state();
  const country = faker.address.country();

  return `${streetAddress}, ${city}, ${state}, ${country}`;
};

const generateRandomData = () => {
  const randomMemoryCount = faker.datatype.number({ min: 2, max: 15 });
  const randomMemoryIDs = Array.from({ length: randomMemoryCount }, () => faker.datatype.number({ min: 1, max: 20 }));

  const story = {
    id: currentID++,
    memories: randomMemoryIDs,
    time: faker.datatype.number({ min: 1609459209000, max: Date.now() }),
    'tags/labels': [{
        role: [faker.random.word()],
        mode: [faker.random.word()],
        other: [faker.random.word()]
      }],
    title: faker.lorem.words(),
    body: faker.lorem.paragraphs(3),
    bodyModifiedAt: faker.datatype.number({ min: 1609459209000, max: Date.now() }),
    bodyModifiedSource: faker.random.arrayElement(['auto', 'manual']),
    titleModifiedAt: faker.datatype.number({ min: 1609459209000, max: Date.now() }),
    titleModifiedSource: faker.random.arrayElement(['auto', 'manual']),
    generated: faker.datatype.boolean()
  };

  return story;
};

const singleStory = generateRandomData();

console.log(JSON.stringify(singleStory, null, 2));
