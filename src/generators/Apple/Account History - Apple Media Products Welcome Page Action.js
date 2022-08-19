var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

var date =  faker.date.past();
 
 let record = {
 
     "Apple ID Number": helper.getFakeNumber(111111111,99999999),
     "App Name":"App Name#" +       helper.getFakeNumber(0,50),
     "First User Action Date":date,
     "Latest User Action Date":date,
     "Version": helper.getFakeNumber(0,50),
 
 
}

 

var json = JSON.stringify( record );

 console.log(json);
