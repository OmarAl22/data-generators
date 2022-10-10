var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

console.log("Timestamp, Country");
var date =  faker.date.past();


for(var i=0;i<3;i++){
     
    console.log(date, "," + faker.address.country() );
}

