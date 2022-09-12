var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

var date =  faker.date.past();
var reason = ['MANUALLY_SELECTED_PLAYBACK_OF_A_DIFF_ITEM',
    'TRACK_SKIPPED_FORWARDS','FAILED_TO_LOAD'
    ];
var type = ['my_music:none / search','search'];
  var ip = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));

 let record = {
 
     "Apple ID Number": helper.getFakeNumber(111111111,99999999),
     "Apple Music Subscription": '',
     "Artist Name": 'Artist #' + helper.getFakeNumber(1,9),
     "Build Version": '',
     "Client IP Address": ip,
     "Device Identifier": helper.makeid(20)  ,
     "End Position In Milliseconds": helper.getFakeNumber(111111111,99999999),
     "End Reason Type": reason[helper.getFakeNumber(0,2)],
     "Event End Timestamp": date,
     "Event Reason Hint Type": "",
     "Event Received Timestamp":date,
     "Event Start Timestamp":date,
     "Event Type": "",
     "Feature Name": type[helper.getFakeNumber(0,1)],
     "Item Type": 'ITUNES_STORE_CONTENT',
     "Media Duration In Milliseconds": helper.getFakeNumber(111111111,99999999),
     "Media Type": "",
     "Metrics Bucket Id": helper.getFakeNumber(0,200), 
     "Metrics Client Id": helper.makeid(20)  ,
     "Milliseconds Since Play": helper.getFakeNumber(111111111,99999999),
     "Offline": "", 
     "Play Duration Milliseconds": "", 
     "Provided Audio Bit Depth": "", 
     "Provided Audio Channel": "",
     "Provided Audio Sample Rate": "", 
     "Provided Bit Rate": "",
     "Provided Codec": "",
     "Provided Playback Format": "",
     "Session Is Shared": "",
     "Shared Activity Devices-Current": "",
     "Shared Activity Devices-Max": "", 
     "Song Name": "Song Name# "+ helper.getFakeNumber(1,9), 
     "Source Type": "", 
     "Start Position In Milliseconds": helper.getFakeNumber(1,99999999),
     "Store Front Name": "United States",
     "User's Audio Quality": "", 
     "User's Playback Format": "",
     "UTC Offset In Seconds":helper.getFakeNumber(1,99999999),
}

 

var json = JSON.stringify( record );

 console.log(json);
