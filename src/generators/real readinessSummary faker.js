
 let faker = require("faker");
 const converter = require("json-2-csv");
 var sync  = true;
  import {getFakeNumber} from "../utils/helper"
  import {getJSON} from "../utils/helper"
  import {getCSV} from "../utils/helper"

  for (let i = 0; i < 30; i++) {
    let date = faker.date.past();
    let date_end = new Date(date.getTime());
  
  date_end.setHours(date.getHours() + 24);
    let summary_date =
    date.getFullYear() +  "-" + (date.getMonth() + 1) + "-" + date.getDate() ;
  
     
  
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
    
    
   
    if(sync) 
      getJSON(readiness);
  else
    getCSV(readiness);
  
 
  
}