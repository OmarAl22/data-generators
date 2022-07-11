var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

const activityTypes = ['Running', 'Walking', 'Cycling', 'Swimming', 'Elliptical', 'Strength Training', 'Circuit Training', 'Core Strength', 'Arc Trainer', 'Rowing', 'Hiking', 'Mountain Biking', 'Skating', 'Nordic Walking', 'Cross-Country Skiing', 'Downhill Skiing', 'Snowboarding', 'Wheelchair', 'Yoga', 'Pilates', 'CrossFit', 'Spinning', 'Zumba', 'Barre', 'Group Workout', 'Dance', 'Bootcamp', 'Boxing / MMA', 'Meditation', 'Stairmaster / Stepwell', 'Sports', 'Other'];
 const flag = [true,false];

let Activity = {
 

  id: helper.getFakeNumber(0,200),
  name: activityTypes[helper.getFakeNumber(0,20)],
  created_at: faker.date.past(),
  updated_at: faker.date.past(),
  has_gps: flag[helper.getFakeNumber(0,2)],
  icon_url: "https://s3-us-west-2.amazonaws.com/icons.whoop.com/mobile/activities/jumping_rope.png",
  is_current:  flag[helper.getFakeNumber(0,2)],
  has_survey:  flag[helper.getFakeNumber(0,2)],
  category: "cardiovascular|non-cardiovascular"

};

var json = JSON.stringify([Activity,Activity]);
 console.log(json);

