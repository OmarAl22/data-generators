var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

var date =  faker.date.past();
var requested_timestamp =     (date.getMonth() + 1)+ "/" +  date.getDate()+ "/" + date.getFullYear()+  " " +   +  " " +date.getHours()+":"+ date.getMinutes()+ "";
var flag = ['follow','unfollow'];

let record = {
 
 
    "Date":requested_timestamp,
    "Status":flag[helper.getFakeNumber(0,1)],
    "FullName":faker.name.firstName() + " " + faker.name.lastName(),

}

 

var json = JSON.stringify( record );

 console.log(json);
