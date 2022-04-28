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

  let series = {
   
    deviceid: helper.makeid(30),
    model: "Pulse",
    model_id:  helper.getFakeNumber(0, 10),
     steps: helper.getFakeNumber(0, 10000),
    
    elevation: helper.getFakeNumber(0, 10000),
    calories: helper.getFakeNumber(0, 10000),
    distance: helper.getFakeNumber(0, 10000),
    stroke: helper.getFakeNumber(0, 10000),
    pool_lap: helper.getFakeNumber(0, 10000),
    duration: helper.getFakeNumber(0, 10000),
    heart_rate: helper.getFakeNumber(0, 100),
    spo2_auto: helper.getFakeNumber(0, 10000)
  };
  let body = {
    series: [series, series, series],
   
  };

  let summary = {
    status: 0,
    body: body,
  };

if (sync) helper.getJSON(summary);
else helper.getCSV(summary);
}
 
 
