var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
let csvjson = require("csvjson");
let faker = require("faker");
const { parse } = require("json2csv");

var sync = true;
var array = [];

for (let i = 0; i < 1; i++) {
  let date = faker.date.past();
  let date_end = new Date(date.getTime());
  date_end.setHours(date.getHours() + 24);

  let activity = {
    signal:
    Array.from({length: 40}, () => Math.floor(Math.random() * 40)),
    sampling_frequency: helper.getFakeNumber(1000,10000)%1000,
    wearposition: helper.getFakeNumber(0,7)
 
  };
  let body = {
    activities: activity,
  
  };

  let summary = {
    status: 0,
    body: body,
  };

  array.push(summary);
}

if (sync) helper.getJSON(array);
else helper.getCSV(array);
 