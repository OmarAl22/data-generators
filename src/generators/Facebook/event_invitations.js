var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');


let comment ={
    "name":"Event #" + helper.getFakeNumber(11,99),
    "start_timestamp":helper.getFakeNumber(1111111,99999999),
    "end_timestamp":helper.getFakeNumber(1111111,99999999),
}

 let record = {
    events_invited_v2:[comment,comment],
}

 

var json = JSON.stringify( record );

 console.log(json);
