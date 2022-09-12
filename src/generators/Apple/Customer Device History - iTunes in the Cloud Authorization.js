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
     "Associated Date":date	,

     "Enabled?":flag[helper.getFakeNumber(0,1)], 
    "Latest Device User Agent String":"itunesstored/1.0 iOS/8.4 model/iPhone7,2 build/12H143 (6; dt:106)"
      
}

 

var json = JSON.stringify( record );

 console.log(json);
