var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

var date =  faker.date.past();
var reason = ['MANUALLY_SELECTED_PLAYBACK_OF_A_DIFF_ITEM',
    'TRACK_SKIPPED_FORWARDS'
    ];
var source = ['IPHONE','IPAD'];
   let record = {

    "Country":faker.address.country(),
    "Track Identifier":helper.getFakeNumber(111111111,999999999),
    "Media type":'N/A',
    "Date Played": date.getFullYear()+ "" +   (date.getMonth() + 1)+ "" +  date.getDate(),
    "Hours":helper.getFakeNumber(0,20),
    "Play Duration Milliseconds":helper.getFakeNumber(0,99999999),
    "End Reason Type": reason[helper.getFakeNumber(0,1)],
    "Source Type": source[helper.getFakeNumber(0,1)],
    
    "Play Count":helper.getFakeNumber(0,20),
    "Skip Count":helper.getFakeNumber(0,20),
    "Ignore For Recommendations":'',
    "Track Reference":'N/A',
    "Track Description": 'song #' + helper.getFakeNumber(0,20),


}

 

var json = JSON.stringify( record );

 console.log(json);
