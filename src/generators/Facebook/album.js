var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
 
 
let notifications = {
    "name":"Cover photos",
    "fbid_INTERNAL": helper.getFakeNumber(2,7),
    "photos":[
       
    ],
    "cover_photo":{
       "uri":"http://www.facebook.com/",
       "media_path_INTERNAL":"",
       "type_INTERNAL":""
    },
    "last_modified_timestamp": helper.getFakeNumber(11111111,9999999),
    "description":""
}
 
  

 

var json = JSON.stringify( notifications );

 console.log(json);
