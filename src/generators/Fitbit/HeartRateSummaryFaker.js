var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
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
    cals: helper.getFakeNumber(0, 100),
    min: helper.getFakeNumber(0, 100),
  };

  let FAT_BURN = {
    cals: helper.getFakeNumber(0, 100),
    min: helper.getFakeNumber(0, 100),
  };

  let CARDIO = {
    cals: helper.getFakeNumber(0, 100),
    min: helper.getFakeNumber(0, 100),
  };

  let PEAK = {
    cals: helper.getFakeNumber(0, 100),
    min: helper.getFakeNumber(0, 100),
  };

  let summary = {
    OUT_OF_ZONE: OUT_OF_ZONE,
    FAT_BURN: FAT_BURN,
    CARDIO: CARDIO,
    PEAK: PEAK,
  };
  array.push(summary);
}

if (sync) helper.getJSON(array);
else helper.getCSV(array);

 

 
