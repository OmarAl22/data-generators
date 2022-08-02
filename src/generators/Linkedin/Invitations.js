var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

var date =  faker.date.past();
var requested_timestamp =     (date.getMonth() + 1)+ "/" +  date.getDate()+ "/" + date.getFullYear()+  ", " +   +  " " +date.getHours()+":"+ date.getMinutes()+ " PM";
var flag = ["outgoing","ingoing"];

let record = {
 
    "From":  faker.name.firstName(),
    "To":faker.name.firstName(),
    "Sent At":requested_timestamp,
    "Message":"Message",
    "Direction": flag[helper.getFakeNumber(0,1)],

}

 

var json = JSON.stringify( record );

 console.log(json);
