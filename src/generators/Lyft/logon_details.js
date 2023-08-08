// JS code to generate Lyft login details CSV and print it in console

var faker = require('faker');
const haversine = require('haversine-distance');

// Generate fake data
var occurred_at_pure = faker.date.past();
var occurred_at = formatDate(occurred_at_pure.toISOString());
var ip_address = faker.internet.ip();
var location = faker.address.nearbyGPSCoordinate([39.7837304, -100.4458825], 1000, false);
var lat = location[0];
var lng = location[1];

// Format data into CSV record
let record = {
  occurred_at: occurred_at,
  ip_address: ip_address,
  lat: lat,
  lng: lng,
};
var header = Object.keys(record).join(',') + '\n';
 
// Convert record to CSV string
var csv = header + Object.values(record).join(',') + '\n';

// Print CSV in console
console.log(csv);

function formatDate(a) {
  return a.replace("T", " ").substring(0, a.length - 5) + " +0000 UTC";
}
