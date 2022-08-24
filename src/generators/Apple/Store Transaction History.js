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
     "Item Purchased Date":date,
     " Content Type": "iOS and tvOS Apps",
     "Item Reference Number":helper.getFakeNumber(111111111,99999999),
     "Item Description":"Item Description"	,
     "Container Description": "",
     "Seller":"Seller",  
     "Container Reference Number":  "",
     "Container Description":"", 
     "Invoice Item Total": "$"+helper.getFakeNumber(0,9)+"."+helper.getFakeNumber(0,99),
     "Device Identifier":helper.makeid(25),
     "Device Details":"AppStore/3.0 iOS/14.8 model/iPhone12,1 hwp/t8030 build/18H17 (6; dt:203) AMS/1 ",	
     "Device IP Address":ip,	
"Refund Amount":"",
"Document Number": helper.getFakeNumber(111111111,99999999),
"Invoice Date": helper.getFakeNumber(1,12)+"/" + helper.getFakeNumber(1,30)+ "/" + helper.getFakeNumber(2010,2022),
"Invoice Tax Amount": "$"+helper.getFakeNumber(0,9)+"."+helper.getFakeNumber(0,99),
"Invoice Total Amount": "$"+helper.getFakeNumber(0,9)+"."+helper.getFakeNumber(0,99),
"Purchase Created Date": date,
     "Order Number":helper.makeid(12),
     "Billing Information ID": helper.getFakeNumber(111111111,99999999),
     "Payment Type": 'visa',
     "Currency ID": 'USD',
     "Purchase Chargeback?": flag[helper.getFakeNumber(0,1)], 
     "iCloud Family Purchase?": flag[helper.getFakeNumber(0,1)],
     "Free product Code Redemption?":flag[helper.getFakeNumber(0,1)], 
    
}

 

var json = JSON.stringify( record );

 console.log(json);
