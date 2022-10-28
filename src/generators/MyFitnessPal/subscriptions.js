var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
var tags = ["exercise", "diary_meal"];
var date =  faker.date.past();
var requested_timestamp =    date.getFullYear()+  "-" + (date.getMonth() + 1) +  "-" +  date.getDate();
 
let item = {
 
    "id": helper.makeid(15),
    "user_id": helper.makeid(15),
    "content_type": tags[helper.getFakeNumber(0,1)],
    "client_id": helper.makeid(15),
    "created_at": date
}

 

var json = JSON.stringify( Array.from({length: helper.getFakeNumber(1,7)}, () => item) );
 console.log(json);

