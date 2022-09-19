var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');


let comment ={
   
    "city": faker.address.city(),
    "region": faker.address.county(),
    "country": faker.address.country(),

}

 
 let record = {
    primary_public_location_v2:comment,
}

 

var json = JSON.stringify( record );

 console.log(json);
