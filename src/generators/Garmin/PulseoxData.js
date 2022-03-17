let csvjson = require("csvjson");
let faker = require("faker");
const { parse } = require("json2csv");
let level = [
    "low",
    "medium",
    "high"
];
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
    "summaryid","calendardate","starttimeinseconds","durationinseconds","starttimeoffsetinseconds","timeoffsetspo2values","ondemand","user","day","period"];
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
     activitytype: activity[getFakeNumber(0, 30)],
     starttimeinseconds: getFakeNumber(0, 10000),
     durationinseconds: getFakeNumber(0, 10000),
     starttimeoffsetinseconds: getFakeNumber(0, 1000)+ ',' +'{',
     timeoffsetspo2values: getFakeNumber(0, 2000) + ":" + getFakeNumber(0, 20) + ' . ' +  getFakeNumber(0, 2000) + ":" + getFakeNumber(0, 20),
    ' ': "}",
    ondemand: sync,
    user: "id_"+makeid(20),
    day: date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear(),
    period: getFakeNumber(0, 20),

  };

\
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
