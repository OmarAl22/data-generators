var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
 let faker = require("faker");
 
var sync = true;

for (let i = 0; i < 1; i++) { 
  let date = faker.date.past();
  let date_end = new Date(date.getTime());
  date_end.setHours(date.getHours() + 24);

  let activity = {
    id: helper.getFakeNumber(0, 100000000),
    resource_state: helper.getFakeNumber(0, 100),
  
  };
  let athlete = {
    id: helper.getFakeNumber(0, 100000000),
    resource_state: helper.getFakeNumber(0, 100),
  
  };
  let lap = {
  id : helper.getFakeNumber(0, 100000000),
  resource_state : helper.getFakeNumber(0, 100),
  name : "Lap" + helper.getFakeNumber(0, 100000000),
  activity:activity,
  athlete:athlete,
  elapsed_time : helper.getFakeNumber(0, 2000),
  moving_time : helper.getFakeNumber(0, 2000),
  start_date : date,
  start_date_local : date,
  distance : helper.getFakeNumber(0, 20000),
  start_index : helper.getFakeNumber(0, 200),
  end_index : helper.getFakeNumber(0, 200),
  total_elevation_gain : helper.getFakeNumber(0, 2000),
  average_speed : helper.getFakeNumber(0, 20),
  max_speed : helper.getFakeNumber(0, 20),
  average_cadence : helper.getFakeNumber(0, 100),
  device_watts : true,
  average_watts : helper.getFakeNumber(0, 2000),
  lap_index : helper.getFakeNumber(0, 100),
  split : helper.getFakeNumber(0, 10),


  };

  if (sync) helper.getJSON([lap,lap]);
 

   
 
  }

 
