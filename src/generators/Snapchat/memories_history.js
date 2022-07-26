var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

var date =  faker.date.past();
var requested_timestamp =    date.getFullYear()+  "-" + (date.getMonth() + 1) +  "-" +  date.getDate() +  " " +date.getHours()+":"+ date.getMinutes()+  ":"+ date.getSeconds() + " UTC";

let Smedia = {
 
    "Date":requested_timestamp,
    "Media Type":"Video",
    "Download Link":"https://app.snapchat.com"

}

 
let record = {
    "Saved Media": [Smedia,Smedia],
 
  
};

var json = JSON.stringify(record);
 console.log(json);

