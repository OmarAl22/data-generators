var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');


let comment ={
    "spn": faker.address.country()	,
    "country_code": helper.getFakeNumber(1,200),
}

 
 let record = {
    phone_number_location_v2:Array.from({length: helper.getFakeNumber(1,7)}, () => comment),
}

 

var json = JSON.stringify( record );

 console.log(json);
