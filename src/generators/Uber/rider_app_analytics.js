const faker = require('faker');
const haversine = require('haversine-distance');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

function getFakeNumber(a, b) {
  return faker.datatype.number({ min: a, max: b });
}

function formatDate(a) {
  return a.replace('T', ' ').substring(0, a.length - 5) + ' +0000 UTC';
}

const csvWriter = createCsvWriter({
  path: 'output.csv',
  header: [
    { id: 'Event Time (UTC)', title: 'Event Time (UTC)' },
    { id: 'GPS Time (UTC)', title: 'GPS Time (UTC)' },
    { id: 'Horizontal Accuracy', title: 'Horizontal Accuracy' },
    { id: 'Latitude', title: 'Latitude' },
    { id: 'Longitude', title: 'Longitude' },
    { id: 'Speed (GPS)', title: 'Speed (GPS)' },
    { id: 'City', title: 'City' },
    { id: 'Cellular Carrier', title: 'Cellular Carrier' },
    { id: 'Carrier MCC', title: 'Carrier MCC' },
    { id: 'Carrier MNC', title: 'Carrier MNC' },
    { id: 'Google Play Services Status', title: 'Google Play Services Status' },
    { id: 'Device ID', title: 'Device ID' },
    { id: 'IP Address', title: 'IP Address' },
    { id: 'Device Language', title: 'Device Language' },
    { id: 'Device Model', title: 'Device Model' },
    { id: 'Device OS', title: 'Device OS' },
    { id: 'Device OS Version', title: 'Device OS Version' },
    { id: 'Region', title: 'Region' },
    { id: 'Session Start Time (UTC)', title: 'Session Start Time (UTC)' },
    { id: 'Analytics Event Type', title: 'Analytics Event Type' },
  ],
});

const records = [];

for (let i = 0; i < 4; i++) {
  const requested_timestamp_pure = faker.date.past();
  const requested_timestamp = formatDate(requested_timestamp_pure.toISOString());

  const pickup_timestamp_pure = new Date(requested_timestamp_pure.getTime());
  pickup_timestamp_pure.setMinutes(requested_timestamp_pure.getMinutes() + getFakeNumber(1, 5));
  const pickup_timestamp = formatDate(pickup_timestamp_pure.toISOString());

  const dropoff_timestamp_pure = new Date(pickup_timestamp_pure.getTime());
  dropoff_timestamp_pure.setMinutes(requested_timestamp_pure.getMinutes() + getFakeNumber(1, 5));
  const dropoff_timestamp = formatDate(dropoff_timestamp_pure.toISOString());

  const pickup_address = faker.address.nearbyGPSCoordinate([39.7837304, -100.4458825], 1000, false);
  const requested_lat = pickup_address[0];
  const requested_lng = pickup_address[1];

  const destination_address = faker.address.nearbyGPSCoordinate([requested_lat, requested_lng], 30, false);
  const dropoff_lat = destination_address[0];
  const dropoff_long = destination_address[1];

  const a = { latitude: requested_lat, longitude: requested_lng };
  const b = { latitude: dropoff_lat, longitude: dropoff_long };
  const distance = (haversine(a, b) * 0.000621371192).toFixed(2);

  records.push({
    'Event Time (UTC)': faker.datatype.float({ min: 20, max: 30, precision: 1 }) + ':53.9',
    'GPS Time (UTC)': faker.datatype.float({ min: 20, max: 30, precision: 1 }) + ':52.4',
    'Horizontal Accuracy': faker.datatype.number({ min: 50, max: 100 }),
    'Latitude': requested_lat,
    'Longitude': requested_lng,
    'Speed (GPS)': -1,
    'City': faker.address.city(),
    'Cellular Carrier': 'Verizon',
    'Carrier MCC': 311,
    'Carrier MNC': 480,
    'Google Play Services Status': '',
    'Device ID': faker.random.uuid(),
    'IP Address': faker.internet.ip(),
    'Device Language': 'en_US',
    'Device Model': 'iPhone12,1',
    'Device OS': 'ios',
    'Device OS Version': '14.3',
    'Region': 'US',
    'Session Start Time (UTC)': faker.datatype.float({ min: 50, max: 60, precision: 1 }) + ':37.2',
    'Analytics Event Type': 'custom',
  });
}

csvWriter.writeRecords(records).then(() => {
  console.log(' ');
});

// Print CSV to the console
console.log(records);
