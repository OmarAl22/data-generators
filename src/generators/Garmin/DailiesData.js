let csvjson = require("csvjson");
let faker = require("faker");
const { parse } = require("json2csv");

let activity = [
  "soccer",
  "basketball",
  "tennis",
  "baseball",
  "golf",
  "running",
  "volleyball",
  "badminton",
  "swimming",
  "boxing",
  "table tennis",
  "skiing",
  "ice skating",
  "roller skating",
  "cricket",
  "rugby",
  "pool",
  "darts",
  "football",
  "bowling",
  "ice hockey",
  "surfing",
  "karate",
  "horse racing",
  "snowboarding",
  "skateboarding",
  "cycling",
  "archery",
  "fishing",
  "gymnastics",
  "figure skating",
  "rock climbing",
  "sumo wrestling",
  "taekwondo",
  "fencing",
  "water skiing",
  "jet skiing",
  "weight lifting",
  "scuba diving",
  "judo",
  "wind surfing",
  "kickboxing",
  "sky diving",
  "hang gliding",
  "bungee jumping",
];
const fields = [
  "summaryid","calendardate","activitytype","activekilocalories","bmrkilocalories","steps","distanceinmeters","durationinseconds","activetimeinseconds","starttimeinseconds","starttimeoffsetinseconds","moderateintensitydurationinseconds","vigorousintensitydurationinseconds","floorsclimbed","stepsgoal","intensitydurationgoalinseconds","floorsclimbedgoal","averagestresslevel","stressqualifier","minheartrateinbeatsperminute","maxheartrateinbeatsperminute","averageheartrateinbeatsperminute","restingheartrateinbeatsperminute","timeoffsetheartratesamples","maxstresslevel","stressdurationinseconds","reststressdurationinseconds","activitystressdurationinseconds","lowstressdurationinseconds","mediumstressdurationinseconds","highstressdurationinseconds","user","day","period",
];
const opts = { fields };
var sync = false;

for (let i = 0; i < 1; i++) { 
  let date = faker.date.past();
  let date_end = new Date(date.getTime());
  date_end.setHours(date.getHours() + 24);

  let deep = {
    count: getFakeNumber(0, 100),
    minutes: getFakeNumber(0, 100),
    thirtyDayAvgMinutes: getFakeNumber(0, 100),
  };

  let summary = {
    summaryid: makeid(15),
    calendardate: date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear(),
    activityName: activity[getFakeNumber(0, 30)],
    activekilocalories: getFakeNumber(0, 1000),
    bmrkilocalories: getFakeNumber(0, 120),
    steps: getFakeNumber(0, 6000),
    distanceinmeters:getFakeNumber(0, 10000),
    durationinseconds: getFakeNumber(0, 10000),
    activetimeinseconds: getFakeNumber(0, 10000),
    starttimeinseconds: getFakeNumber(0, 10000),
    starttimeoffsetinseconds: getFakeNumber(0, 1000),
    moderateintensitydurationinseconds: getFakeNumber(0, 1000),
    vigorousintensitydurationinseconds: getFakeNumber(0, 1000),
    floorsclimbed:getFakeNumber(0, 20),
    stepsgoal: getFakeNumber(0, 10000),
    intensitydurationgoalinseconds: getFakeNumber(0, 10000),
    floorsclimbedgoal:getFakeNumber(0, 20),
    averagestresslevel: getFakeNumber(0, 20),
    stressqualifier:getFakeNumber(0, 20),
    minheartrateinbeatsperminute: getFakeNumber(0, 20),
    maxheartrateinbeatsperminute: getFakeNumber(0, 20),
    averageheartrateinbeatsperminute:getFakeNumber(0, 20),
    restingheartrateinbeatsperminute: getFakeNumber(0, 20) + '{',
    timeoffsetheartratesamples: getFakeNumber(0, 2000) + ":" + getFakeNumber(0, 20) + "," +  getFakeNumber(0, 2000) + ":" + getFakeNumber(0, 20),
    ' ': "}",
    maxstresslevel: getFakeNumber(0, 20),
    stressdurationinseconds: getFakeNumber(0, 20),
    reststressdurationinseconds: getFakeNumber(0, 20),
    activitystressdurationinseconds: getFakeNumber(0, 20),
    lowstressdurationinseconds:getFakeNumber(0, 20),
    mediumstressdurationinseconds: getFakeNumber(0, 20),
    highstressdurationinseconds: getFakeNumber(0, 20),
    user: date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear(),
    period: getFakeNumber(0, 20),
  

  };

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
    let json = JSON.stringify(obj);
    try {
       const csvData = csvjson.toCSV(json, {
        headers: fields,
      });
      const csv = parse(json, opts);
      console.log(csvData);
    } catch (err) {
      console.error(err);
    }
    


  }

  function makeid(length) {
    var result           = '';
    var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789-';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}


}
