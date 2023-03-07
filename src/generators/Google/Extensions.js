var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
var flag = [true,false];
let notification = {
   

    "incognito_enabled":flag[helper.getFakeNumber(0,1)],
    "remote_install":flag[helper.getFakeNumber(0,1)],
    "disable_reasons":0,
    "update_url":faker.internet.url(),
    "id":helper.makeid(25),
    "version":helper.getFakeNumber(0,7)+"."+helper.getFakeNumber(0,7)+"."+ helper.getFakeNumber(0,7),
    "enabled":flag[helper.getFakeNumber(0,1)],


}
let Extensions = {
    "Extensions": Array.from({length: helper.getFakeNumber(2,7)}, () => notification),
}
 
  
 

 

var json = JSON.stringify( Extensions );

 console.log(json);
