var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

var date =  faker.date.past();
 
 let record = {
 
     "Apple ID Number": helper.getFakeNumber(111111111,99999999),
     "Account Signup Date": date ,
     "Screen Name":""       ,
     "Country":faker.address.country(),
     "Device User Agent String":"AppStore/2.0 iOS/8.1.2 model/iPhone7,2 build/12B440 (6; dt:106)",
     "Birth Year": helper.getFakeNumber(1920,2010),
     "Opted Out of Personalized Recommendations?": flag[helper.getFakeNumber(0,1)],
     "Opted Out of Receiving Subscription Renewal Receipts?":   flag[helper.getFakeNumber(0,1)],
     "Last date of VPPA Consent":"",
 
}

 

var json = JSON.stringify( record );

 console.log(json);
