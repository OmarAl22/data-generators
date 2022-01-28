let faker = require("faker");
const { parse } = require("json2csv");
 let activity = ["soccer","basketball","tennis","baseball","golf","running","volleyball","badminton","swimming","boxing","table tennis","skiing","ice skating","roller skating","cricket","rugby","pool","darts","football","bowling","ice hockey","surfing","karate","horse racing","snowboarding","skateboarding","cycling","archery","fishing","gymnastics","figure skating","rock climbing","sumo wrestling","taekwondo","fencing","water skiing","jet skiing","weight lifting","scuba diving","judo","wind surfing","kickboxing","sky diving","hang gliding","bungee jumping"];
 const fields = [
    "activityscore","activitycalories","caloriesbmr","caloriesout","distances","elevation","fairlyactiveminutes","floors","heartratezones","lightlyactiveminutes","marginalcalories","restingheartrate","sedentaryminutes","steps","veryactiveminutes","user","day"];
const opts = { fields };
var sync = true; 


for (let i = 0; i < 30; i++) {
  let date = faker.date.past();
  let date_end = new Date(date.getTime());
  date_end.setHours(date.getHours() + 24);
  

  let OUT_OF_ZONE = {
    cals :getFakeNumber(0, 100),
    min :getFakeNumber(0, 100),
     
  }; 

  let FAT_BURN = {
    cals :getFakeNumber(0, 100),
    min :getFakeNumber(0, 100),
     
  };

  
  let CARDIO = {
    cals :getFakeNumber(0, 100),
    min :getFakeNumber(0, 100),
     
  };
  
  let PEAK = {
    cals :getFakeNumber(0, 100),
    min :getFakeNumber(0, 100),
     
  };

  let summary = {
    OUT_OF_ZONE: OUT_OF_ZONE,
    FAT_BURN: FAT_BURN,
    CARDIO:CARDIO,
    PEAK:PEAK,
    
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
    try {
      const csv = parse(obj, opts);
      console.log(csv);
    } catch (err) {
      console.error(err);
    }
  }


}