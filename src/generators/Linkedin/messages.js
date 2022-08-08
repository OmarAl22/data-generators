var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

var date =  faker.date.past();
var requested_timestamp =     (date.getMonth() + 1)+ "/" +  date.getDate()+ "/" + date.getFullYear()+  " " +   +  " " +date.getHours()+":"+ date.getMinutes()+":"+ date.getSeconds() +" UTC";
var flag = ['follow','unfollow'];

let record = {
 
    "CONVERSATION ID":helper.makeid(30),
    	"CONVERSATION TITLE":"title", 

    "FROM":faker.name.firstName() + " " + faker.name.lastName(),
    "SENDER PROFILE URL":"",
    "TO":faker.name.firstName() + " " + faker.name.lastName(),
    "DATE":requested_timestamp,
    "SUBJECT":"SUBJECT",
    "CONTENT": "CONTENT",
    "FOLDER":"FOLDER",

}

 

var json = JSON.stringify( record );

 console.log(json);
