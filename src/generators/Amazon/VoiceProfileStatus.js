var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
 
console.log("Profile Name,Status Of Profile,Status of associated Alexa Account,Status Updated Time");

for(var i=0;i<3;i++)
    console.log(faker.name.firstName() + " " + faker.name.lastName() +", Yes, ", faker.date.past() );

