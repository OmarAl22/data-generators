let csvjson  = require("csvjson");
let faker = require("faker");
const { parse } = require("json2csv");
  const fields = [
    "activityscore","activitycalories","caloriesbmr","caloriesout","distances","elevation","fairlyactiveminutes","floors","heartratezones","lightlyactiveminutes","marginalcalories","restingheartrate","sedentaryminutes","steps","veryactiveminutes","user","day"];
const opts = { fields };
var sync = false; 
var array = [];

for (let i = 0; i < 1; i++) {
  let date = faker.date.past();
  let date_end = new Date(date.getTime());
  date_end.setHours(date.getHours() + 24);
 

 


  let deep = {
    count :getFakeNumber(0, 100),
    minutes :getFakeNumber(0, 100),
    thirtyDayAvgMinutes :getFakeNumber(0, 100),
  }; 
  let light = {
    count :getFakeNumber(0, 100),
    minutes :getFakeNumber(0, 100),
    thirtyDayAvgMinutes :getFakeNumber(0, 100),
  };
  let rem = {
    count :getFakeNumber(0, 100),
    minutes :getFakeNumber(0, 100),
    thirtyDayAvgMinutes :getFakeNumber(0, 100),
  };
  let wake = {
    count :getFakeNumber(0, 100),
    minutes :getFakeNumber(0, 100),
    thirtyDayAvgMinutes :getFakeNumber(0, 100),
  };


  let summary = {
    deep: deep,
    light: light,
    rem:rem,
    wake:wake,
    activeScore :getFakeNumber(-1, 5),
   
    startTimeTS: getFakeNumber(0, 10000000000),
   endTimeTS:getFakeNumber(0, 10000000000),
    startTime:date,
   endTime:date_end,
   minutesAfterWakeup:getFakeNumber(0, 100),
   minutesAsleep:getFakeNumber(0, 100),
   minutesAwake:getFakeNumber(0, 100),
   minutesToFallAsleep:getFakeNumber(0, 100),
   timeInBed:getFakeNumber(0, 1000)
 
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
      const csvData = csvjson.toCSV(obj, {
        headers: fields
    });
      const csv = parse(obj, opts);
      console.log(csvData);
    } catch (err) {
      console.error(err);
    }
  }

  


}