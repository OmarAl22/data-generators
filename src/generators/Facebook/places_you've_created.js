var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
 


let your_places =     {
 
    "name": "",
    "address": "",
    "url": "https://www.facebook.com/",
    "creation_timestamp": helper.getFakeNumber(11111111,999999999),



  }
 

 let record = {
    your_places_v2 :Array.from({length: helper.getFakeNumber(4,7)}, () => your_places),
}

 

var json = JSON.stringify( record );

 console.log(json);
