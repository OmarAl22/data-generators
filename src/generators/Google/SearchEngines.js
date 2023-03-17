var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
var flag = [true,false];


let apps = {


    "suggestions_url":faker.internet.url(),
    "favicon_url":"",
    "safe_for_autoreplace":flag[helper.getFakeNumber(0,1)],
    "is_active":"ACTIVE_STATUS_UNSPECIFIED",
    "date_created":helper.getFakeNumber(000000000000000,999999999999999),
    "url":faker.internet.url(),
    "new_tab_url":faker.internet.url(),
    "originating_url":faker.internet.url(),
    "sync_guid":helper.makeid(25),
    "short_name":"short_name",
    "keyword":"keyword",
    "input_encodings":"UTF-8",
    "prepopulate_id":flag[helper.getFakeNumber(0,10)],
    "last_modified":helper.getFakeNumber(000000000000000,999999999999999),

 
}
 
let SearchEngine = {
 
    "Search Engines":Array.from({length: helper.getFakeNumber(1,7)}, () => apps),
  
}

var json = JSON.stringify( SearchEngine );

 console.log(json);
