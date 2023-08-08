var faker = require('faker');

// Function to generate a random number between a and b
function getFakeNumber(a, b) {
  return faker.datatype.number({ min: a, max: b });             
}

// Function to format date to 'YYYY-MM-DD HH:mm:ss' format
function formatDate(a) {
  return a.replace("T", " ").substring(0, a.length - 5) + " UTC";
}

// Generate Lyft payment details CSV
var csv = "message_delivered_at\tmessage_body\tto_user_role\tfrom_user_role\n";

for (var i = 0; i < 3; i++) {
  var message_delivered_at = formatDate(faker.date.past().toISOString());
  var message_body = faker.lorem.sentence();
  var to_user_role = (i % 2 === 0) ? "driver" : "passenger";
  var from_user_role = (to_user_role === "driver") ? "passenger" : "driver";

  csv += `${message_delivered_at}\t${message_body}\t${to_user_role}\t${from_user_role}\n`;
}

console.log(csv);
 
