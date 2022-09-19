var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');


let comment ={
   
    "timezone_v2": faker.address.city(),
  

}

 
 

var json = JSON.stringify( comment );

 console.log(json);
