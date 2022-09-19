var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

var date =  faker.date.past();
 
let data = {
    "comment":{
        "timestamp":helper.getFakeNumber(1111111,99999999),
        "comment":"Test Comment",
        "author":faker.name.firstName() + " " + faker.name.lastName(),
        "group":"Group "+helper.getFakeNumber(1,9),
     }
}
let comment ={
    "type_INTERNAL":"",
    "timestamp":helper.getFakeNumber(1111111,99999999),
    "data":[data,data],
    "title":faker.name.firstName() +" replied to " + faker.name.firstName() + "'s comment."
}

 let record = {
    group_comments_v2:[comment,comment],
}

 

var json = JSON.stringify( record );

 console.log(json);
