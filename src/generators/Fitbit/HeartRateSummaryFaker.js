let csvjson = require("csvjson");
let faker = require("faker");
const { parse } = require("json2csv");
const fields = ["out_of_zone", "fat_burn", "cardio", "peak", "user", "day"];
const opts = { fields };
var sync = true;
var array = [];

for (let i = 0; i < 1; i++) {
  let date = faker.date.past();
  let date_end = new Date(date.getTime());
  date_end.setHours(date.getHours() + 24);

  let OUT_OF_ZONE = {
    cals: getFakeNumber(0, 100),
    min: getFakeNumber(0, 100),
  };

  let FAT_BURN = {
    cals: getFakeNumber(0, 100),
    min: getFakeNumber(0, 100),
  };

  let CARDIO = {
    cals: getFakeNumber(0, 100),
    min: getFakeNumber(0, 100),
  };

  let PEAK = {
    cals: getFakeNumber(0, 100),
    min: getFakeNumber(0, 100),
  };

  let summary = {
    OUT_OF_ZONE: OUT_OF_ZONE,
    FAT_BURN: FAT_BURN,
    CARDIO: CARDIO,
    PEAK: PEAK,
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
