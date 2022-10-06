var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
var topics = ["AlexaShoppingNotificationService","AlexaShoppingNotificationService","AlexaShoppingNotificationService"]
var size = helper.getFakeNumber(1,topics.length);
var date =  faker.date.past();
var requested_timestamp =    (date.getMonth() + 1) +  "/" +  date.getDate()  +  "/" +   date.getFullYear()+    " " +date.getHours()+":"+ date.getMinutes();

console.log("TimeStamp,Display Text,Name,Skill Name");

for(var i=0;i<size;i++)
    console.log(requested_timestamp +", text, name, "+ topics[helper.getFakeNumber(1,topics.length)]);


    