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
    apnea_hypopnea_index: helper.getFakeNumber(0,1000000),
    asleepduration: helper.getFakeNumber(0,1000000),
    breathing_disturbances_intensity: helper.getFakeNumber(0,100),
    deepsleepduration: helper.getFakeNumber(0,1000000),
    durationtosleep: helper.getFakeNumber(0,1000000),
    durationtowakeup: helper.getFakeNumber(0,1000000),
    hr_average: helper.getFakeNumber(70,80),
    hr_max: helper.getFakeNumber(80,100),
    hr_min: helper.getFakeNumber(60,70),
    lightsleepduration: helper.getFakeNumber(0,1000000),
    nb_rem_episodes: helper.getFakeNumber(0,10),
    night_events: Array.from({length: 10}, () => Math.floor(Math.random() * 10)),
    out_of_bed_count: helper.getFakeNumber(0,10),
    remsleepduration: helper.getFakeNumber(0,1000000),
    rr_average: helper.getFakeNumber(0,10),
    rr_max: helper.getFakeNumber(0,10),
    rr_min: helper.getFakeNumber(0,10),
    sleep_efficiency: helper.getFakeNumber(0,10),
    sleep_latency: helper.getFakeNumber(0,10),
    sleep_score:helper.getFakeNumber(0,10),
    snoring: helper.getFakeNumber(0,10),
    snoringepisodecount: helper.getFakeNumber(0,10),
    total_sleep_time: helper.getFakeNumber(0,1000000),
    total_timeinbed: helper.getFakeNumber(0,1000000),
    wakeup_latency: 0,
    wakeupcount:helper.getFakeNumber(0,10),
    wakeupduration: helper.getFakeNumber(0,1000000),
    waso: 0
  };


  let activity = {
    timezone: "Europe/Paris",
    model:helper.getFakeNumber(0,10),
    model_id:helper.getFakeNumber(0,10),
    startdate:helper.getFakeNumber(1000,1000000),
    enddate: helper.getFakeNumber(1000,1000000),
    


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

if (sync) helper.getJSON(array);
else helper.getCSV(array);

 
 
