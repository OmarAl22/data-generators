var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

var date =  faker.date.past();
var ip = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));
var action = ["Web Session Terminated","Login","Email Added",
"Contact Point Demoted","Session updated"];
let attachments =     {
    "action": action[helper.getFakeNumber(0,5)],
    "timestamp": helper.getFakeNumber(11111111,999999999),
    "ip_address": ip ,
    "user_agent": "",
    "city": faker.address.city(),
    "region": faker.address.county(),
    "country": faker.address.country(),
    "site_name": "www.facebook.com"
  }
 

 let record = {
    account_activity_v2 :Array.from({length: helper.getFakeNumber(0,7)}, () => attachments),
}

 

var json = JSON.stringify( record );

 console.log(json);
