var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
let csvjson = require("csvjson");
let faker = require("faker");
const { parse } = require("json2csv");

const fields = [
  "summary_date ",
  "timezone ",
  "day_start ",
  "day_end ",
  "cal_active ",
  "cal_total ",
  "class_5min ",
  "steps ",
  "daily_movement ",
  "non_wear ",
  "rest ",
  "inactive ",
  "low ",
  "medium ",
  "high ",
  "inactivity_alerts ",
  "average_met ",
  "met_1min ",
  "met_min_inactive ",
  "met_min_low ",
  "met_min_medium ",
  "met_min_high ",
  "target_calories ",
  "target_km ",
  "target_miles ",
  "to_target_km ",
  "to_target_miles ",
  "score ",
  "score_meet_daily_targets ",
  "score_move_every_hour ",
  "score_recovery_time ",
  "score_stay_active ",
  "score_training_frequency ",
  "score_training_volume ",
  "rest_mode_state ",
  "total ",
  "user ",
  "day",
];
const opts = { fields };
var sync = true; 
 for (var i = 0; i < 1; i++) {
   let date = faker.date.past();
   let date_end = new Date(date.getTime());
   date_end.setHours(date.getHours() + 24);
   let record1 = {
     summary_date:
       date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear(),
     summary_date:
   date.getFullYear() +  "-" + (date.getMonth() + 1) + "-" + date.getDate(),
       
   day_start: date.toISOString(),
   day_end: date_end.toISOString(),
       timezone: (helper.getFakeNumber(-11,11)*60) ,
     
       score: helper.getFakeNumber(0, 100),
       score_stay_active: helper.getFakeNumber(0, 100),
       score_move_every_hour: helper.getFakeNumber(0, 100),
       score_meet_daily_targets: helper.getFakeNumber(0, 100),
       score_training_frequency: helper.getFakeNumber(0, 100),
       score_training_volume: helper.getFakeNumber(0, 100),
       score_recovery_time: helper.getFakeNumber(0, 100),
       daily_movement: helper.getFakeNumber(0, 10000),
       non_wear: helper.getFakeNumber(0, 1440),
       rest: helper.getFakeNumber(0, 1440),
       inactive: helper.getFakeNumber(0, 1440),
       inactivity_alerts: helper.getFakeNumber(0, 1440),
       low: helper.getFakeNumber(0, 1440),
       medium: helper.getFakeNumber(0, 1440),
       high: helper.getFakeNumber(0, 1440),
       steps: helper.getFakeNumber(0, 20000),
       cal_total: helper.getFakeNumber(0, 7000),
       cal_active: helper.getFakeNumber(0, 7000),
       met_min_inactive: helper.getFakeNumber(0, 1440),
       met_min_low: helper.getFakeNumber(0, 1440),
       met_min_medium_plus: helper.getFakeNumber(0, 1440),
       met_min_medium: helper.getFakeNumber(0, 1440),
       met_min_high: helper.getFakeNumber(0, 1440),
       average_met: helper.getFakeNumber(0, 1440),
       class_5min: getRandomClass_5min(),
       calss_1min:getRandom1Min(),
       rest_mode_state:helper.getFakeNumber(0, 4),
   };
   
   console.log(record1);

     if (sync) helper.getJSON(record1);
   else helper.getCSV(record1);
  }


  
 function getRandom1Min(){
 
  let start  = helper.getFakeNumber(0,9)/10.0;
  let beats = new Array(); 
  for (var i = 0; i < 1440; i++) {
    let temp = (helper.getFakeNumber(-1,1) + start  + (helper.getFakeNumber(0,9)/10.0));
    if (temp < 0)
    temp = 0 ;
    else if (temp > 4)
    temp = 4; 
    beats[i] =  Math.round(temp * 10) / 10;
    start = beats[i];

  }
 // console.log(beats);
  return beats;
} 

function getRandomClass_5min(){
   
  let start  = 1
  let beats = new Array(); 
  for (var i = 0; i < 288; i++) {
    let temp = start  + helper.getFakeNumber(-1,1);
    if (temp < 0)
    temp = 0 ;
    else if (temp > 4)
    temp = 4; 
    beats[i] = temp;
    start = beats[i];

  }
  //console.log(beats);
  return beats.toString();
} 
