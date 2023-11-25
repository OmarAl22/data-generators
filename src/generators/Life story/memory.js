const faker = require('faker');
let currentID = 1; 
const generateFormattedAddress = () => {
  const streetAddress = faker.address.streetAddress(true);
  const city = faker.address.city();
  const state = faker.address.state();
  const country = faker.address.country();

  return `${streetAddress}, ${city}, ${state}, ${country}`;
};

const generatePhotoEvent = () => ({
  type: 'photo',
  identifier: '',
  creation: faker.datatype.number({ min: 1609459209000, max: Date.now() }),
  location: [{
    lat: parseFloat(faker.address.latitude()),
    long: parseFloat(faker.address.longitude()),
    description: generateFormattedAddress()
  }],
  caption: faker.lorem.sentence(),
  labels: [faker.lorem.word()]
});

const generateLocationEvent = () => ({
  type: 'location',
  lat: parseFloat(faker.address.latitude()),
  long: parseFloat(faker.address.longitude()),
  description: generateFormattedAddress(),
  arrivalTime: faker.datatype.number({ min: 1609459209000, max: Date.now() }),
  departureTime: faker.datatype.number({ min: 1609459209000, max: Date.now() })
});

const generateCalendarEvent = () => ({
  type: 'calendar',
  location: [{
    lat: parseFloat(faker.address.latitude()),
    long: parseFloat(faker.address.longitude()),
    description: generateFormattedAddress()
  }],
  calendar: faker.lorem.word(),
  hexColor: faker.internet.color(),
  allday: faker.datatype.boolean(),
  start: faker.datatype.number({ min: 1609459209000, max: Date.now() }),
  end: faker.datatype.number({ min: 1609459209000, max: Date.now() }),
  title: faker.lorem.words(),
  notes: faker.lorem.paragraph()
});

const generateRandomEvent = () => {
  const eventType = faker.random.arrayElement(['Photo', 'Location', 'Calendar Event']);
  switch (eventType) {
    case 'Photo':
      return generatePhotoEvent();
    case 'Location':
      return generateLocationEvent();
    case 'Calendar Event':
      return generateCalendarEvent();
    default:
      return {};
  }
};

const generateRandomData = () => ({
  ID: currentID++,
  time: faker.datatype.number({ min: 1609459209000, max: Date.now() }),
  'tags/labels': [{
    role: [faker.random.word()],
    mode: [faker.random.word()],
    other: [faker.random.word()]
  }],
  emotion: faker.datatype.number({ min: 0, max: 5 }),
  vote: faker.datatype.number({ min: -1, max: 1 }),
  bodyModifiedAt: faker.datatype.number({ min: 1609459209000, max: Date.now() }),
  bodyModifiedSource: faker.random.arrayElement(['auto', 'manual']),
  eventsData: Array.from({ length: faker.datatype.number({ min: 1, max: 5 }) }, () => generateRandomEvent()), // Generate a random number of events (between 1 and 5)
  body: faker.lorem.paragraphs(3),
  generated: faker.datatype.boolean()
});

const generateRandomDataArray = (count) => Array.from({ length: count }, () => generateRandomData());

const jsonDataArray = generateRandomDataArray(3); 
console.log(JSON.stringify(jsonDataArray, null, 2));
//const jsonData = generateRandomData();

//console.log(JSON.stringify(jsonData, null, 2));
