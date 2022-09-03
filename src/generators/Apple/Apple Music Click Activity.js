var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
 
var date =  faker.date.past();
var Event = ["exit","enter","page","impressions","click","account","purchase","dialog","search","update"]; 
 var actions = ["back ","select ","navigate ","filter ","buy ","hint ","input ","retry ","open ","download ","cancel ","submit ","update ","focus ","share ","searchInsteadFor ","suggested"];
 var app = ['App Store', 'iTunes Store'];

var network = ["comcast","AT&T", "Verison"];

let record = {
  "Action Context": "",
  "Action Details":
    "",
  "Action Type": actions[helper.getFakeNumber(0, 15)],
  "Age Verification Trigger Content Identifier": "",
  "Album Name": "",
  "App name": app[helper.getFakeNumber(0, 1)],
  "Apple Id Number": helper.getFakeNumber(111111111, 99999999),
  "Apple Music Subscription": "",

  "Application Name": "",
  "Artist Name": "",
  "Available Subscriptions": "",
  "Billing Currency Code": "",
  "Click Event Referral URL": "",
  "Click Target": "",
  "Click Target Type": "",
  "Client ID":helper.makeid(25),
  "Client Platform": "",
  "Container ID": "",
  "Container Type": "",
  "Content Type that Triggered Age Verification": "  ",
  "Dialog Button": "",
  "Dialog Event": "MZFinance.UpdateTouchIDSettingsLoginRequired",
  "Dialog ID": "",
  "Dialog Options": "",
  "Dialog Result": "",
  "Dialog Text": "",
  "Dialog Type": "",
  "End Position In Milliseconds": "",
  "End Reason Type": "",
  "Evaluation Variant": "",
  "Event Date Time": date,
  "Event End Timestamp": "",
  "Event Received Timestamp": "",
  "Event Start Timestamp": "",
  "Event Type": Event[helper.getFakeNumber(0, 15)],
  "Event Version": helper.getFakeNumber(0, 15),
  "External Referral URL": "",
  "Feature Name": "",
  "Free Trial": "",
  "Host App Name": "",
  "Host App Version": "",
  "Impressed Content Names": "",
  "IP City": faker.address.city(),
  "IP Country Code": faker.address.country(),
  "IP Network": network[helper.getFakeNumber(0, 3)],
  "IP Network Type": "cable",
  "IP Region Code": faker.address.stateAbbr(),
  "Item Descriptions": "",
  "Item Type": "",
  "Media Bundle App Name": "",
  "Media Bundle Type": "",
  "Media Bundle Version": "",
  "Media Duration In Milliseconds": "",
  "Media Event Referral URL": "",
  "Media Interaction ID": "",
  "Media Interaction ID Type": "",
  "Media Interaction Type Details": "",
  "Media Play Event Type": "",
  "Media Play Position MS": "",
  "Media Type": "",
  "Milliseconds Since Play": "",
  "Offer Placement": "",
  "Offer Placement Type": "",
  "Offer Scenario Type": "",
  "Offer Type": "",
  "Offer Variant": "",
  Offline: "",
  "Operating System Languages": "",
  Page: "",
  "Page Banner App": "",
  "Page Banner Id": "",
  "Page Banner Message Type": "",
  "Page Banner Offer Type": "",
  "Page Click UI Location": "",
  "Page Details": "",
  "Page History": "",
  "Page ID": "",
  "Page Type": "",
  "Page URL": "",
  "Parent Playlist ID": "",
  "Personalization ID": "",
  "Play Duration Milliseconds": "",
  Price: "",
  "Radio Station Id": "",
  "Radio Type": "",

  "Referral App Name": "",
  "Search Term": "",
  "Search Term (encoded)": "",
  "Song Name": "",
  "Source Platform": "",
  "Start Position Milliseconds": "",
  "Station ID": "",
  "Store Front Header": "143441-1,29",
  "Store Front Header": "",
  "System Dialog ID": "",
  Tab: "",
  "Timezone Offset Min": "",
  "Transaction ID": "",
  Type: "",
  URI: "",
  "User Actions": "",
  "User Agent": "com.apple.accountsd/113 iOS/12.5.4 model/iPhone7,2 hwp/t7000 build/16H50 (6; dt:106)",
  "User Subscription Status": "",
  "Visit End Time": date,

  "Visit ID":helper.makeid(25),
  "Visit Start Time":date,

};

 

var json = JSON.stringify( record );

 console.log(json);
