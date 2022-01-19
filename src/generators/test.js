 

 let faker = require("faker");
 const converter = require("json-2-csv");
 var sync  = true;
 
  
 for (var i = 0; i < 30; i++) {
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
       timezone: (getFakeNumber(-11,11)*60) ,
     
       score: getFakeNumber(0, 100),
       score_stay_active: getFakeNumber(0, 100),
       score_move_every_hour: getFakeNumber(0, 100),
       score_meet_daily_targets: getFakeNumber(0, 100),
       score_training_frequency: getFakeNumber(0, 100),
       score_training_volume: getFakeNumber(0, 100),
       score_recovery_time: getFakeNumber(0, 100),
       daily_movement: getFakeNumber(0, 10000),
       non_wear: getFakeNumber(0, 1440),
       rest: getFakeNumber(0, 1440),
       inactive: getFakeNumber(0, 1440),
       inactivity_alerts: getFakeNumber(0, 1440),
       low: getFakeNumber(0, 1440),
       medium: getFakeNumber(0, 1440),
       high: getFakeNumber(0, 1440),
       steps: getFakeNumber(0, 20000),
       cal_total: getFakeNumber(0, 7000),
       cal_active: getFakeNumber(0, 7000),
       met_min_inactive: getFakeNumber(0, 1440),
       met_min_low: getFakeNumber(0, 1440),
       met_min_medium_plus: getFakeNumber(0, 1440),
       met_min_medium: getFakeNumber(0, 1440),
       met_min_high: getFakeNumber(0, 1440),
       average_met: getFakeNumber(0, 1440),
       class_5min: getRandomClass_5min(),
       calss_1min:getRandom1Min(),
       rest_mode_state:getFakeNumber(0, 4),
   };
   
  
   if(sync) 
 getJSON(record1);
else
 getCSV(record1);

 function getFakeNumber(a, b) {
   return faker.datatype.number({ min: a, max: b });
 }

 function getJSON(obj){
    
   let json =  JSON.stringify(obj);
   console.log(json);
    
 }


 function getCSV(obj){
   var csv = converter.json2csv(obj, (err, csv) => {
     if (err) {
      // throw err;
     } 
     console.log(csv);
   }); 
  

 
 }

 function getRandom1Min(){
 
  let start  = getFakeNumber(0,9)/10.0;
  let beats = new Array(); 
  for (var i = 0; i < 1440; i++) {
    let temp = (getFakeNumber(-1,1) + start  + (getFakeNumber(0,9)/10.0));
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
    let temp = start  + getFakeNumber(-1,1);
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

 }



 
