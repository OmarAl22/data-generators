var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

var date =  faker.date.past();
var requested_timestamp =    date.getFullYear()+ "-" +   (date.getMonth() + 1)+ "-" +  date.getDate()+ " "  +date.getHours()+":"+ date.getMinutes()+ " UTC";
var flag = [true,false];

let record = {
 
    "Content Title": "Content Title"+ helper.getFakeNumber(0,10),
    "Content Description":"Content Description",
    "Content Type":"Course",
    "Content Last Watched Date (if viewed)":requested_timestamp,
    "Content Completed At (if completed)":requested_timestamp,
    "Content Saved":flag[helper.getFakeNumber(0,1)],
    "Notes taken on videos (if taken)":"N/A",

}

 

var json = JSON.stringify( record );

 console.log(json);
