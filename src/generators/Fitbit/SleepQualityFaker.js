var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
let csvjson = require("csvjson");
let faker = require("faker");
const { parse } = require("json2csv");
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
const opts = { fields };
var sync = true;

if (sync) {
  console.log("p_timestamp,p_datetime,p_value,p_level");
} else {
  console.log("p_timestamp,p_datetime,p_value,p_level,user,day");
}

let p_timestamp = helper.getFakeNumber(0, 10000000000);
let date = faker.date.past();
let id_hash = faker.random.alphaNumeric(36);

for (let i = 0; i < 10; i++) {
  date.setHours(date.getHours() + helper.getFakeNumber(0, 2));
  date.setMinutes(date.getMinutes() + helper.getFakeNumber(0, 10));

  p_timestamp = p_timestamp + helper.getFakeNumber(0, 10000);
  let p_datetime = date;
  let p_value = helper.getFakeNumber(0, 30);
  let p_level = activity[helper.getFakeNumber(0, 3)];
  let day = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay();

  if (sync) {
    console.log(p_timestamp + "," + p_datetime + "," + p_value + "," + p_level);
  } else {
    console.log(
      p_timestamp +
        "," +
        p_datetime +
        "," +
        p_value +
        "," +
        p_level +
        ",ID_" +
        id_hash +
        "," +
        day
    );
  }
}

 