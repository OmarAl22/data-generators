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
 var ip = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));

var network = ["account",
    "Today",
    "Games",  
    "Arcade" 
    ];

let record = {
  "Action Context": "	",
  "Action Subtype": "	",
  "Action Type": actions[helper.getFakeNumber(0, 15)],
  "Action URL": "	",
  "App Name": app[helper.getFakeNumber(0, 1)],
  "Apple Id Number": helper.getFakeNumber(111111111, 99999999),
  "Artist Name": "	",
  "Available Subscriptions": "	",
  "Banner App": "	",
  "Banner Message Type": "	",
  "Banner Offer Type": "	",
  "Banner Song": -999,
  "Billing Currency Code": "	",
  "Campaign Group": "	",
  "Campaign Token": "	",
  "Click Target":network[helper.getFakeNumber(0, 4)],
  "Client Id": helper.makeid(25),
  "Consented TV Provider": "	",
  "Content Name": "	",
  "Content Provider": "	",
  "Content Specific Type": "	",
  "Content that Triggered Age Verification": "	",
  "Content Type that Triggered Age Verification": "	",
  Cookies: "	",
  "Destination URL": "	",
  "Device Data Capacity": "	",
  "Device Data Capacity Available": "	",
  "Device Disk Capacity": "	",
  "Device System Capacity": "	",
  "Device System Capacity Available": "	",
  "Dialog Buttons": "	",
  "Dialog Message": "	",
  "Dialog Options": "	",
  "Dialog Result": "	",
  "Dialog Subject ID": "	",
  "Dialog Title": "	",
  "Dialog Type": "	",
  "Eligible TV Provider": "	",
  "Event Date Time": date,
  "Event Post Date Time": date,
  "Event Type": actions[helper.getFakeNumber(0, 10)],
  "External Referral App Name": "	",
  "External Referral URL": "	",
  Genre: "	",
  "Hardware Family": "iPhone",
  "Hardware Model": "iPhone"+helper.getFakeNumber(10, 20)+"."+helper.getFakeNumber(0, 10),
  "Has Global Account Consent": "	",
  "Has Previously Consented": "	",
  "Host App Name": "	",
  "Host App Version": "	",
  "Impressed Content Names": "	",
  "Installed TV Provider": "	",
  IP: ip,
  "Is Free Eligible": "	",
  "Is Personalized": "	",
  "Item Description": "	",
  "Item Descriptions": "	",
  "Media Content URL": "	",
  "Media Play Duration MS": "	",
  "Media Play Position MS": "	",
  "Media TV Provider": "	",
  Navigation: "	",
  "Offer Release Date": "	",
  "Offer Type": "	",
  "Original Title": "	",
  OS: "iOS",
  "OS Build Number": "17F80",
  "OS Language": ["en-US"],
  "OS Version":helper.getFakeNumber(10, 20)+"."+helper.getFakeNumber(0, 10),
  "Page ID": helper.getFakeNumber(111111111, 99999999),
  "Page Type": "	",
  "Page URL": "https://itunes.apple.com",
  Price: "	",
  "Referral App Name": "	",
  "Referral Type": "	",
  "Referral URL": "	",
  "Screen Height Pixel": helper.getFakeNumber(400, 999),
  "Screen Pixel Ratio": helper.getFakeNumber(400, 999),
  "Screen Width Pixel": helper.getFakeNumber(400, 999),
  "Search Filters": "	",
  "Search Term": "	",
  Software: "	",
  "Store Front": "	",
  "Subscribed TV Provider": "	",
  "Subscription SKU": "	",
  "Subscription State": "unsubscribed",
  Tab: network[helper.getFakeNumber(0, 4)],
  Term: "	",
  "Timezone Offset Min": "240",
  "Transaction ID": "	",
  Type: "	",
  "Upsell Type": "	",
  URI: "	",
  "User Actions": "	",
  "User Agent": "AppStore/3.0 iOS/13.5.1 model/iPhone12,1 hwp/t8030 build/17F80 (6; dt:203) AMS/1",
  "User Subscription Status": "	",
  "Window Inner Height Pixel": "	",
  "Window Inner Width Pixel": "	",
  "Window Orientation": "	",
  "Window Outer Height Pixel": "	",
  "Window Outer Width Pixel": "",
 
};

 

var json = JSON.stringify( record );

 console.log(json);
