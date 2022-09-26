var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
var list = [
    "Auto detailing",
    "Automobiles",
    "Detergent",
    "Entertainment",
    "Motor vehicle",
     "Tire","football",
     "movies","sports", "basketball"
 
]; 
 
let notifications = {
    topics: Array.from({length: helper.getFakeNumber(2,7)}, () => list[helper.getFakeNumber(0,7)]),
}
 
  

 

var json = JSON.stringify( notifications );

 console.log(json);
