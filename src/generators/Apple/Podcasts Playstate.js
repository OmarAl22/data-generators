var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
var date =  faker.date.past();
var flag = ["Yes","No"]; 
 let record = {

    "Feed URL": "http://feeds.soundcloud.com/users/soundcloud:users:111111111/sounds.rss",
    "Episode ID":  helper.makeid(25),
    "Visible?": flag[helper.getFakeNumber(0,1)],
    "Marked as played on": date,
    "Manually set": flag[helper.getFakeNumber(0,1)],
    "Is New?": flag[helper.getFakeNumber(0,1)],
    "Last played on": date,
    "Playback position": helper.getFakeNumber(0,10),
    "Play count":helper.getFakeNumber(0,10),
    "Has been played?":flag[helper.getFakeNumber(0,1)],

 

}

 

var json = JSON.stringify( record );

 console.log(json);
