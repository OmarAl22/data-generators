var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
let csvjson = require("csvjson");
let faker = require("faker");
const { parse } = require("json2csv");
const fields = [
  "activityscore",
  "activitycalories",
  "caloriesbmr",
  "caloriesout",
  "distances",
  "elevation",
  "fairlyactiveminutes",
  "floors",
  "heartratezones",
  "lightlyactiveminutes",
  "marginalcalories",
  "restingheartrate",
  "sedentaryminutes",
  "steps",
  "veryactiveminutes",
  "user",
  "day",
];
const opts = { fields };
var sync = true;
var array = [];

for (let i = 0; i < 1; i++) {
  let date = faker.date.past();
  let date_end = new Date(date.getTime());
  date_end.setHours(date.getHours() + 24);

  let deep = {
    count: helper.getFakeNumber(0, 100),
    minutes: helper.getFakeNumber(0, 100),
    thirtyDayAvgMinutes: helper.getFakeNumber(0, 100),
  };
  let light = {
    count: helper.getFakeNumber(0, 100),
    minutes: helper.getFakeNumber(0, 100),
    thirtyDayAvgMinutes: helper.getFakeNumber(0, 100),
  };
  let rem = {
    count: helper.getFakeNumber(0, 100),
    minutes: helper.getFakeNumber(0, 100),
    thirtyDayAvgMinutes: helper.getFakeNumber(0, 100),
  };
  let wake = {
    count: helper.getFakeNumber(0, 100),
    minutes: helper.getFakeNumber(0, 100),
    thirtyDayAvgMinutes: helper.getFakeNumber(0, 100),
  };

  let summary = {
    deep: deep,
    light: light,
    rem: rem,
    wake: wake,
    activeScore: helper.getFakeNumber(-1, 5),

    startTimeTS: helper.getFakeNumber(0, 10000000000),
    endTimeTS: helper.getFakeNumber(0, 10000000000),
    startTime: date,
    endTime: date_end,
    minutesAfterWakeup: helper.getFakeNumber(0, 100),
    minutesAsleep: helper.getFakeNumber(0, 100),
    minutesAwake: helper.getFakeNumber(0, 100),
    minutesToFallAsleep: helper.getFakeNumber(0, 100),
    timeInBed: helper.getFakeNumber(0, 1000),
  };

  if (sync) helper.getJSON(summary);
  else helper.getCSV(summary);

   
   
}
