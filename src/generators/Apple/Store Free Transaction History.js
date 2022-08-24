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
     "Order Number":helper.makeid(12),
     "Item Purchased Date":date,
     " Content Type": "iOS and tvOS Apps",
     "Item Reference Number":helper.getFakeNumber(111111111,99999999),
     "Item Description":"Item Description"	,
    "Seller":"Seller",    
      "Device Identifier":helper.makeid(25),
      "Device Details":"AppStore/3.0 iOS/14.8 model/iPhone12,1 hwp/t8030 build/18H17 (6; dt:203) AMS/1 ",	
      "Device IP Address":ip,	
      "iCloud Family Purchase?":flag[helper.getFakeNumber(0,1)], 
}

 

var json = JSON.stringify( record );

 console.log(json);
