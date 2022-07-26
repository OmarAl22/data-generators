var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

var date =  faker.date.past();
var requested_timestamp =    date.getFullYear()+  "-" + (date.getMonth() + 1) +  "-" +  date.getDate() +  " " +date.getHours()+":"+ date.getMinutes()+  ":"+ date.getSeconds() + " UTC";
let ShHistory = {
   
 
    "Date":requested_timestamp,
    "Snapcode Type":"Add Friend",
    "Description":"Description of member"


}
let SHistory = {
 
    "Snapcode Scan History":Array.from({length: helper.getFakeNumber(1,7)}, () => ShHistory),
  

}

 

var json = JSON.stringify( SHistory );
 console.log(json);

