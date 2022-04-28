let csvjson  = require("csvjson");
const { parse } = require("json2csv");
let faker = require("faker");
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
module.exports = {getJSON,getCSV,getFakeNumber,makeid}
