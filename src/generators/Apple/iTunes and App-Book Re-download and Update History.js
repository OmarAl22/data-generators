var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

var date =  faker.date.past();
//2022-07-26T18:51:34

 var requested_timestamp =    date.getFullYear()+ "-" +   (date.getMonth() + 1)+ "-" +  date.getDate()+ "T" +date.getHours()+":"+ date.getMinutes()+":"+ date.getSeconds()+ "";
 var app = ["Reddit","Dropbox:","Hala","Snapchat","Amazon","Grubhub:","Booking.com:","Priceline","Twitter","Hala","Dropbox:","Snapchat","Grubhub:","Amazon","Booking.com:","Priceline"];
 let record = {
     "Apple ID Number": helper.getFakeNumber(111111111,999999999),
    "Activity Date":requested_timestamp,
    "Content Type":'iOS and tvOS Apps',
    "Item Reference Number":helper.getFakeNumber(111111111,999999999),
    "Item Description":app[helper.getFakeNumber(0,10)],
    "Version Text":helper.getFakeNumber(0,10)+'.'+helper.getFakeNumber(0,10)+'.'+helper.getFakeNumber(0,10),
    "Seller":app[helper.getFakeNumber(0,10)],
    "Device Details":'',
    "Device IP Address":helper.getFakeNumber(0,10)+'.'+helper.getFakeNumber(0,10)+'.'+helper.getFakeNumber(0,10)+'.'+helper.getFakeNumber(0,10),
    "Device Identifier":helper.getFakeNumber(111111111,999999999),
 
}

 

var json = JSON.stringify( record );

 console.log(json);
