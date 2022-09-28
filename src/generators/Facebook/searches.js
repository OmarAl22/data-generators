var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

var date =  faker.date.past();
 
let attachments = {
   
        "text":"text"
      
}

let data = {
    "data":Array.from({length: helper.getFakeNumber(0,2)}, () => attachments), 
}
let comment ={
    "type_INTERNAL":"",
    "timestamp":helper.getFakeNumber(11111111,999999999),
    "attachments":Array.from({length: helper.getFakeNumber(0,2)}, () => data)  ,
    "data":Array.from({length: helper.getFakeNumber(0,2)}, () => attachments), 
    "title":faker.name.firstName() + " updated his status.",
}

 let record = {
    searches_v2 :[comment,comment],
}

 

var json = JSON.stringify( record );

 console.log(json);
