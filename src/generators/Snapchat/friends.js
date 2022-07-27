var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

var date =  faker.date.past();
var requested_timestamp =    date.getFullYear()+  "-" + (date.getMonth() + 1) +  "-" +  date.getDate() +  " " +date.getHours()+":"+ date.getMinutes()+  ":"+ date.getSeconds() + " UTC";
var type = ["story chrome","added me back","qr code","deep link","suggested","official story search","username"]
let friend = {
  
    "Username": faker.name.findName(),
    "Display Name":faker.name.findName(),
    "Creation Timestamp":requested_timestamp,
    "Last Modified Timestamp":requested_timestamp,
    "Source":"added by " + type[helper.getFakeNumber(0,7)]

}
let SHistory = {
 
    "Friends":Array.from({length: helper.getFakeNumber(1,7)}, () => friend),
    "Friend Requests Sent":Array.from({length: helper.getFakeNumber(1,7)}, () => friend),
    "Blocked Users":Array.from({length: helper.getFakeNumber(1,7)}, () => friend),
    "Deleted Friends":Array.from({length: helper.getFakeNumber(1,7)}, () => friend),
    "Hidden Friend Suggestions":Array.from({length: helper.getFakeNumber(1,7)}, () => friend),
    "Ignored Snapchatters":Array.from({length: helper.getFakeNumber(1,7)}, () => friend),
    "Pending Requests":Array.from({length: helper.getFakeNumber(1,7)}, () => friend),
    "Shortcuts":[],
}

 

var json = JSON.stringify( SHistory );
 console.log(json);

