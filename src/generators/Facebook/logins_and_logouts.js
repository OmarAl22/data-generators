var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
var action = ["Login","Logout"];
var ip = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));



let attachments =     {
 
    "action": action[helper.getFakeNumber(0,1)],
     "timestamp": helper.getFakeNumber(11111111,999999999),
     "site": "www.facebook.com",
     "ip_address": ip


  }
 

 let record = {
    account_accesses_v2 :Array.from({length: helper.getFakeNumber(4,70)}, () => attachments),
}

 

var json = JSON.stringify( record );

 console.log(json);
