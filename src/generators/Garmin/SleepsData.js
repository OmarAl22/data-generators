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
   
    "summaryid","calendardate","durationinseconds","starttimeinseconds","starttimeoffsetinseconds"
    ,"unmeasurablesleepinseconds","deepsleepdurationinseconds","lightsleepdurationinseconds",
    "remsleepinseconds","awakedurationinseconds","sleeplevelsmap","validation","timeoffsetsleepspo2","user","day","period"
];


 const opts = { fields };
var sync = false;

for (let i = 0; i < 1; i++) { 
  let date = faker.date.past();
  let date_end = new Date(date.getTime());
  date_end.setHours(date.getHours() + 24);



var xx = "light=[{starttimeinseconds=1640548980, endtimeinseconds=1640554560}, {starttimeinseconds=1640557080, endtimeinseconds=1640559720}";

  let summary = {
    summaryid: makeid(15),
    calendardate: date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear(),
     starttimeinseconds: getFakeNumber(0, 10000),
     durationinseconds: getFakeNumber(0, 10000),
     starttimeinseconds: getFakeNumber(0, 1000),
     starttimeoffsetinseconds: getFakeNumber(0, 1000),
     unmeasurablesleepinseconds: getFakeNumber(0, 1000),
     deepsleepdurationinseconds: getFakeNumber(0, 1000),
     lightsleepdurationinseconds: getFakeNumber(0, 1000),
     remsleepinseconds: getFakeNumber(0, 1000),
     awakedurationinseconds: getFakeNumber(0, 1000),
     sleeplevelsmap: "deep=" + intervals(getFakeNumber(0, 10)) + ",light=" + intervals(getFakeNumber(0, 10)) + ",rem=" + intervals(getFakeNumber(0, 10)) + ",awake=" + intervals(getFakeNumber(0, 10)),
     validation: 'ENHANCED_TENTATIVE'+ ',' +'{',
     timeoffsetsleepspo2:  getFakeNumber(0, 2000) + "=" + getFakeNumber(0, 20) + ' . ' +  getFakeNumber(0, 2000) + "=" + getFakeNumber(0, 20),
     ' ': "}",
    user: "id_"+makeid(20),
    day: date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear(),
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
function intervals(length) {
    if(length == 0)
    return "null";
    var result           = '[';
    var starttimeinseconds = "starttimeinseconds=";
    var endtimeinseconds = ",endtimeinseconds=";
    for ( var i = 0; i < length; i++ ) {
      result += "{" + starttimeinseconds  + getFakeNumber(0,100000) + "."+ endtimeinseconds + getFakeNumber(0,100000)+"}.";

   }
   result+=']';
   
   return result;
}


}
