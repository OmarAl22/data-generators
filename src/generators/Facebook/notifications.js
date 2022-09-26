var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
var flag = [true,false]; 
var date =  faker.date.past();
var ip = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));

let notification = {
    "timestamp":helper.getFakeNumber(11111111,9999999999),
    "unread":true,
    "href":"https://www.facebook.com/",
    "text":faker.name.firstName() + " " + faker.name.lastName() + " added a new photo."
}
let notifications = {
    notifications_v2: Array.from({length: helper.getFakeNumber(2,7)}, () => notification),
}
 
  

 

var json = JSON.stringify( notifications );

 console.log(json);
