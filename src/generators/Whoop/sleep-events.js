var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

let Activity = {
  activity_id: helper.getFakeNumber(10000,100000),

    during: [faker.date.past(),faker.date.past()],
    
    type: "rem"

};

var json = JSON.stringify([Activity,Activity]);
 console.log(json);
