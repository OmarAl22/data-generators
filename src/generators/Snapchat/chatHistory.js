var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

var date =  faker.date.past();
var requested_timestamp =    date.getFullYear()+  "-" + (date.getMonth() + 1) +  "-" +  date.getDate() +  " " +date.getHours()+":"+ date.getMinutes()+  ":"+ date.getSeconds() + " UTC";

let message = {
    "From":"user",
    "Media Type":"TEXT",
    "Created":requested_timestamp,
    "Text":"Text"
  
};

let record = {
    "Received Saved Chat History": [message,message], 
    "Sent Saved Chat History": [message,message], 
    "Received Unsaved Chat History": [],  
    "Sent Unsaved Chat History": [],  


}

var json = JSON.stringify(record);
 console.log(json);

