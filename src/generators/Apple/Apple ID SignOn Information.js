var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

var date =  faker.date.past();
var requested_timestamp =     (date.getMonth() + 1)+ "/" +  date.getDate()+ "/" + date.getFullYear()+  " " +   +  " " +date.getHours()+":"+ date.getMinutes()+":"+ date.getSeconds()+ " PM";
   var flag = ["iTunes Music Store","Game Center","FaceTime","iCloud Account Services","Apple ID","AOS Customer Account Service"];
   var ip = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));

 let record = {
 
    "Application":flag[helper.getFakeNumber(0,5)],
    "Logged In Date":requested_timestamp,
      "IP Address":ip,
 
    


}

 

var json = JSON.stringify( record );

 console.log(json);
