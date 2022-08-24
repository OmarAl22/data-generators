var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
var ip = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));

var date =  faker.date.past();
var flag = ["Yes","No"]; 
var ip = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));

 let record = {
   
       "Apple ID Number":	helper.getFakeNumber(111111111,99999999),
      "Subscription Initiated Date":date,
      " Content Type": "iOS and tvOS Apps",
     "Item Reference Number":helper.getFakeNumber(111111111,99999999),
     "Item Description":"Item Description"	,
     "Container Description": "",
     "Seller":"Seller",  
     "Container Reference Number":  "",
     "Container Description":"", 
     "Invoice Item Total": "$"+helper.getFakeNumber(0,9)+"."+helper.getFakeNumber(0,99),
     "Device Identifier":helper.makeid(25),
     "Device IP Address":ip,	
     "Device Details":"AppStore/3.0 iOS/14.8 model/iPhone12,1 hwp/t8030 build/18H17 (6; dt:203) AMS/1 ",	
     "Automatic Renewal?": flag[helper.getFakeNumber(0,1)], 
     "Last Automatic Renewal Disabled Date": date,
     "Last Automatic Renewal Enabled Date": date,
     " Is part of subscription bundle?": flag[helper.getFakeNumber(0,1)],
     "External Partner ID":"", 

     
   
    
}

 

var json = JSON.stringify( record );

 console.log(json);
