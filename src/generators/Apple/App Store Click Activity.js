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
 var type = ['button','tab'];
var flag = ['true', 'false'];

var page = ["accountSettings_landing","Today_today","Software_1425891150","Genre_25204","Software_835599320","Search_71841251-1e92-4f2d-96f7-00a817c5ff56","Genre_178956","Artist_1137352155","Software_1137352156","Search_a5550458-14ce-4683-8b76-03d52028d78e"];
var pageDetails = ["","Municorn_Scanner App. Scan PDF Document","TikTok Ltd._TikTok","Apps","Genre_25204"]
var pageHistory = ["[\"Today_today\"]",[],"[\"Software_1425891150\"],[\"Today_today\",\"accountSettings_landing\"]","[\"Today_today\",\"Genre_25204\"]","[\"Today_today\",\"Genre_25204\",\"accountSettings_landing\",\"Genre_25204\",\"Today_today\"]"];
var pageID = ["","1425891150","landing",
"today",
"835599320",
"71841251-1e92-4f2d-96f7-00a817c5ff56"];

var pageType = ["","accountSettings", "Software","Today"];
var subType = ["unsubscribed","unkown"];
var tabTypes = ["Today","Referrals","search",""]
let record = {
    "AB Test": "      ",
    "Action Context": "      ",
    "Action Details": "{buyParams:productType=C&price=0&salableAdamId=1459266578&pricingParameters=STDQ&pg=default&appExtVrsId=839853518}",
    "Action Type": actions[helper.getFakeNumber(0,15)],
    "Action URL": "https://search.itunes.apple.com/",
    "App": app[helper.getFakeNumber(0,1)],
    "Apple Id Number": helper.getFakeNumber(111111111,99999999),
    "Application Name": "      ",
    "AppStore Referral ID": "      ",
    "Billing Currency Code": "USD",
    "Channel Partner": "      ",
    "Channel Partner ID": "      ",
    "Channel Partner Type": "      ",
    "Channel Product Code": "      ",
    "Click Target": "      ",
    "Click Target Type": type[helper.getFakeNumber(0,1)],
    "Client ID":  helper.makeid(25),
    "Content Location": "en-US",
    "Event Date Time": date,
    "Event Type": Event[helper.getFakeNumber(0,15)],
    "External Referral App Name": "      ",
    "External Referral URL": "https://www.google.com/",
    "Final Search Term": "      ",
    "Free App Adam ID": "      ",
    "Free App Amount": "      ",
    "Free App Content ID": "      ",
    "Free App Currency Code": "      ",
    "Free App Developer ID": "      ",
    "Free App Genre": "      ",
    "Free App Product Type": "      ",
    "Free App Timestamp": "      ",
    "Free App Transaction ID": "      ",
    "Hardware Model": "iPhone"+helper.getFakeNumber(6,15),
    "Hardware Type": "iPhone",
    "Host App Name": "      ",
    "Impressed Content Names": "{\"impressionId\":1,\"viewedInfo\":[{\"d\":1263,\"s\":1628899228440}],\"id\":\"0\",\"reco_eligible\":\"1\",\"impressionTimes\":[1628899228440],\"impressionType\":\"swoosh\",\"reco_timeStamp\":\"1628884882279\",\"impressionIndex\":0,\"reco_additionalData\":\"{data.reco.dataSetId=0e8c01cb-263a-4f18-8ae8-977b5b91b4c8|250}\",\"impressionQueueTag\":\"data-metrics\",\"idType\":\"sequential\",\"data.reco.dataSetId\":\"0e8c01cb-263a-4f18-8ae8-977b5b91b4c8|250\",\"name\":\"Today\",\"reco_id\":\"0e8c01cb-263a-4f18-8ae8-977b5b91b4c8|250\"}|{\"id\":\"1505866334\",\"viewedInfo\":[{\"s\":1628899228440,\"d\":1263}],\"impressionId\":2,\"franchise\":\"APPLE ARCADE\",\"softwareType\":\"Arcade\",\"impressionTimes\":[1628899228440],\"impressionType\":\"todayCard\",\"cardType\":\"Content\",\"impressionIndex\":0,\"impressionParentId\":1,\"impressionQueueTag\":\"data-metrics\",\"kind\":\"editorialItem\",\"idType\":\"its_id\",\"name\":\"The Small-Town Charm of Outlanders\"}|{\"id\":\"1527837711\",\"viewedInfo\":[{\"s\":1628899228443,\"d\":1260}],\"impressionId\":3,\"franchise\":\"NOW TRENDING\",\"impressionTimes\":[1628899228443],\"impressionType\":\"todayCard\",\"impressionParentId\":1,\"impressionIndex\":1,\"cardSubType\":\"List\",\"cardType\":\"Content\",\"impressionQueueTag\":\"data-metrics\",\"kind\":\"editorialItem\",\"idType\":\"its_id\",\"name\":\"Top Apps Right Now\"}|{\"id\":\"447188370\",\"viewedInfo\":[{\"d\":1257,\"s\":1628899228446}],\"platformDisplayStyle\":\"ios\",\"impressionId\":4,\"impressionTimes\":[1628899228446],\"impressionType\":\"lockup\",\"impressionParentId\":3,\"impressionIndex\":0,\"impressionQueueTag\":\"data-metrics\",\"kind\":\"iosSoftware\",\"idType\":\"its_id\",\"name\":\"Snapchat\"}|{\"id\":\"1446075923\",\"viewedInfo\":[{\"s\":1628899228448,\"d\":1255}],\"impressionId\":5,\"platformDisplayStyle\":\"ios\",\"impressionTimes\":[1628899228448],\"impressionType\":\"lockup\",\"impressionParentId\":3,\"impressionIndex\":1,\"impressionQueueTag\":\"data-metrics\",\"idType\":\"its_id\",\"kind\":\"iosSoftware\",\"name\":\"Disney+\"}",
    "IP City": faker.address.city()	,
    "IP Country Code": faker.address.country()	,
    "Is Apple One Subscription": flag[helper.getFakeNumber(0,1)],
    "Is Arcade Subscription": flag[helper.getFakeNumber(0,1)],
    "Is Personalized": flag[helper.getFakeNumber(0,1)],
    "Is Purchase": flag[helper.getFakeNumber(0,1)],
    "Is Redownload": flag[helper.getFakeNumber(0,1)],
    "Item Descriptions": "      ",
    "Item ID": "      ",
    "Language ID": "English",
    "Location": "{\"locationPosition\":0,\"locationType\":\"tab\"}|{\"locationPosition\":0,\"locationType\":\"tabBar\"}",
    "Major OS Version": helper.getFakeNumber(6,15),
    "Offer Placement": "      ",
    "Offer Placement Type": "      ",
    "Offer Trial ID": "      ",
    "Offer Type": "      ",
    "Offer Variant": "      ",
    "Operating System Languages": ['en-US','en-UK'],
    "OS": "iOS",
    "OS Build Number": helper.getFakeNumber(6,90)+"G"+helper.getFakeNumber(6,90),
    "OS Version": helper.getFakeNumber(6,15)+"."+helper.getFakeNumber(6,90)+"."+helper.getFakeNumber(6,90),
    "Page": page[helper.getFakeNumber(0,15)],
    "Page Context": "Today",
    "Page Custom ID": "      ",
    "Page Details": pageDetails[helper.getFakeNumber(0,4)],
    "Page History": pageHistory[helper.getFakeNumber(0,4)],
    "Page ID": pageID[helper.getFakeNumber(0,4)],
    "Page Reason Type": "      ",
    "Page Type": pageType[helper.getFakeNumber(0,4)],
    "Page URL": "https://api-edge.apps.apple.com/v1 ",
    "Page Variant ID": "      ",
    "Platform": "iPhone",
    "Post Time": date,
    "Pre-Tax Price": "      ",
    "Price": "      ",
    "Purchased Item Descriptions": "      ",
    "Referral App Name": "      ",
    "Referral URL": "      ",
    "Referring URL": "      ",
    "Search Filters": "      ",
    "Search Tab Term": "      ",
    "Search Term": "      ",
    "Search Term Source": "      ",
    "Search Terms Selected": "      ",
    "Software": "      ",
    "Store Front": "      ",
    "Store Front Header": "143441-1,29 t:apps3",
    "Subscription State": subType[helper.getFakeNumber(0,1)],
    "Tab": tabTypes[helper.getFakeNumber(0,2)],
    "Tab Indicator": "      ",
    "Term": "      ",
    "Timezone Offset Min":helper.getFakeNumber(0,6) * 100,
    "Total Amount": "      ",
    "Transaction ID": "      ",
    "URL": "      ",
    "User Agent": "AppStore/3.0 iOS/14.7 model/iPhone12,1 hwp/t8030 build/18G69 (6; dt:203) AMS/1",
    "Widget Name": "      ",
    "Widget Size": "      ",
    "Widget Type":""
    
  
}

 

var json = JSON.stringify( record );

 console.log(json);
