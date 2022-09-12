 var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
var flag = ["IReserve Notification Subscription",
    "Order Status Notification Subscription",
   " Today At Apple Sessions Notification Subscription"
    ];
var date =  faker.date.past();
let record = {
 "Category":flag[helper.getFakeNumber(0,3)],
    "Subsription Status": "Subscribed",
    "device":"device"+ helper.getFakeNumber(0,3),
    "Registration Date/Time(UTC)":date,

}

 

var json = JSON.stringify( record );

 console.log(json);
