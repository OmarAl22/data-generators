var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

var date =  faker.date.past();
var requested_timestamp =     (date.getMonth() + 1)+ "/" +  date.getDate()+ "/" + date.getFullYear()+  " " +   +  " " +date.getHours()+":"+ date.getMinutes()+":"+ date.getSeconds()+ " PM";
   var flag = ['ON', 'OFF', 'N/A'];
 var lang = ["ar-SA","bn-BD","bn-IN","cs-CZ","da-DK","de-AT","de-CH","de-DE","el-GR","en-AU","en-CA","en-GB","en-IE","en-IN","en-NZ","en-US","en-ZA","es-AR","es-CL","es-CO","es-ES","es-MX","es-US","fi-FI","fr-BE","fr-CA","fr-CH","fr-FR","he-IL","hi-IN","hu-HU","id-ID","it-CH","it-IT","jp-JP"];
 var ip = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));

 let record = {
 
    "Device Name":'iPhone',
    "Device Added Date":requested_timestamp,
    "Device IMEI":helper.getFakeNumber(1111111111,99999999999),
    "Device Serial Number":helper.makeid(15),
    "Device Last Heartbeat IP":ip,
    "Device Last Heartbeat Timestamp":requested_timestamp,
    "Device Model Name":"",
    "Device Phone Number":faker.phone.phoneNumber(),
    "Device ICCID":helper.getFakeNumber(1111111111,99999999999),
    "Device MEID":helper.getFakeNumber(1111111111,99999999999),
    "Device Time Zone":"EST",
    "Device Locale Language":lang[helper.getFakeNumber(0,40)],

    


}

 

var json = JSON.stringify( record );

 console.log(json);
