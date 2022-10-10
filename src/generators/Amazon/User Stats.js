var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
  var date =  faker.date.past();
 
console.log("Total Questions Asked,	Total Answers Contributed,	Group Member Count,	Group Admin Count,	Total Likes on Your Content,	Total Dislikes on Your Content");
console.log(helper.getFakeNumber(1,10) + "," + helper.getFakeNumber(1,10)   + "," + helper.getFakeNumber(1,10)+ "," + helper.getFakeNumber(1,10)+ "," + helper.getFakeNumber(1,10)+ "," + helper.getFakeNumber(1,10));


    