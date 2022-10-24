var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
   console.log("Brand, Last Access Time, Selection Time");

for(var i=0;i<3;i++)
    console.log( "Wholefoods," , faker.date.past(), ","  ,faker.date.past());

