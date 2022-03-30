let csvjson = require("csvjson");
let faker = require("faker");
const { parse } = require("json2csv");

var sync = true;
var array = [];

for (let i = 0; i < 1; i++) {
  let date = faker.date.past();
  let date_end = new Date(date.getTime());
  date_end.setHours(date.getHours() + 24);


  let data = {

algo_pause_duration: getFakeNumber(0, 1000000),
calories:  getFakeNumber(0, 5000),
distance:  getFakeNumber(0, 5000),
elevation: getFakeNumber(0, 50),
hr_average: getFakeNumber(0, 80),
hr_max: getFakeNumber(0, 100),
hr_min: getFakeNumber(0, 60),
hr_zone_0: getFakeNumber(0, 100),
hr_zone_1: getFakeNumber(0, 100),
hr_zone_2: getFakeNumber(0, 100),
hr_zone_3: getFakeNumber(0, 100),
intensity:getFakeNumber(0, 100),
manual_calories: getFakeNumber(0, 2000),
manual_distance: getFakeNumber(0, 2000),
pause_duration:getFakeNumber(0, 2000),
pool_laps: getFakeNumber(0, 20),
pool_length: getFakeNumber(0, 2000),
spo2_average: getFakeNumber(0, 2000),
steps:getFakeNumber(0, 20000),
strokes: getFakeNumber(0, 2000),

  }
  let series = {

    category:  getFakeNumber(0, 40),
    timezone: "Europe/Paris",
    model: getFakeNumber(0, 40),
    attrib: getFakeNumber(0, 40),
    startdate: getFakeNumber(0, 2000000),
    enddate: getFakeNumber(0, 2000000),
    date: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
    modified: getFakeNumber(0, 2000000),
    deviceid: makeid(30),
    data: data,
  };
  let body = {
    series: [series, series, series],
    more: true,
    offset: 0,
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
