var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

const activityTypes = ['Running', 'Walking', 'Cycling', 'Swimming', 'Elliptical', 'Strength Training', 'Circuit Training', 'Core Strength', 'Arc Trainer', 'Rowing', 'Hiking', 'Mountain Biking', 'Skating', 'Nordic Walking', 'Cross-Country Skiing', 'Downhill Skiing', 'Snowboarding', 'Wheelchair', 'Yoga', 'Pilates', 'CrossFit', 'Spinning', 'Zumba', 'Barre', 'Group Workout', 'Dance', 'Bootcamp', 'Boxing / MMA', 'Meditation', 'Stairmaster / Stepwell', 'Sports', 'Other'];
 const flag = [true,false];

let Activity = {
 

    cycle_id: helper.getFakeNumber(0,200),
    created_at: faker.date.past(),
    updated_at: faker.date.past(),
    sport_id: helper.getFakeNumber(0,20),
    activity_id: helper.getFakeNumber(10000,100000),
    gps_enabled: flag[helper.getFakeNumber(0,2)],
    intensity_score: helper.getFakeNumber(0,200),
    max_heart_rate: helper.getFakeNumber(100,200),
    average_heart_rate: helper.getFakeNumber(100,200),
    distance: helper.getFakeNumber(0,200),
    performance: "string",
    energy: "string",
    rpe: "string",
    raw_intensity_score: helper.getFakeNumber(0,200),
    altitude_gain: "string",
    altitude_change: "string",
    cumulative_workout_intensity: helper.getFakeNumber(0,200),
    zone_durations: [
        helper.getFakeNumber(0,200),
        helper.getFakeNumber(0,200),
        helper.getFakeNumber(0,200),
        helper.getFakeNumber(0,200),
        helper.getFakeNumber(0,200),
        helper.getFakeNumber(0,200)
        ],
    projected_score: helper.getFakeNumber(0,200),
    confidence: "string",
    wac_prediction: "string",
    kilojoules: helper.getFakeNumber(0,200),
    user_id: helper.getFakeNumber(0,200),
    during: [faker.date.past(),faker.date.past()],
    timezone_offset: "+0200",
    survey_response_id: helper.getFakeNumber(0,200),
    percent_recorded: helper.getFakeNumber(0,200),
    auto_detected: flag[helper.getFakeNumber(0,2)],
    state: "complete",
    responded: flag[helper.getFakeNumber(0,2)],
    team_act_id:helper.getFakeNumber(0,200),
    source: "auto"

};

var json = JSON.stringify([Activity,Activity]);
 console.log(json);

