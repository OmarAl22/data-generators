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


  let data = {

algo_pause_duration: helper.getFakeNumber(0, 1000000),
calories:  helper.getFakeNumber(0, 5000),
distance:  helper.getFakeNumber(0, 5000),
elevation: helper.getFakeNumber(0, 50),
hr_average: helper.getFakeNumber(0, 80),
hr_max: helper.getFakeNumber(0, 100),
hr_min: helper.getFakeNumber(0, 60),
hr_zone_0: helper.getFakeNumber(0, 100),
hr_zone_1: helper.getFakeNumber(0, 100),
hr_zone_2: helper.getFakeNumber(0, 100),
hr_zone_3: helper.getFakeNumber(0, 100),
intensity:helper.getFakeNumber(0, 100),
manual_calories: helper.getFakeNumber(0, 2000),
manual_distance: helper.getFakeNumber(0, 2000),
pause_duration:helper.getFakeNumber(0, 2000),
pool_laps: helper.getFakeNumber(0, 20),
pool_length: helper.getFakeNumber(0, 2000),
spo2_average: helper.getFakeNumber(0, 2000),
steps:helper.getFakeNumber(0, 20000),
strokes: helper.getFakeNumber(0, 2000),

  }
  let series = {

    category:  helper.getFakeNumber(0, 40),
    timezone: "Europe/Paris",
    model: helper.getFakeNumber(0, 40),
    attrib: helper.getFakeNumber(0, 40),
    startdate: helper.getFakeNumber(0, 2000000),
    enddate: helper.getFakeNumber(0, 2000000),
    date: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
    modified: helper.getFakeNumber(0, 2000000),
    deviceid: helper.makeid(30),
    data: data,
  };
  let body = {
    series: [series, series, series],
    more: true,
    offset: 0,
  };

  let summary = {
    status: 0,
    body: body,
  };

  if (sync) helper.getJSON(summary);
  else helper.getCSV(summary);
  }
 
