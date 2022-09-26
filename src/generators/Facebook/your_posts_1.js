var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

var date =  faker.date.past();
 
let attachments = {
    "data":[
        {
           "life_event":{
              "title":"Started new job at" + faker.address.city(),
              "start_date":{
                 "year":helper.getFakeNumber(2000,2023),
                 "month":helper.getFakeNumber(1,12),
                 "day":helper.getFakeNumber(1,30),
              },
              "place":{
                 "name":faker.address.city(),
                 "coordinate":{
                    "latitude":faker.address.latitude(), 
                    "longitude":faker.address.longitude()
                 },
                 "address":faker.address.city() + "," + faker.address.city(),
              }
           }
        }
     ]
}
let comment ={
    "type_INTERNAL":"",
    "timestamp":helper.getFakeNumber(11111111,999999999),
    "attachments":[attachments,attachments],
    "data":{
        "backdated_timestamp":helper.getFakeNumber(11111111,999999999),
     },
    "title":faker.name.firstName() + " updated his status.",
}

 let record = {
    group_comments_v2:[comment,comment],
}

 

var json = JSON.stringify( record );

 console.log(json);
