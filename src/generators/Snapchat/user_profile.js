var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

var date =  faker.date.past();
var requested_timestamp =    date.getFullYear()+  "-" + (date.getMonth() + 1) +  "-" +  date.getDate() +  " " +date.getHours()+":"+ date.getMinutes()+  ":"+ date.getSeconds() + " UTC";
let events = ["Discover Snap Views","Discover Editions Viewed","Story Ads Viewed","Application Opens","Story Views","Snaps Viewed in a Story","Geofilter Story Snaps Viewed"];
let category = [ "Hip-Hop Music Fans",
    "Rock Music Fans",
    "Business News Watchers",
    "News Watchers",
    "Frequent International Travelers",
    "Political News Watchers",
    "Celebrity News Watchers",
    "Frequent Fliers",
    "Parents & Family-Focused",
    "Frequent Domestic Travelers",
    "Outdoor & Nature Enthusiasts",
    "Philanthropists",
    "Frequent Hotel Guests",
    "Pet & Animal Lovers"];

let AppProfile = {
  
    "Creation Time":requested_timestamp,
    "Account Creation Country":"US",
    "Platform Version":"IOS",
    "In-app Language":"en"

}

let Demographics = {
  
    "Cohort Age":"",
    "Derived Ad Demographic":""
}

 
let Engagement = {
    "Event":events[ helper.getFakeNumber(1,7)],
    "Occurrences":helper.getFakeNumber(1,700)
}

let TimeSpent = ["Camera: "+ helper.getFakeNumber(1,7) +"%",
"Discover: "+ helper.getFakeNumber(1,7) +"%",
"Map: "+ helper.getFakeNumber(1,7) +"%",
"Memories: "+ helper.getFakeNumber(1,7) +"%",
"Messaging: "+ helper.getFakeNumber(1,7) +"%",
"Others: "+ helper.getFakeNumber(1,7) +"%",
"Profile: "+ helper.getFakeNumber(1,7) +"%",];

let Ads = {
    "Advertiser Name":"Advertiser: "+ helper.getFakeNumber(1,7),
    "Date":date.getFullYear()+  "-" + (date.getMonth() + 1) +  "-" +  date.getDate()
}

let Interactions = {

    "Web Interactions": Array.from({length: helper.getFakeNumber(1,7)}, () => "Web Interactions# " + helper.getFakeNumber(1,7)),
    "App Interactions": Array.from({length: helper.getFakeNumber(1,7)}, () => "App Interactions# " + helper.getFakeNumber(1,7)),
}
let SHistory = {
 
    "App Profile":AppProfile,
    "Demographics": Demographics,
    "Subscriptions":[],
    "Engagement":[Engagement,Engagement,Engagement],
    "Discover Channels Viewed":Array.from({length: helper.getFakeNumber(1,7)}, () => "Channel# " + helper.getFakeNumber(1,7)),
    "Breakdown of Time Spent on App": TimeSpent,
    "Ads You Interacted With": [Ads,Ads,Ads],
    "Interest Categories":Array.from({length: helper.getFakeNumber(1,10)}, () => category[helper.getFakeNumber(1,10)]),
    "Geographic Information":[],
    "Interactions":Interactions,
    "Off-Platform Sharing":[],
    "Mobile Ad Id":""
}

 

var json = JSON.stringify( SHistory );
 console.log(json);

