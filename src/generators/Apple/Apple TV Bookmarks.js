var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
 
var date =  faker.date.past();
var flag = ["Yes","No"]; 
 
 let record = {
    "Item Reference": helper.getFakeNumber(111111111,99999999),
    "Last activity timestamp": date,
    "Item Description": "Item Description",
    "Marked as unwatched?": flag[helper.getFakeNumber(0,1)], 
    "Has been played?": flag[helper.getFakeNumber(0,1)], 
    "Playback position": helper.getFakeNumber(1,10),
    "Play count": helper.getFakeNumber(1,10),
    "Has been rented?":flag[helper.getFakeNumber(0,1)], 

  
}

 

var json = JSON.stringify( record );

 console.log(json);
