var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
var action = ["Account reactivated","Account deactivated"];



let attachments =     {
 
"status": action[helper.getFakeNumber(0,1)],
     "timestamp": helper.getFakeNumber(11111111,999999999),
   
  }
 

 let record = {
    account_status_changes_v2 :Array.from({length: helper.getFakeNumber(4,70)}, () => attachments),
}

 

var json = JSON.stringify( record );

 console.log(json);
