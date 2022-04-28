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
    date:
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
    timezone: "Europe/Paris",
    deviceid: helper.makeid(30),
    hash_deviceid: helper.makeid(30),
    brand: helper.getFakeNumber(0, 40),
    is_tracker: true,
    steps: helper.getFakeNumber(0, 10000),
    distance: helper.getFakeNumber(0, 10000),
    elevation: helper.getFakeNumber(0, 20),
    soft: helper.getFakeNumber(0, 10000),
    moderate: helper.getFakeNumber(0, 10000),
    intense: helper.getFakeNumber(0, 10000),
    active: helper.getFakeNumber(0, 10000),
    calories: helper.getFakeNumber(0, 5000),
    totalcalories: helper.getFakeNumber(0, 5000),
    hr_average: helper.getFakeNumber(0, 120),
    hr_min: helper.getFakeNumber(0, 80),
    hr_max: helper.getFakeNumber(80, 120),
    hr_zone_0: helper.getFakeNumber(0, 5000),
    hr_zone_1: helper.getFakeNumber(0, 5000),
    hr_zone_2: helper.getFakeNumber(0, 5000),
    hr_zone_3: helper.getFakeNumber(0, 5000),
  };
  let body = {
    activities: [activity, activity, activity],
    more: true,
    offset: 0,
  };

  let summary = {
    status: 0,
    body: body,
  };

  array.push(summary);
}

if (sync) helper.getJSON(array);
else helper.getCSV(array);
 
 