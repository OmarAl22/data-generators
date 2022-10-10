var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
  var date =  faker.date.past();
 var flag = ['Y','N'];
console.log("Item,Calendar Name,Provider,Account Email ID,First Name,Last Name,Description,Calendar Authentication Expired,Calendar Visible to Alexa,Writable,Timezone,Level Of Access,Notification Enabled,Device to Receive Notification");
console.log("Calendar,Alexa Calendar," + faker.internet.exampleEmail()   + "," + faker.name.firstName()+ "," + faker.name.lastName()+ ",\t," + flag[helper.getFakeNumber(0,1)]+ "," + flag[helper.getFakeNumber(0,1)]+ "," + flag[helper.getFakeNumber(0,1)] +
+",  UTC  ,\t,"  + flag[helper.getFakeNumber(0,1)] + ",\t,");


    