var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

var date =  faker.date.past();
var requested_timestamp =  date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() + " " +date.getHours()+":"+ date.getMinutes();


const activityTypes = ['Running', 'Walking', 'Cycling', 'Swimming', 'Elliptical', 'Strength Training', 'Circuit Training', 'Core Strength', 'Arc Trainer', 'Rowing', 'Hiking', 'Mountain Biking', 'Skating', 'Nordic Walking', 'Cross-Country Skiing', 'Downhill Skiing', 'Snowboarding', 'Wheelchair', 'Yoga', 'Pilates', 'CrossFit', 'Spinning', 'Zumba', 'Barre', 'Group Workout', 'Dance', 'Bootcamp', 'Boxing / MMA', 'Meditation', 'Stairmaster / Stepwell', 'Sports', 'Other'];
 
var nullFlag = false;
var totalDuration = helper.getFakeNumber(600, 9000);
var totalDistance = 0;
var averagePace = null;
   totalDistance = helper.getFakeNumber(1, 20);
  averagePace = helper.getFakeNumber(336, 720);
  totalDuration = totalDistance * averagePace;
 

 

let cardioActivity = {
    date: requested_timestamp,
    activityId: helper.makeid(15),
  
  type: activityTypes[helper.getFakeNumber(0,20)],
  routeName: " ",
  distance: totalDistance,
  duration: totalDuration+"",
  averagePace: averagePace +"",
  averageSpeed: parseFloat((totalDistance/(totalDuration/3600)).toFixed(2)),
  caloriesBurned: Math.ceil(helper.getFakeNumber(60, 110) * totalDistance),
  climb: nullFlag? 0: helper.getFakeNumber(0, 40),
  averageHeartRate: helper.getFakeNumber(100, 180),
  friendsTagged: null,
  Notes: helper.getFakeNumber(25),
  GPXFile: requested_timestamp +'.gpx'
};

var json = JSON.stringify(cardioActivity);
 console.log(json);

 function formatDate(a) {
    return a.replace("T"," ").substring(0,a.length-5) + " UTC";             
   } 
   