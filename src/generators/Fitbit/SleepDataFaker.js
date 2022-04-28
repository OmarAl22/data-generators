var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
let faker = require("faker");
let activity = ["deep", "light", "rem", "wake"];
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
var sync = false;

if (sync) {
  console.log("p_timestamp,p_datetime,p_level,p_seconds");
} else {
  console.log("p_timestamp,p_datetime,p_level,p_seconds,user,day,period");
}

let p_timestamp = helper.getFakeNumber(0, 10000000000);
let date = faker.date.past();
let id_hash = faker.random.alphaNumeric(36);
let period = 0;
for (let i = 0; i < 10; i++) {
  date.setHours(date.getHours() + helper.getFakeNumber(0, 2));
  date.setMinutes(date.getMinutes() + helper.getFakeNumber(0, 10));

  p_timestamp = p_timestamp + helper.getFakeNumber(0, 10000);
  let p_datetime = date;
  let p_level = activity[helper.getFakeNumber(0, 3)];
  let day = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay();
  let p_seconds = helper.getFakeNumber(0, 1000);
  period = period + helper.getFakeNumber(0, 1);
  if (sync) {
    console.log(
      p_timestamp + "," + p_datetime + "," + p_level + "," + p_seconds
    );
  } else {
    //   console.log("p_timestamp,p_datetime,p_level,p_seconds,user,day,period");
    console.log(
      p_timestamp +
        "," +
        p_datetime +
        "," +
        p_level +
        "," +
        p_seconds +
        "," +
        ",ID_" +
        id_hash +
        "," +
        day +
        "," +
        period
    );
  }
}

 
