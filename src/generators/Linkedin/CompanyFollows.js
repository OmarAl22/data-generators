var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

var date =  faker.date.past();
var requested_timestamp =     (date.getMonth() + 1)+ "/" +  date.getDate()+ "/" + date.getFullYear()+  ", " +   +  " " +date.getHours()+":"+ date.getMinutes()+ " PM";
 
let record = {
 
    "Organization":[faker.company.companyName(),faker.company.companyName(),faker.company.companyName()],
    "Followed On": [requested_timestamp,requested_timestamp,requested_timestamp],

 
}

 

var json = JSON.stringify( record );

 console.log(json);

