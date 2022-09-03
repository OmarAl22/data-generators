var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
 
var date =  faker.date.past();
var requested_timestamp =     (date.getMonth() + 1)+ "/" +  date.getDate()+ "/" + date.getFullYear()  ;

var Event = ["exit","enter","page","impressions","click","account","purchase","dialog","search","update"]; 
 var actions = ["back ","select ","navigate ","filter ","buy ","hint ","input ","retry ","open ","download ","cancel ","submit ","update ","focus ","share ","searchInsteadFor ","suggested"];
 var plan = [' ', 'INTRO'];
 var flag = ["TRUE","FALSE"]; 
var network = ["ARCADE","ICLOUD", "BUNDLE"];

let record = {
  "App Item Type": network[helper.getFakeNumber(0, 2)],
  "App Request Type": network[helper.getFakeNumber(0, 2)],
  "Apple Id Number": helper.getFakeNumber(111111111,99999999),
  "Apple One Plan Eligibility": plan[helper.getFakeNumber(0, 1)],
  "Carrier Bundle Plan Indicator":  flag[helper.getFakeNumber(0, 1)],
  "Decision Date": requested_timestamp,
  "Evaluation Variant": " ",
  "Offer Flag": flag[helper.getFakeNumber(0, 1)],
  "Offer Group": "other",
  "Offer Item Flag": flag[helper.getFakeNumber(0, 1)],
  "Offer Order Value":helper.getFakeNumber(0, 5),
  "Request OS Version": helper.getFakeNumber(10, 20) + "."+ helper.getFakeNumber(0, 5),
  "Request Platform Type": "iphone",
  "Request Timestamp": date,
  "Service Name": network[helper.getFakeNumber(0, 2)],
  "Storefront Name": faker.address.country(),
  "User Offers Eligibility": "BUNDLE -> WrappedArray(INTRO)|ARCADE -> WrappedArray(INTRO)",
  "User Subscriptions App Types": "STORAGE",

   
};

 

var json = JSON.stringify( record );

 console.log(json);
