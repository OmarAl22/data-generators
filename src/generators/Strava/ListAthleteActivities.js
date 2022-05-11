var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
 let faker = require("faker");
 let flag = [true,false];
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


  let map =  {
    id : 'a' + helper.getFakeNumber(0, 100000000),
    summary_polyline : null,
    resource_state : helper.getFakeNumber(0, 10),
  };
  
  let lap = {
    resource_state : helper.getFakeNumber(0, 10),
    athlete :athlete,
    name : "Test",
    distance : helper.getFakeNumber(0, 1000),
    moving_time : helper.getFakeNumber(0, 10000),
    elapsed_time : helper.getFakeNumber(0, 10000),
    total_elevation_gain : helper.getFakeNumber(0, 1000),
    type : "Ride",
    workout_type : null,
    id : helper.makeid(15),
    external_id : "garmin_push_" + helper.getFakeNumber(0, 100000000),
    upload_id : helper.getFakeNumber(0, 1000000000),
    start_date : date,
    start_date_local : date,
    timezone : "(GMT-08:00) America/Los_Angeles",
    utc_offset : helper.getFakeNumber(-5000, 5000),
    start_latlng : [ helper.getFakeNumber(-100, 100), helper.getFakeNumber(-100, 100) ],
    end_latlng : [ helper.getFakeNumber(-100, 100), helper.getFakeNumber(-100, 100) ],
    location_city : "city",
    location_state : "state",
    location_country : "country",
    achievement_count : helper.getFakeNumber(0, 100),
    kudos_count : helper.getFakeNumber(0, 100),
    comment_count : helper.getFakeNumber(0, 100),
    athlete_count :helper.getFakeNumber(0, 100),
    photo_count : helper.getFakeNumber(0, 100),
    map :map,
    trainer : flag[helper.getFakeNumber(0, 1)],
    commute : flag[helper.getFakeNumber(0, 1)],
    manual : flag[helper.getFakeNumber(0, 1)],
    private : flag[helper.getFakeNumber(0, 1)],
    flagged : flag[helper.getFakeNumber(0, 1)],
    gear_id : "b" + helper.getFakeNumber(0, 1000000),
    from_accepted_tag : flag[helper.getFakeNumber(0, 1)],
    average_speed :helper.getFakeNumber(0, 100),
    max_speed : helper.getFakeNumber(0, 100),
    average_cadence : helper.getFakeNumber(0, 100),
    average_watts : helper.getFakeNumber(0, 100),
    weighted_average_watts :helper.getFakeNumber(0, 100),
    kilojoules : helper.getFakeNumber(0, 100),
    device_watts : flag[helper.getFakeNumber(0, 1)],
    has_heartrate : flag[helper.getFakeNumber(0, 1)],
    average_heartrate : helper.getFakeNumber(0, 100),
    max_heartrate : helper.getFakeNumber(0, 100),
    max_watts : helper.getFakeNumber(0, 100),
    pr_count : helper.getFakeNumber(0, 100),
    total_photo_count :helper.getFakeNumber(0, 100),
    has_kudoed : flag[helper.getFakeNumber(0, 1)],
    suffer_score :helper.getFakeNumber(0, 100),
  
  }  



  if (sync) helper.getJSON([lap,lap]);
 

   
 
  }

 
