var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

var date =  faker.date.past();
var requested_timestamp =    date.getFullYear()+  "-" + (date.getMonth() + 1) +  "-" +  date.getDate();
 
let item = {
 
    "id": helper.makeid(15),
    "type": "weight",
    "value": helper.getFakeNumber(1,7),
    "unit": "pounds",
    "date": requested_timestamp,
    "updated_at": date
}

 

var json = JSON.stringify( item );
 console.log(json);

