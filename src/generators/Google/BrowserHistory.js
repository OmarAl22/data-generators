var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

let notification = {
    "favicon_url":"https://www.google.com/favicon.ico",
    "page_transition": "LINK",
    "title": "Google Takeout",
    "url": faker.internet.url(),
    "client_id": helper.makeid(25),
    "time_usec": helper.getFakeNumber(11111111,9999999999)
}
let Browser_History = {
    "Browser History": Array.from({length: helper.getFakeNumber(2,7)}, () => notification),
}
 
  
 

 

var json = JSON.stringify( Browser_History );

 console.log(json);
