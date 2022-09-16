var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');


let comment ={
    "name": faker.name.firstName() + " " + faker.name.lastName(),
    "timestamp": helper.getFakeNumber(1111111,99999999),
}

 
 let record = {
    friends_v2:Array.from({length: helper.getFakeNumber(1,7)}, () => comment),
}

 

var json = JSON.stringify( record );

 console.log(json);
