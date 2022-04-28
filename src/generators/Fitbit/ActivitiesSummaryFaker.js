let faker = require("faker");
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');


const { parse } = require("json2csv");
 let activity = ["soccer","basketball","tennis","baseball","golf","running","volleyball","badminton","swimming","boxing","table tennis","skiing","ice skating","roller skating","cricket","rugby","pool","darts","football","bowling","ice hockey","surfing","karate","horse racing","snowboarding","skateboarding","cycling","archery","fishing","gymnastics","figure skating","rock climbing","sumo wrestling","taekwondo","fencing","water skiing","jet skiing","weight lifting","scuba diving","judo","wind surfing","kickboxing","sky diving","hang gliding","bungee jumping"];
 const fields = [
    "activityscore","activitycalories","caloriesbmr","caloriesout","distances","elevation","fairlyactiveminutes","floors","heartratezones","lightlyactiveminutes","marginalcalories","restingheartrate","sedentaryminutes","steps","veryactiveminutes","user","day"];
const opts = { fields };
var sync = true; 
var array = [];

for (let i = 0; i < 1; i++) {
  let date = faker.date.past();
  let date_end = new Date(date.getTime());
  date_end.setHours(date.getHours() + 24);
 

  let minuteMultiplierItem = {
    minuteMultiplier:helper.getFakeNumber(0, 100),
     minutes :helper.getFakeNumber(0, 100),
     order:helper.getFakeNumber(0, 100),
     type:'Name',
     zoneName:'Name',
  };

  const activeZoneMinutesItem = {
    minutesInHeartRateZones:[minuteMultiplierItem,minuteMultiplierItem,minuteMultiplierItem],
    totalMinutes: helper.getFakeNumber(0, 100),
  };

  

   const activityLevelItem = {
     minutes :helper.getFakeNumber(0, 100),
     name :'sedentary',
    
  };
 

    
  let distanceItem = {
    
    activity:"text",
    distance:helper.getFakeNumber(0, 100)
    
  };
  let heartRateZone = {
    
    caloriesOut :helper.getFakeNumber(0, 100),
    max :helper.getFakeNumber(0, 100),
    min :helper.getFakeNumber(0, 100),
    minutes :helper.getFakeNumber(0, 100),
    name : "text" 
    
  };



  let summary = {
    activeScore :helper.getFakeNumber(-1, 5),
    activityCalories:helper.getFakeNumber(0, 1000),
    caloriesBMR:helper.getFakeNumber(0, 1000),
    caloriesOut:helper.getFakeNumber(0, 1000),
    distances: [distanceItem,distanceItem,distanceItem],
    elevation: helper.getFakeNumber(0, 1000),
    fairlyActiveMinutes:helper.getFakeNumber(0, 1000),
    floors:helper.getFakeNumber(0, 50),
    heartRateZones:[  heartRateZone ,heartRateZone,heartRateZone],



    activeZoneMinutes: [ activeZoneMinutesItem,activeZoneMinutesItem,activeZoneMinutesItem,],
    activityLevel:[activityLevelItem,activityLevelItem,activityLevelItem,activityLevelItem,activityLevelItem],
    activityName :activity[helper.getFakeNumber(0, 30)],
    activityTypeId :helper.getFakeNumber(0, 100000),
    averageHeartRate :helper.getFakeNumber(0, 200),
    calories :helper.getFakeNumber(0, 1000),
    caloriesLink: 'http',
    duration:helper.getFakeNumber(0, 10000000),
    elevationGain: helper.getFakeNumber(0, 1000),
    hasActiveZoneMinutes:'true',

    distances: [distanceItem,distanceItem,distanceItem],
    heartRateLink:'http',

    lightlyActiveMinutes: helper.getFakeNumber(0, 1000),
    marginalCalories: helper.getFakeNumber(0, 1000),
    restingHeartRate: helper.getFakeNumber(0, 1000),
    sedentaryMinutes: helper.getFakeNumber(0, 1000),
    steps: helper.getFakeNumber(0, 10000),
    veryActiveMinutes: helper.getFakeNumber(0, 100),

 
 
  };
  
  array.push(summary)
}
  
  if (sync) helper.getJSON(array);
    else helper.getCSV(array);
 