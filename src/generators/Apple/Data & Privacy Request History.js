var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

var date =  faker.date.past();
var requested_timestamp =     (date.getMonth() + 1)+ "/" +  date.getDate()+ "/" + date.getFullYear()+  " " +   +  " " +date.getHours()+":"+ date.getMinutes()+":"+ date.getSeconds()+ " PM";
 
 let record = {
 
    "Request ID":helper.makeid(15),
    "Category Name":"Other Data",
    "Request Time":requested_timestamp,
    "Activity Type":'ACCESS',
    "Apple ID Number":helper.getFakeNumber(111111111,999999999),
    "Activity Completed Time":requested_timestamp,
    "Request Completed Time":requested_timestamp,
    "Archive Size":'SIZE_25GB',
    "Transfer Success Count":'N/A',
    "Transfer Failure Count":'N/A',
    "Developer Name":'N/A',
    "Request Status":'N/A',
    "Transfer Type":'N/A'
 
}

 

var json = JSON.stringify( record );

 console.log(json);
