var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
 
var date =  faker.date.past();
var flag = ["Yes","No"]; 

 let record = {

     
      "Apple ID Number":	helper.getFakeNumber(111111111,99999999),
     "Device Identifier":helper.makeid(12),
     "Device Name":faker.name.firstName(),
     "Enabled?":flag[helper.getFakeNumber(0,1)], 
     "Associated Date":date	,
      
}

 

var json = JSON.stringify( record );

 console.log(json);
