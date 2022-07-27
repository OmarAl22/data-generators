var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

let events = ["Creative Effects","Product Updates","Discover Updates","Research Surveys","Lens Studio","Friending"];


let ECampaign = {
  
    "Email Campaign":events[ helper.getFakeNumber(1,7)],
    "Opt Out Status":""

}
  
let SHistory = {
 
    "Email Campaign Subscriptions":Array.from({length: helper.getFakeNumber(1,7)}, () => ECampaign),
    "Email Campaign History": [],
}

 

var json = JSON.stringify( SHistory );
 console.log(json);

