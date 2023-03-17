var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
var flag = [true,false];

var date =  faker.date.past();

let apps = {
    "latitudeE7":faker.address.latitude(),
    "longitudeE7":faker.address.longitude(),
    "accuracy":helper.getFakeNumber(0,100),
    "deviceTag":helper.getFakeNumber(000000000000000,999999999999999),
    "timestamp":date
}
 
let SearchEngine = {
 
    "locations":Array.from({length: helper.getFakeNumber(1,7)}, () => apps),     
}


var json = JSON.stringify( SearchEngine );

 console.log(json);
