var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
var flag = [true,false]; 
var date =  faker.date.past();
var ip = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));

let armadillo_devices = {
    "device_type":"Msgr:" + ip,
    "device_manufacturer":"company" + helper.getFakeNumber(2,7),
    "device_model":"",
    "device_os_version":"",
    "last_connected_ip":ip,
    "last_active_time":helper.getFakeNumber(111111111,999999999)
}
let secret_conversations = {
    "secret_conversations_v2":{
        "tincan_devices":[
           
        ],
        "armadillo_devices":Array.from({length: helper.getFakeNumber(2,7)}, () => armadillo_devices),
        "calls":[
           
        ]
     }
}
 
  

 

var json = JSON.stringify( secret_conversations );

 console.log(json);
