var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

var date =  faker.date.past();
var requested_timestamp =     date.getFullYear() +  "-" + (date.getMonth() + 1) + "-" + date.getDate();
var requested_timestamp2 =     date.getFullYear()-4 +  "-" + (date.getMonth() + 1) + "-" + date.getDate();

var flag = ["yes","no"];
var gender = ["male","female"];

let record = {
 
 
    "Cover letter": "letter",
    "Last name":faker.name.lastName(),
    "Degree":"BSc",
    "Dates attended":requested_timestamp + " to " + requested_timestamp2,
    "Major / Field of study": "Computer Science",
    "Are you legally authorized to work in the United States?":flag[helper.getFakeNumber(0,1)],
    "Mobile phone number":faker.phone.phoneNumber(),
    "State":faker.address.state(),
    "City":faker.address.city(),
    "<strong>Disability</strong>":flag[helper.getFakeNumber(0,1)],
    "Please submit a resume or LinkedIn profile":"cv.docx",
    "Country":faker.address.country(),
    "School":"University of "+ faker.address.state(),
    "ZIP / Postal Code":faker.address.zipCode(),
    "City":faker.address.city(),
    "Your title":faker.name.jobTitle(), 
    "Street address line 1":faker.address.streetName(),
    "Country":faker.address.country(),
    "Gender":gender[helper.getFakeNumber(0,1)],
}
 

var json = JSON.stringify( record );

 console.log(json);
