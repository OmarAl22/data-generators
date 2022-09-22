var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
var flag = [true,false]; 
var date =  faker.date.past();
 
let participants = {
    name: faker.name.firstName() + " " + faker.name.lastName(),
}
let message = {
    "sender_id_INTERNAL":0,
    "sender_name":faker.name.firstName() + " " + faker.name.lastName(),
    "timestamp_ms":helper.getFakeNumber(111111111,99999999),
    "content":" ",
    "share":{
       "link":"http://www.google.com"
    },
    "type":"Share",
    "is_unsent":flag[helper.getFakeNumber(0,1)],
    "is_taken_down":flag[helper.getFakeNumber(0,1)],
    "bumped_message_metadata":{
       "bumped_message":"bumped_message",
       "is_bumped":flag[helper.getFakeNumber(0,1)],
    }
}
let comment ={
    "participants":Array.from({length: helper.getFakeNumber(2,7)}, () => participants),
     "messages": Array.from({length: helper.getFakeNumber(2,7)}, () => message),
     "title":faker.name.firstName() + " " + faker.name.lastName(),
     "is_still_participant":flag[helper.getFakeNumber(0,1)],
     "thread_type":"Regular",
     "thread_path":"inbox/",
     "magic_words":[
        
     ]
}

  

 

var json = JSON.stringify( comment );

 console.log(json);
