var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
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
var sync = true;

for (let i = 0; i < 1; i++) { 
  let date = faker.date.past();
  let date_end = new Date(date.getTime());
  date_end.setHours(date.getHours() + 24);

  let deep = {
    count: helper.getFakeNumber(0, 100),
    minutes: helper.getFakeNumber(0, 100),
    thirtyDayAvgMinutes: helper.getFakeNumber(0, 100),
  };

  let summary = {
    summaryid: helper.makeid(15),
    calendardate: date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear(),
    starttimeinseconds: helper.getFakeNumber(0, 10000),
     durationinseconds: helper.getFakeNumber(0, 10000),
     starttimeoffsetinseconds: helper.getFakeNumber(0, 1000)+ ',' +'{',
     timeoffsetspo2values: helper.getFakeNumber(0, 2000) + "=" + helper.getFakeNumber(0, 20) + ' . ' +  helper.getFakeNumber(0, 2000) + "=" + helper.getFakeNumber(0, 20),
    ' ': "}",
    ondemand: sync,
    user: "id_"+helper.makeid(20),
    day: date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear(),
    period: helper.getFakeNumber(0, 20),

  };


  if (sync) helper.getJSON(summary);
 else helper.getCSV(summary);

   


}
