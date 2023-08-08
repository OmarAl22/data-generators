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
var csv = "created_at\tamount\tcurrency\tpayment_method\tlast_four\n";

for (var i = 0; i < 22; i++) {
  var created_at = formatDate(faker.date.past().toISOString());
  var amount = (getFakeNumber(1, 50) + getFakeNumber(0, 99) / 100).toFixed(2);
  var currency = "USD";
  var payment_method = (i === 20) ? "coupon" : "card";
  var last_four = (payment_method === "card") ? `*${getFakeNumber(1000, 9999)}` : "";

  csv += `${created_at}\t${amount}\t${currency}\t${payment_method}\t${last_four}\n`;
}

console.log(csv);
