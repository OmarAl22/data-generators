var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

console.log("customer_id,event_name,event_timestamp,device_platform_name,device_make,device_model,description");

for(var i=0;i<size;i++)
    console.log(helper.getFakeNumber(1111111,999999) +", text," + helper.getFakeNumber(1111111,999999) + ",\t,Apple,\t,\t," );


    