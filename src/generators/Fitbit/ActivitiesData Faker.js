let faker = require("faker");
const { parse } = require("json2csv");
let  name = ["sedentary","lightly","fairly","very"];
let activity = ["soccer","basketball","tennis","baseball","golf","running","volleyball","badminton","swimming","boxing","table tennis","skiing","ice skating","roller skating","cricket","rugby","pool","darts","football","bowling","ice hockey","surfing","karate","horse racing","snowboarding","skateboarding","cycling","archery","fishing","gymnastics","figure skating","rock climbing","sumo wrestling","taekwondo","fencing","water skiing","jet skiing","weight lifting","scuba diving","judo","wind surfing","kickboxing","sky diving","hang gliding","bungee jumping"];
 const fields = [
    "activeduration","activezoneminutes","activitylevel","activityname","activitytypeid","averageheartrate","calories","calorieslink","duration","elevationgain","hasactivezoneminutes","heartratelink","heartratezones","lastmodified","logid","logtype","manualvaluesspecified","originalduration","originalstarttime","starttime","tcxlink","distance","distanceunit","pace","source","speed","steps","user","day","period"
];
const opts = { fields };
var sync = true; 


for (let i = 0; i < 30; i++) {
  let date = faker.date.past();
  let date_end = new Date(date.getTime());
  let date_end2 = new Date(date.getTime());
  let date_end3 = new Date(date.getTime());
  date_end.setHours(date.getHours() + 24);
  let summary_date = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
 


  let activityObj = {
    
    activityId:getFakeNumber(0, 100),
    activityParentId:getFakeNumber(0, 100),
    activityParentName:activity[getFakeNumber(0, 44)],
    calories:getFakeNumber(0, 2000),
    description: "text",
    detailsLink: "http link",
    distance:getFakeNumber(0, 2000),
    duration: getFakeNumber(0, 1000),
    hasActiveZoneMinutes: true,
    hasStartTime:true,
    isFavorite: true,
    lastModified: date,
    logId:getFakeNumber(0, 100),
    name:activity[getFakeNumber(0, 44)],
    startDate:summary_date,
    startTime: getFakeNumber(0, 23)+":"+getFakeNumber(0, 59),
    steps:getFakeNumber(0, 10000),
    minutes: getFakeNumber(0, 100),
    
  }; 

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
  let goals = {
    
    activeMinutes: getFakeNumber(0, 100),
    caloriesOut:getFakeNumber(0, 100),
    distance: getFakeNumber(0, 100),
    floors: getFakeNumber(0, 100),
    steps:getFakeNumber(0, 100),
  
  };

    
  let distance = {
    
    activity:"text",
            "distance":getFakeNumber(0, 100)
    
  };
  let heartRateZone = {
    
    caloriesOut :getFakeNumber(0, 100),
    max :getFakeNumber(0, 100),
    min :getFakeNumber(0, 100),
    minutes :getFakeNumber(0, 100),
    name : "text" 
    
  };

  let manualValuesSpecifiedItem = {
     calories :false,
     distance :false,
     steps :false,
  };


  let summary = {
    activeDuration :getFakeNumber(0, 10000000),

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

     heartRateZones:[  heartRateZone ,heartRateZone,heartRateZone],
    distances: [distance,distance,distance],
    heartRateLink:'http',

    heartRateZones:[  heartRateZone ,heartRateZone,heartRateZone],

    lastModified:date,
    logId:getFakeNumber(0, 10000000000000),
    logType:"auto_detected",
    manualValuesSpecified:manualValuesSpecifiedItem,
    originalDuration:getFakeNumber(0, 10000000),
    originalStartTime: faker.date.past(),
    startTime:faker.date.past(),
    steps:getFakeNumber(0,100000),
    tcxLink:'http',

 
  };
  

 
  

  /*let record1 = {
    activities:[activityObj,activityObj],
    goal: goals,
    summary:summary,
  };
  */
  
  if (sync) getJSON(summary);
    else getCSV(summary);


  function getFakeNumber(a, b) {
    return faker.datatype.number({ min: a, max: b });
  }

  function getJSON(obj) {
    let json = JSON.stringify(obj);
    console.log(json);
  }

  function getCSV(obj) {
    try {
      const csv = parse(obj, opts);
      console.log(csv);
    } catch (err) {
      console.error(err);
    }
  }


}