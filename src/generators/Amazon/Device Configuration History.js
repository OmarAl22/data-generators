var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
 var flag = ['ENABLED', 'DISABLED'];
console.log("Timestamp,	Device Name,	Manufacturer Name,	Model Name,	Device ID,	Discovery Source,	Source Name,	Display Categories,	Device Interface,	Cookies");

for(var i=0;i<3;i++)
    console.log( faker.date.past(),  ", " + faker.name.firstName()+"'s iOS Device, Amazon, Amazon Shopping App for iOS,Alexa, N/A, ALEXA_VOICE_" + flag[helper.getFakeNumber(0,1)] +
    ", ,  ,    " );

