var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

var date =  faker.date.past();
 
var source = ['IPHONE','IPAD'];
  let record = {

    "Country":faker.address.country(),
    "content": "content",
    "Play Duration Milliseconds":helper.getFakeNumber(0,99999999),
    "First Played":helper.getFakeNumber(111111111,99999999),
    "Last Played":helper.getFakeNumber(111111111,99999999),
    "Last Received": helper.getFakeNumber(111111111,99999999),
     "Source Type": source[helper.getFakeNumber(0,1)],
     "Rankings": "Rankings",

}

 

var json = JSON.stringify( record );

 console.log(json);
