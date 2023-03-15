var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
var d = helper.getFakeNumber(1,28) +" "+ faker.date.month() + " " + helper.getFakeNumber(2017,2024) + "," + helper.getFakeNumber(1,23) + ":" + helper.getFakeNumber(00,59);
 
console.log("Time,Transaction ID,Description,Product,Payment method, Status, Amount");
 var flag = ["Visa","Master Card"];


for(var i=0;i<3;i++){
     
    console.log(d, "," + helper.makeid(25) +"," + "One-time charge, x," +flag[helper.getFakeNumber(0,1)], ",completed, USD "+ helper.getFakeNumber(0,100) +"."+helper.getFakeNumber(0,99) );
}
