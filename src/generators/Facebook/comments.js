var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

 
let data = {
    "reaction":{
         "reaction":"reaction",
        "actor":faker.name.firstName() + " " + faker.name.lastName(),
     }
}
let comment ={
    "type_INTERNAL":"",
    "timestamp":helper.getFakeNumber(1111111,99999999),
    "data":Array.from({length: helper.getFakeNumber(1,7)}, () => data),
    "title":faker.name.firstName() +" replied to " + faker.name.firstName() + "'s comment."
}

 let record = {
    reactions_v2:Array.from({length: helper.getFakeNumber(1,7)}, () => comment),
}

 

var json = JSON.stringify( record );

 console.log(json);
