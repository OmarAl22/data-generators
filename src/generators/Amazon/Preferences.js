var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');


let data = {
    "dataSource":"audible",
    "entityType":"audiobooks",
    "data":[
       {
          "language":"english",
          "title":"48 Laws of Power",
          "publishers":Array.from({length: helper.getFakeNumber(0,7)}, () => faker.company.companyName()),
          "formatType":"unabridged",
          "authors":Array.from({length: helper.getFakeNumber(0,7)}, () =>  faker.name.firstName() + " " + faker.name.lastName()),
          "narrators":Array.from({length: helper.getFakeNumber(0,7)}, () =>  faker.name.firstName() + " " + faker.name.lastName()),
       }]
  };
 
 
 

 

var json = JSON.stringify( Array.from({length: helper.getFakeNumber(0,7)}, () =>  data));

 console.log(json);