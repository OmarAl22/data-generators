var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

var date =  faker.date.past();
let record = {
 
    "Previewed Item Description":"Description media #" + getFakeNumber(0,99999999),
    "Date Created": date,
    "Item Reference Number":helper.getFakeNumber(11111111,99999999),
 

}

 

var json = JSON.stringify( record );

 console.log(json);
