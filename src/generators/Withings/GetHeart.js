let csvjson = require("csvjson");
let faker = require("faker");
const { parse } = require("json2csv");

var sync = true;
var array = [];

for (let i = 0; i < 1; i++) {
  let date = faker.date.past();
  let date_end = new Date(date.getTime());
  date_end.setHours(date.getHours() + 24);

  let activity = {
    signal:
    Array.from({length: 40}, () => Math.floor(Math.random() * 40)),
    sampling_frequency: getFakeNumber(1000,10000)%1000,
    wearposition: getFakeNumber(0,7)
 
  };
  let body = {
    activities: activity,
  
  };

  let summary = {
    status: 0,
    body: body,
  };

  array.push(summary);
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
  var result = "";
  var characters = "abcdefghijklmnopqrstuvwxyz0123456789-";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
