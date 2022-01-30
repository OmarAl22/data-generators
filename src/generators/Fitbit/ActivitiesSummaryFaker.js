let csvjson  = require("csvjson");
let faker = require("faker");
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
    minuteMultiplier:getFakeNumber(0, 100),
     minutes :getFakeNumber(0, 100),
     order:getFakeNumber(0, 100),
     type:'Name',
     zoneName:'Name',
  };

  const activeZoneMinutesItem = {
    minutesInHeartRateZones:[minuteMultiplierItem,minuteMultiplierItem,minuteMultiplierItem],
    totalMinutes: getFakeNumber(0, 100),
  };

  

   const activityLevelItem = {
     minutes :getFakeNumber(0, 100),
     name :'sedentary',
    
  };
 

    
  let distanceItem = {
    
    activity:"text",
    distance:getFakeNumber(0, 100)
    
  };
  let heartRateZone = {
    
    caloriesOut :getFakeNumber(0, 100),
    max :getFakeNumber(0, 100),
    min :getFakeNumber(0, 100),
    minutes :getFakeNumber(0, 100),
    name : "text" 
    
  };



  let summary = {
    activeScore :getFakeNumber(-1, 5),
    activityCalories:getFakeNumber(0, 1000),
    caloriesBMR:getFakeNumber(0, 1000),
    caloriesOut:getFakeNumber(0, 1000),
    distances: [distanceItem,distanceItem,distanceItem],
    elevation: getFakeNumber(0, 1000),
    fairlyActiveMinutes:getFakeNumber(0, 1000),
    floors:getFakeNumber(0, 50),
    heartRateZones:[  heartRateZone ,heartRateZone,heartRateZone],



    activeZoneMinutes: [ activeZoneMinutesItem,activeZoneMinutesItem,activeZoneMinutesItem,],
    activityLevel:[activityLevelItem,activityLevelItem,activityLevelItem,activityLevelItem,activityLevelItem],
    activityName :activity[getFakeNumber(0, 30)],
    activityTypeId :getFakeNumber(0, 100000),
    averageHeartRate :getFakeNumber(0, 200),
    calories :getFakeNumber(0, 1000),
    caloriesLink: 'http',
    duration:getFakeNumber(0, 10000000),
    elevationGain: getFakeNumber(0, 1000),
    hasActiveZoneMinutes:'true',

    distances: [distanceItem,distanceItem,distanceItem],
    heartRateLink:'http',

    lightlyActiveMinutes: getFakeNumber(0, 1000),
    marginalCalories: getFakeNumber(0, 1000),
    restingHeartRate: getFakeNumber(0, 1000),
    sedentaryMinutes: getFakeNumber(0, 1000),
    steps: getFakeNumber(0, 10000),
    veryActiveMinutes: getFakeNumber(0, 100),

 
 
  };
  
  array.push(summary)
}
  
  if (sync) getJSON(array);
    else getCSV(array);


  function getFakeNumber(a, b) {
    return faker.datatype.number({ min: a, max: b });
  }

  function getJSON(obj) {
    let json = JSON.stringify(obj);
    console.log(json);
  }

  function getCSV(obj) {
    try {
      const csvData = csvjson.toCSV(obj, {
        headers: fields
    });
      const csv = parse(obj, opts);
      console.log(csvData);
    } catch (err) {
      console.error(err);
    }
  }

