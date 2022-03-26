let csvjson  = require("csvjson");
let faker = require("faker");
const { parse } = require("json2csv");
 const fields = [
    "activityscore","activitycalories","caloriesbmr","caloriesout","distances","elevation","fairlyactiveminutes","floors","heartratezones","lightlyactiveminutes","marginalcalories","restingheartrate","sedentaryminutes","steps","veryactiveminutes","user","day"];
const opts = { fields };
var sync = true; 
var array = [];

for (let i = 0; i < 1; i++) {
  let date = faker.date.past();
  let date_end = new Date(date.getTime());
  date_end.setHours(date.getHours() + 24);
 

    
  let activity = {
    date:
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
    timezone: "Europe/Paris",
    deviceid: makeid(30),
    hash_deviceid: makeid(30),
    brand: getFakeNumber(0, 40),
    is_tracker: true,
    steps: getFakeNumber(0, 10000),
    distance: getFakeNumber(0, 10000),
    elevation: getFakeNumber(0, 20),
    soft: getFakeNumber(0, 10000),
    moderate: getFakeNumber(0, 10000),
    intense: getFakeNumber(0, 10000),
    active: getFakeNumber(0, 10000),
    calories: getFakeNumber(0, 5000),
    totalcalories: getFakeNumber(0, 5000),
    hr_average: getFakeNumber(0, 120),
    hr_min: getFakeNumber(0, 80),
    hr_max: getFakeNumber(80, 120),
    hr_zone_0: getFakeNumber(0, 5000),
    hr_zone_1: getFakeNumber(0, 5000),
    hr_zone_2: getFakeNumber(0, 5000),
    hr_zone_3: getFakeNumber(0, 5000),
  };
  let body = {
    
    activities :[activity,activity,activity],
    more :true,
    offset: 0, 
    
  };



  let summary = {
    status :0,
    body:body,

 
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

