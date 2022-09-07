var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
var flag = [true,false];
var date =  faker.date.past();
let record = {
 "Item Reference":helper.makeid(25),
    "Item Description": "N/A",
    "Last activity timestamp":date,
    "Playback position":helper.getFakeNumber(1,999),
    "Play count":helper.getFakeNumber(1,10),
    "Has been played?":flag[helper.getFakeNumber(0,1)], 
}

 

var json = JSON.stringify( record );

 console.log(json);
