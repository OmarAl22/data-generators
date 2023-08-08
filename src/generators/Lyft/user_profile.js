var faker = require('faker');

// Function to generate a random number between a and b
function getFakeNumber(a, b) {
  return faker.datatype.number({ min: a, max: b });
}

// Function to format date to 'YYYY-MM-DD HH:mm:ss' format
function formatDate(a) {
  return a.replace("T", " ").substring(0, a.length - 5) + " UTC";
}

// Generate Lyft user details CSV
var csv = "first_name\tlast_name\tphone_number\temail_address\t";
csv += "driver_date_of_birth\trider_date_of_birth\tpronoun\tcarrier\tdevice\t";
csv += "joined_at\tactivation_coupon\taccessibility_mode\thard_of_hearing\t";
csv += "is_business_user\twork_email\tfacebook_uuid\t";
csv += "driver_shipping_street_address\tdriver_shipping_street_address2\t";
csv += "driver_shipping_city\tdriver_shipping_state\tdriver_shipping_zip\n";

var first_name = faker.name.firstName();
var last_name = faker.name.lastName();
var phone_number = faker.phone.phoneNumber();
var email_address = faker.internet.email();
var driver_date_of_birth = formatDate(faker.date.past().toISOString());
var rider_date_of_birth = formatDate(faker.date.past().toISOString());
var pronoun = faker.lorem.word();
var carrier = faker.lorem.word();
var device = faker.lorem.word();
var joined_at = formatDate(faker.date.past().toISOString());
var activation_coupon = faker.lorem.word();
var accessibility_mode = faker.lorem.word();
var hard_of_hearing = faker.lorem.word();
var is_business_user = faker.lorem.word();
var work_email = faker.internet.email();
var facebook_uuid = faker.datatype.uuid();
var driver_shipping_street_address = faker.address.streetAddress();
var driver_shipping_street_address2 = "";
var driver_shipping_city = faker.address.city();
var driver_shipping_state = faker.address.state();
var driver_shipping_zip = faker.address.zipCode();

csv += `${first_name}\t${last_name}\t${phone_number}\t${email_address}\t`;
csv += `${driver_date_of_birth}\t${rider_date_of_birth}\t${pronoun}\t${carrier}\t${device}\t`;
csv += `${joined_at}\t${activation_coupon}\t${accessibility_mode}\t${hard_of_hearing}\t`;
csv += `${is_business_user}\t${work_email}\t${facebook_uuid}\t`;
csv += `${driver_shipping_street_address}\t${driver_shipping_street_address2}\t`;
csv += `${driver_shipping_city}\t${driver_shipping_state}\t${driver_shipping_zip}\n`;

console.log(csv);

 