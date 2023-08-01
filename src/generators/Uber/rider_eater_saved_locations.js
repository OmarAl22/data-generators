const faker = require('faker');
const haversine = require('haversine-distance');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
  path: 'uber_rides.csv',
  header: [
    { id: 'Label', title: 'Label' },
    { id: 'House_number', title: 'House number' },
    { id: 'Street_name', title: 'Street name' },
    { id: 'City', title: 'City' },
    { id: 'State', title: 'State' },
    { id: 'Postal_code', title: 'Postal code' },
    { id: 'Country_code', title: 'Country code' },
    { id: 'Latitude', title: 'Latitude' },
    { id: 'Longitude', title: 'Longitude' },
  ]
});

function generateUberRideRecord() {
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

  return {
    Label: 'Uber Ride',
    House_number: faker.address.streetAddress(),
    Street_name: faker.address.streetName(),
    City: faker.address.city(),
    State: faker.address.state(),
    Postal_code: faker.address.zipCode(),
    Country_code: faker.address.countryCode(),
    Latitude: requested_lat,
    Longitude: requested_lng,
  };
}

function getFakeNumber(a, b) {
  return faker.datatype.number({ min: a, max: b });
}

function formatDate(a) {
  return a.replace("T", " ").substring(0, a.length - 5) + " +0000 UTC";
}

const records = [];
for (let i = 0; i < 5; i++) { // Change the loop count to generate more records
  records.push(generateUberRideRecord());
}

 console.log(records);


