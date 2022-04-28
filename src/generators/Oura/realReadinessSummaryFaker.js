var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
let faker = require("faker");
const { parse } = require("json2csv");
const fields = [
  "summary_date",
  "period_id",
  "score",
  "score_previous_night",
  "score_sleep_balance",
  "score_resting_hr",
  "score_recovery_index",
  "score_temperature",
  "rest_mode_state",
];
const opts = { fields };
var sync = true;

for (let i = 0; i < 30; i++) {
  let date = faker.date.past();
  let date_end = new Date(date.getTime());

  date_end.setHours(date.getHours() + 24);
  let summary_date =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

  let readiness = {
    summary_date: summary_date,
    period_id: helper.getFakeNumber(0, 6), //assume user sleeps a maximum of 6 times a day
    score: helper.getFakeNumber(0, 100),
    score_previous_night: helper.getFakeNumber(0, 100),
    score_sleep_balance: helper.getFakeNumber(0, 100),
    score_previous_day: helper.getFakeNumber(0, 100),
    score_activity_balance: helper.getFakeNumber(0, 100),
    score_resting_hr: helper.getFakeNumber(0, 100),
    score_hrv_balance: helper.getFakeNumber(0, 100),
    score_recovery_index: helper.getFakeNumber(0, 100),
    score_temperature: helper.getFakeNumber(0, 100),
    rest_mode_state: helper.getFakeNumber(0, 4),
  };

  console.log(readiness);

  if (sync) helper.getJSON(readiness);
  else helper.getCSV(readiness);
 
}
