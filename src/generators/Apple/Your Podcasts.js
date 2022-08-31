var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
var date =  faker.date.past();
var flag = ["Yes","No"]; 
 let record = {

    "Last updated":date,
    "Added on": date,
    "Feed URL": "http://feeds.soundcloud.com/users/soundcloud:users:111111111/sounds.rss",
    "Title": " Title",
    "Subscribed?": flag[helper.getFakeNumber(0,1)],
    "Last touched on": date,
    "Show type": "      ",
    "Sort": 'descending',
    "Playback newest to oldest": flag[helper.getFakeNumber(0,1)],

}

 

var json = JSON.stringify( record );

 console.log(json);
