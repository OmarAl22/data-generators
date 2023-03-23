var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
var flag = [true,false];
var card = ["Visa","MasterCard"];
 
var date =  faker.date.past();
 
let time = {
    "usecSinceEpochUtc":  helper.getFakeNumber(1111111111, 999999999),
    "granularity": "MICROSECOND"
}
let orderUpdates =
    {
        "orderStatus":{
            "status":"FULFILLED",
            "label":"Your order has been fulfilled."
         },
         "updateTime":time
    }

let item = {
    
        "provider":{
           "name":faker.company.bs()
        },
        "priceline":[
           {
              "type":"TOTAL",
              "amount":{
                 "amountMicros":helper.getFakeNumber(11, 99999999),
                 "currencyCode":{
                    "code":"USD"
                 }
              },
              "taxIncluded":false,
              "state":"ESTIMATE"
           }
        ],
        "purchase":{
           "status":"DELIVERED",
           "quantity":1,
           "fulfillment":{
              "type":"PICK_UP",
              "location":{
                 
              },
              "recipient":{
                 "displayName":faker.name.firstName(),
                 "email": faker.internet.exampleEmail(),
                 "firstName":faker.name.firstName(),
                 "lastName":faker.name.firstName(),
                 "phoneNumberDetails":[
                    {
                       
                    }
                 ]
              },
              "timeWindow":{
                 "startTime":{
                    "usecSinceEpochUtc":helper.getFakeNumber(1111111111, 99999999),
                    "granularity":"MICROSECOND",
                    "utcTimezoneOffsetMinutes":0
                 }
              }
           },
           "productInfo":{
              "name":"name",
              "description":"description"
           },
           "userVisibleStatusLabel":"Your order has been fulfilled."
        },
        "description":"description",
        "statusLabel":"Your order has been fulfilled.",
        "name":"name"
     }

 
let placeVisit = {
    "customer":{
        "email":faker.internet.exampleEmail(),
     },
     "merchantOrderId": helper.getFakeNumber(0, 300),
  "creationTime": time,
  "orderStatus": {
    "status":"FULFILLED",
    "label":"Your order has been fulfilled."
 },
 "transactionMerchant":{
    "name":faker.company.bs()
 },
 "lineItem":Array.from({length: helper.getFakeNumber(0,7)}, () =>  item),
 "priceline":       [
    {
       "type":"TAX",
       "name":"Tax",
       "amount":{
          "amountMicros":helper.getFakeNumber(0, 300),
          "currencyCode":{
             "code":"USD"
          }
       },
       "taxIncluded":false,
       "state":"ESTIMATE"
    },
    {
       "type":"FEE",
       "name":"Support Local Fee",
       "amount":{
          "amountMicros":helper.getFakeNumber(0, 300),
          "currencyCode":{
             "code":"USD"
          }
       },
       "taxIncluded":false,
       "state":"ESTIMATE"
    },
    {
       "type":"SUBTOTAL",
       "name":"Subtotal",
       "amount":{
          "amountMicros":helper.getFakeNumber(0, 300),
          "currencyCode":{
             "code":"USD"
          }
       },
       "taxIncluded":false,
       "state":"ESTIMATE"
    },
    {
       "type":"GRATUITY",
       "name":"Tip",
       "amount":{
          "amountMicros":helper.getFakeNumber(0, 100),
          "currencyCode":{
             "code":"USD"
          }
       },
       "taxIncluded":false,
       "state":"ESTIMATE"
    },
    {
       "type":"TOTAL",
       "amount":{
          "amountMicros":helper.getFakeNumber(0, 300),
          "currencyCode":{
             "code":"USD"
          }
       },
       "taxIncluded":false,
       "state":"ESTIMATE"
    }
 ],

 "paymentInfo":{
    "displayName":card[helper.getFakeNumber(0,1)],
 },
  "orderUpdates":Array.from({length: helper.getFakeNumber(0,7)}, () =>  orderUpdates),
  "paymentData":{
    "paymentInfo":{
       "displayName":card[helper.getFakeNumber(0,1)],
    }
 }
};
 
  
  var json = JSON.stringify(placeVisit);
  console.log(json);