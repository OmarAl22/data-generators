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

  let map = {
    id: ""+ helper.getFakeNumber(0, 100000000),
    polyline:"polyline",
    resource_state:helper.getFakeNumber(0, 100),
    summary_polyline:"summary_polyline",
  };


  let athlete = {
    id: helper.getFakeNumber(0, 100000000),
    resource_state: helper.getFakeNumber(0, 100),
  
  };



  let segment = {
    id: helper.getFakeNumber(0, 100000000),
    resource_state: helper.getFakeNumber(0, 100),
    name: "name",
    activity:activity,
    activity_type:"activity_type",
    distance:helper.getFakeNumber(0, 20000),
    average_grade:helper.getFakeNumber(0, 20),
    maximum_grade:helper.getFakeNumber(0, 100),
    elevation_high:helper.getFakeNumber(0, 2000),
    elevation_low:helper.getFakeNumber(0, 2000),

  }; 

  let splits_metric = {
    distance:helper.getFakeNumber(0, 2000),
    elapsed_time:helper.getFakeNumber(0, 1000),
    elevation_difference:helper.getFakeNumber(0, 100),
    moving_time:helper.getFakeNumber(0, 100),
    split:helper.getFakeNumber(0, 10),
    average_speed:helper.getFakeNumber(0, 20),
    pace_zone:helper.getFakeNumber(0, 10)
    
  }
  let segment_efforts = {
    id: helper.getFakeNumber(0, 100000000),
    resource_state: helper.getFakeNumber(0, 100),
    name: "name",
    activity:activity,
    athlete:athlete,
    elapsed_time   :helper.getFakeNumber(0, 2000),
moving_time   :helper.getFakeNumber(0, 2000),
start_date   :   date   ,
start_date_local   :  date   ,
distance   :helper.getFakeNumber(0, 2000),
start_index   :helper.getFakeNumber(100, 200),
end_index   :helper.getFakeNumber(0, 100),
average_cadence   :helper.getFakeNumber(0, 2000),
device_watts   :flag[helper.getFakeNumber(0, 1)], 
average_watts   :helper.getFakeNumber(0, 2000),
segment,segment,
 kom_rank :null,
 pr_rank :null,
 achievements :[
   
],
 hidden :false

 
  }; 

  let laps = {
    id: helper.getFakeNumber(0, 100000000),
    resource_state: helper.getFakeNumber(0, 100),
    activity:activity,
    athlete:athlete,
    elapsed_time : helper.getFakeNumber(0, 2000),
    moving_time : helper.getFakeNumber(0, 2000),
    start_date : date,
    start_date_local : date,
    distance : helper.getFakeNumber(0, 200000),
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

let gear = { 
    id: helper.getFakeNumber(0, 100000000),
primary:true,
name:"name",
resource_state:helper.getFakeNumber(0, 10),
distance:helper.getFakeNumber(0, 100000000),


}

let primary = {
    id:null,
    unique_id:"3FDGKL3-204E-4867-9E8D-89FC79EAAE17",
    "urls":{
       100:"https://dgtzuqphqg23d.cloudfront.net/Bv93zv5t_mr57v0wXFbY_JyvtucgmU5Ym6N9z_bKeUI-128x96.jpg",
       600:"https://dgtzuqphqg23d.cloudfront.net/Bv93zv5t_mr57v0wXFbY_JyvtucgmU5Ym6N9z_bKeUI-768x576.jpg"
    },
    "source": helper.getFakeNumber(0, 100),
 }

let photos = {

    primary:primary,
      use_primary_photo :true,
      count : helper.getFakeNumber(0, 100),
}



let highlighted_kudosers = {

    destination_url:"strava://athletes/12345678987654321",
    display_name:"Marianne V.",
    avatar_url:"https://dgalywyr863hv.cloudfront.net/pictures/athletes/12345678987654321/12345678987654321/3/medium.jpg",
    show_name:true
}



  let lap = {
  id : helper.getFakeNumber(0, 100000000),
  resource_state : helper.getFakeNumber(0, 100),
  external_id: "external_id" + helper.getFakeNumber(0, 100000000),
  name : "Lap" + helper.getFakeNumber(0, 100000000),
  athlete:athlete,
   name  : "activity name" + helper.getFakeNumber(0, 100),
   distance : helper.getFakeNumber(0, 200000),
   moving_time : helper.getFakeNumber(0, 2000),
   elapsed_time : helper.getFakeNumber(0, 2000),
   total_elevation_gain : helper.getFakeNumber(0, 2000),
    type: "type",
    start_date : date,
    start_date_local : date,
    timezone : "(GMT-08:00) America/Los_Angeles",
    utc_offset : helper.getFakeNumber(-5000, 5000),
    start_latlng : [ helper.getFakeNumber(-100, 100), helper.getFakeNumber(-100, 100) ],
    end_latlng : [ helper.getFakeNumber(-100, 100), helper.getFakeNumber(-100, 100) ],
    achievement_count : helper.getFakeNumber(0, 100),
    kudos_count : helper.getFakeNumber(0, 100),
    comment_count : helper.getFakeNumber(0, 100),
    athlete_count :helper.getFakeNumber(0, 100),
    photo_count : helper.getFakeNumber(0, 100),
    map: map,
    trainer  : flag[helper.getFakeNumber(0, 1)], 
    commute  : flag[helper.getFakeNumber(0, 1)], 
    manual  : flag[helper.getFakeNumber(0, 1)], 
    private  : flag[helper.getFakeNumber(0, 1)],   
    flagged  : flag[helper.getFakeNumber(0, 1)],
    gear_id  : "id" + helper.getFakeNumber(0, 100000000),
    from_accepted_tag : flag[helper.getFakeNumber(0, 1)],
    average_speed :helper.getFakeNumber(0, 100),
    max_speed : helper.getFakeNumber(0, 100),
    average_cadence : helper.getFakeNumber(0, 100),
    average_temp  :  helper.getFakeNumber(0, 100),
    average_watts : helper.getFakeNumber(0, 100),
    weighted_average_watts :helper.getFakeNumber(0, 100),
    kilojoules : helper.getFakeNumber(0, 100),
    device_watts : flag[helper.getFakeNumber(0, 1)],
    has_heartrate : flag[helper.getFakeNumber(0, 1)],
   
    max_watts : helper.getFakeNumber(0, 100),
    elev_high  :  helper.getFakeNumber(0, 1000),
    elev_low  :  helper.getFakeNumber(0, 100),
    pr_count  : helper.getFakeNumber(0, 10),
    total_photo_count  :  helper.getFakeNumber(0, 10),
    has_kudoed  :  flag[helper.getFakeNumber(0, 1)],
    workout_type  : helper.getFakeNumber(0, 10),
    suffer_score  : null,
     description :"description",
     calories :helper.getFakeNumber(0, 1000),
     segment_efforts:[segment_efforts],
     splits_metric: [splits_metric],
     laps:[laps],
     gear:gear,
    partner_brand_tag :null,
    photos:photos,
    highlighted_kudosers:[highlighted_kudosers],
    hide_from_home:flag[helper.getFakeNumber(0, 1)],
    device_name:"device_name",
    embed_token:helper.makeid,
    segment_leaderboard_opt_out:flag[helper.getFakeNumber(0, 1)],
    leaderboard_opt_out:flag[helper.getFakeNumber(0, 1)],
  };

  if (sync) helper.getJSON(lap);
 

   
 
  }

 
/*
    pr_count : helper.getFakeNumber(0, 100),
   average_heartrate : helper.getFakeNumber(0, 100),
    max_heartrate : helper.getFakeNumber(0, 100),
 
  activity:activity,
 
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
  split : helper.getFakeNumber(0, 10),*/