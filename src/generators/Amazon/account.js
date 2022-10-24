var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
 var flag = ['enabled', 'disabled'];
 var d = faker.date.past().toISOString().replace("T"," ").replace("Z"," ");
 var final_date = d.substring(0,d.indexOf(".")) +" UTC";
console.log("Account_Creation_Time,	Music_Territory");

for(var i=0;i<3;i++)
    console.log( final_date + "," +faker.address.country());

