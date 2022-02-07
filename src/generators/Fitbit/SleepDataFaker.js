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

let p_timestamp = getFakeNumber(0, 10000000000);
let date = faker.date.past();
let id_hash = faker.random.alphaNumeric(36);
let period = 0;
for (let i = 0; i < 10; i++) {
  date.setHours(date.getHours() + getFakeNumber(0, 2));
  date.setMinutes(date.getMinutes() + getFakeNumber(0, 10));

  p_timestamp = p_timestamp + getFakeNumber(0, 10000);
  let p_datetime = date;
  let p_level = activity[getFakeNumber(0, 3)];
  let day = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay();
  let p_seconds = getFakeNumber(0, 1000);
  period = period + getFakeNumber(0, 1);
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

function getFakeNumber(a, b) {
  return faker.datatype.number({ min: a, max: b });
}
