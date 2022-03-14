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
    period_id: getFakeNumber(0, 6), //assume user sleeps a maximum of 6 times a day
    score: getFakeNumber(0, 100),
    score_previous_night: getFakeNumber(0, 100),
    score_sleep_balance: getFakeNumber(0, 100),
    score_previous_day: getFakeNumber(0, 100),
    score_activity_balance: getFakeNumber(0, 100),
    score_resting_hr: getFakeNumber(0, 100),
    score_hrv_balance: getFakeNumber(0, 100),
    score_recovery_index: getFakeNumber(0, 100),
    score_temperature: getFakeNumber(0, 100),
    rest_mode_state: getFakeNumber(0, 4),
  };

  console.log(readiness);

  if (sync) getJSON(readiness);
  else getCSV(readiness);

  function getFakeNumber(a, b) {
    return faker.datatype.number({ min: a, max: b });
  }

  function getJSON(obj) {
    let json = JSON.stringify(obj);
    console.log(json);
  }

 
  function getCSV(obj) {
    let json = JSON.stringify(obj);
    try {
       const csvData = csvjson.toCSV(json, {
        headers: fields,
      });
      const csv = parse(json, opts);
      console.log(csvData);
    } catch (err) {
      console.error(err);
    }
  }
}
