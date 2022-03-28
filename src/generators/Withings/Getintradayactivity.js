let csvjson = require("csvjson");
let faker = require("faker");
const { parse } = require("json2csv");

var sync = true;
var array = [];

for (let i = 0; i < 1; i++) {
  let date = faker.date.past();
  let date_end = new Date(date.getTime());
  date_end.setHours(date.getHours() + 24);

  let series = {
   
    deviceid: makeid(30),
    model: "Pulse",
    model_id:  getFakeNumber(0, 10),
     steps: getFakeNumber(0, 10000),
    
    elevation: getFakeNumber(0, 10000),
    calories: getFakeNumber(0, 10000),
    distance: getFakeNumber(0, 10000),
    stroke: getFakeNumber(0, 10000),
    pool_lap: getFakeNumber(0, 10000),
    duration: getFakeNumber(0, 10000),
    heart_rate: getFakeNumber(0, 100),
    spo2_auto: getFakeNumber(0, 10000)
  };
  let body = {
    series: [series, series, series],
   
  };

  let summary = {
    status: 0,
    body: body,
  };

if (sync) getJSON(summary);
else getCSV(summary);
}



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
  var result = "";
  var characters = "abcdefghijklmnopqrstuvwxyz0123456789-";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
