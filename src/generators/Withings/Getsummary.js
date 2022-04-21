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
    apnea_hypopnea_index: getFakeNumber(0,1000000),
    asleepduration: getFakeNumber(0,1000000),
    breathing_disturbances_intensity: getFakeNumber(0,100),
    deepsleepduration: getFakeNumber(0,1000000),
    durationtosleep: getFakeNumber(0,1000000),
    durationtowakeup: getFakeNumber(0,1000000),
    hr_average: getFakeNumber(70,80),
    hr_max: getFakeNumber(80,100),
    hr_min: getFakeNumber(60,70),
    lightsleepduration: getFakeNumber(0,1000000),
    nb_rem_episodes: getFakeNumber(0,10),
    night_events: Array.from({length: 10}, () => Math.floor(Math.random() * 10)),
    out_of_bed_count: getFakeNumber(0,10),
    remsleepduration: getFakeNumber(0,1000000),
    rr_average: getFakeNumber(0,10),
    rr_max: getFakeNumber(0,10),
    rr_min: getFakeNumber(0,10),
    sleep_efficiency: getFakeNumber(0,10),
    sleep_latency: getFakeNumber(0,10),
    sleep_score:getFakeNumber(0,10),
    snoring: getFakeNumber(0,10),
    snoringepisodecount: getFakeNumber(0,10),
    total_sleep_time: getFakeNumber(0,1000000),
    total_timeinbed: getFakeNumber(0,1000000),
    wakeup_latency: 0,
    wakeupcount:getFakeNumber(0,10),
    wakeupduration: getFakeNumber(0,1000000),
    waso: 0
  };


  let activity = {
    timezone: "Europe/Paris",
    model:getFakeNumber(0,10),
    model_id:getFakeNumber(0,10),
    startdate:getFakeNumber(1000,1000000),
    enddate: getFakeNumber(1000,1000000),
    


    date:
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
    
      data:data,
  };
  let body = {
    series: [activity],
    more: true,
    offset: 0,
  };

  let summary = {
    status: 0,
    body: body,
  };

  array.push(summary);
}

if (sync) getJSON(array);
else getCSV(array);

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

function makeid(length) {
  var result = "";
  var characters = "abcdefghijklmnopqrstuvwxyz0123456789-";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
