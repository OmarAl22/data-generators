var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
 
 let record = {
    "Item Reference": helper.getFakeNumber(111111111,99999999),
    "Created": "",
    "Item Description": "Item Description",
    "Type": "", 
     
 

}

 

var json = JSON.stringify( record );

 console.log(json);
