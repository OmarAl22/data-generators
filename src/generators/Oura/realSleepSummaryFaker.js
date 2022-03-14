let faker = require("faker");
const { parse } = require("json2csv");
const fields = [
  "summary_date",
  "period_id",
  "is_longest",
  "timezone",
  "bedtime_end",
  "bedtime_start",
  "breath_average",
  "duration",
  "total",
  "awake",
  "rem",
  "deep",
  "light",
  "midpoint_time",
  "efficiency",
  "restless",
  "onset_latency",
  "hr_5min",
  "hypnogram_5min",
  "rmssd",
  "rmssd_5min",
  "score",
  "score_alignment",
  "score_deep",
  "score_disturbances",
  "score_efficiency",
  "score_latency",
  "score_rem",
  "score_total",
  "temperature_deviation",
  "temperature_trend_deviation",
  "bedtime_start_delta",
  "bedtime_end_delta",
  "midpoint_at_delta",
  "temperature_delta",
  "hr_lowest",
  "hr_average",
  "user",
  "day",
];
const opts = { fields };
var sync = true;
for (var i = 0; i < 30; i++) {
  let date = faker.date.past();
  let date_end = new Date(date.getTime());
  date_end.setHours(date.getHours() + 24);
  let record1 = {
    summary_date:
      date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear(),
    summary_date:
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
    period_id: getFakeNumber(0, 100),
    is_longest: 1,
    timezone: getFakeNumber(-11, 11) * 60,
    bedtime_start: date.toISOString(),
    bedtime_end: date_end.toISOString(),

    score: getFakeNumber(0, 100),
    score_total: getFakeNumber(0, 100),
    score_disturbances: getFakeNumber(0, 100),
    score_efficiency: getFakeNumber(0, 100),
    score_latency: getFakeNumber(0, 100),
    score_rem: getFakeNumber(0, 100),
    score_deep: getFakeNumber(0, 100),
    score_alignment: getFakeNumber(0, 100),
    total: getFakeNumber(0, 86400),
    duration: getFakeNumber(0, 86400),
    awake: getFakeNumber(0, 86400),
    light: getFakeNumber(0, 86400),
    rem: getFakeNumber(0, 86400),
    deep: getFakeNumber(0, 86400),
    onset_latency: getFakeNumber(0, 100),
    restless: getFakeNumber(0, 100),
    efficiency: getFakeNumber(0, 100),
    midpoint_time: getFakeNumber(0, 86400),
    hr_lowest: getFakeNumber(0, 150),
    hr_average: getFakeNumber(0, 150),
    rmssd: getFakeNumber(0, 100),
    breath_average: getFakeNumber(0, 100),
    temperature_delta: getFakeNumber(0, 100),

    hypnogram_5min: getRandomHypnogram(),
    hr_5min: getRandomHeartBeats(3),
    rmssd_5min: getRandomHeartBeats(10),
  };

  console.log(record1);
  if (sync) getJSON(record1);
  else getCSV(record1);
}

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

function getRandomHeartBeats(change) {
  let length = getFakeNumber(50, 150);
  let start = getFakeNumber(50, 120);
  let beats = new Array();
  for (var i = 0; i < length; i++) {
    beats[i] = start + getFakeNumber(-1 * change, change);
    start = beats[i];
  }
  // console.log(beats);
  return beats;
}

function getRandomHypnogram() {
  let length = getFakeNumber(50, 150);
  let start = 1;
  let beats = new Array();
  for (var i = 0; i < length; i++) {
    let temp = start + getFakeNumber(-1, 1);
    if (temp < 1) temp = 1;
    else if (temp > 4) temp = 4;
    beats[i] = temp;
    start = beats[i];
  }
  //console.log(beats);
  return beats.toString();
}
