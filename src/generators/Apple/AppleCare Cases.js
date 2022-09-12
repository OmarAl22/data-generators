var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
var flag = ["VOICE",
"N/A",
"CHAT"

    ];

 
var date =  faker.date.past();
let record = {
 "Case ID":helper.getFakeNumber(11111111,999999999),
    "Case Title": "Title",
    "Interaction Type":flag[helper.getFakeNumber(0.3)],
    "Apple ID Number":helper.getFakeNumber(11111111,999999999),
    "First Name":"A****A",
    "Last Name":"B****B",
    "Email":"a*****@*****.com",
    "Phone Number":"******"+helper.getFakeNumber(111,999),
    "Serial Number":helper.makeid(10),
    "Order Number":"W"+helper.getFakeNumber(11111111,999999999),
    "Creation Date":date

}

 

var json = JSON.stringify( record );

 console.log(json);
