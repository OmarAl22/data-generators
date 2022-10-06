var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
var topics = ["US:Not OptedOut","MX:Not OptedOut","BR:Not OptedOut","CA:Not OptedOut"]
var size = helper.getFakeNumber(1,topics.length);

console.log("Interest based ads opt out setting per marketplace");

for(var i=0;i<size;i++)
    console.log(topics[helper.getFakeNumber(1,topics.length)]);
