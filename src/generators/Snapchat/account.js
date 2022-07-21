var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

var date =  faker.date.past();
var requested_timestamp =    date.getFullYear()+  "-" + (date.getMonth() + 1) +  "-" +  date.getDate() +  " " +date.getHours()+":"+ date.getMinutes()+  ":"+ date.getSeconds() + " UTC";

  let BInformation= {
    "Username":"Username",
    "Name":"Name",
    "Creation Date":requested_timestamp

}
 
let DInformation= {
    "Make":"Apple",
    "Model ID":"iPad7,5",
    "Model Name":"iPad (6th Gen)",
    "User Agent":"Snapchat/10.78.6.0 (iPad7,5; iOS 13.3.1; gzip)",
    "Language":"en",
    "OS Type":"iOS",
    "OS Version":"iOS 14.3",
    "Connection Type":"WIFI"

}

let DHistory= {
    "Make":"Apple",
    "Model":"iPad7,5",
    "Start Time":requested_timestamp,
    "Device Type":"PHONE"

}
 
let location = {
    "IP":"0.0.0.0",
     "Country":"USA",
     "Created":requested_timestamp,
         "Status":"success",
         "Device":"Snapchat/11.13.0.25 (iPhone12,1; iOS 14.4; gzip)"
}


let record = {
    "Basic Information": BInformation,
    "Device Information": DInformation,
    "Device History":[DHistory,DHistory],
    "Privacy Policy and Terms of Service Acceptance History":[],
    "Custom Creative Tools Terms": [],
    "Login History":[location,location,location] ,

  
};

var json = JSON.stringify(record);
 console.log(json);

