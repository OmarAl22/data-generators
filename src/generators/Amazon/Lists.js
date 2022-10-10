var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
var flag = ['Y','N'];
console.log("ListName,ListType,isArchived,ListItemName,isCompleted");

for(var i=0;i<3;i++)
    console.log( "text, text," + flag[helper.getFakeNumber(0,1)] + ",ListName,"+ flag[helper.getFakeNumber(0,1)] );


    