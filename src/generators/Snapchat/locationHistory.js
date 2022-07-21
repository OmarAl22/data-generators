var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

var date =  faker.date.past();
var requested_timestamp =    date.getFullYear()+  "-" + (date.getMonth() + 1) +  "-" +  date.getDate() +  " " +date.getHours()+":"+ date.getMinutes()+  ":"+ date.getSeconds() + " UTC";

let Flocation = {

    "City":"manhattan",
    "Country":"usa",
    "Region":"ny"
}

let HW = {

    "Home":"lat "+ helper.getFakeNumber(0,100) +" ±  "+ helper.getFakeNumber(0,100) +"  meters, long "+ helper.getFakeNumber(0,100) +" ± "+ helper.getFakeNumber(0,100) +" meters"  ,
    "Work":""
}

let TLocations = {

    "Date: 2022-07-14 UTC":"lat "+ helper.getFakeNumber(0,100) +" ±  "+ helper.getFakeNumber(0,100) +"  meters, long "+ helper.getFakeNumber(0,100) +" ± "+ helper.getFakeNumber(0,100) +" meters"  ,
}

let LHistory={
    "Time":requested_timestamp,
    "Latitude, Longitude": helper.getFakeNumber(0,100) +" ±  "+ helper.getFakeNumber(0,100) +"  meters, "+ helper.getFakeNumber(0,100) +" ± "+ helper.getFakeNumber(0,100) +" meters"  ,
}

let Pname = {
    "Date":date.getFullYear()+  "-" + (date.getMonth() + 1) +  "-" +  date.getDate()  ,
    "Name":"Name"
}

let visited = { 
    "Time":requested_timestamp,
    "City":"san jose",
    "Region":"California",
    "Postal Code":helper.getFakeNumber(10000,99999)
}
let record = {
    "Frequent Locations": [Flocation,Flocation],
    "Latest Location": [Flocation],
    "Home & Work":HW,
    "Daily Top Locations":[[TLocations,TLocations],[TLocations,TLocations]],
    "Top Locations Per Six-Day Period": [[TLocations,TLocations],[TLocations,TLocations]],
    "Location History":[LHistory,LHistory,LHistory ] ,
    "Businesses and public places you may have visited":[Pname,Pname,Pname],
    "Areas you may have visited in the last two years":[visited,visited,visited], 
  
};

var json = JSON.stringify(record);
 console.log(json);

