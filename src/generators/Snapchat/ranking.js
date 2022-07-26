var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

var date =  faker.date.past();
var requested_timestamp =    date.getFullYear()+  "-" + (date.getMonth() + 1) +  "-" +  date.getDate() +  " " +date.getHours()+":"+ date.getMinutes()+  ":"+ date.getSeconds() + " UTC";
var interset = ["College Life",
"Social Media/Viral Star Stories",
"Beauty &amp; Fashion",
"Movies, TV, Books: Talk Shows",
"E-Sports Games",
"News &amp; Now",
"Comedy Genre",
"Celebrity Stories",
"Movie &amp; Television",
"Science &amp; Technology",
"Comedian Stories",
"Actor Stories",
"Food &amp; Dining",
"Reality TV",
"Celebrity Relationships",
"Music",
"Hip-Hop &amp; Rap"]


 
let record = {
    "Number of Stories Viewed": Array.from({length: helper.getFakeNumber(1,30)}, () => Math.floor(Math.random() * 400)),
    "Content Interests": Array.from({length: helper.getFakeNumber(1,7)}, () => interset[helper.getFakeNumber(1,10)]),
  
};

var json = JSON.stringify(record);
 console.log(json);

