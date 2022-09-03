var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var month= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
var date =  dayNames[helper.getFakeNumber(0,6)] + " " + helper.getFakeNumber(1,30) + " " + month[helper.getFakeNumber(0,11)] + " " + helper.getFakeNumber(2010,2022) + " " + helper.getFakeNumber(0,23) + ":" +
+ ":" + helper.getFakeNumber(1,59) + ":" + helper.getFakeNumber(0,59)  + "." + + "" + helper.getFakeNumber(0,23) + "+00000"; 
var recentActivity = {

}

let interpreted_preferences_and_recent_activity = {

    preferences_and_recent_activity_user_id:helper.makeid(25),
    preferences_and_recent_activity_last_modified_timestamp: date,
    recentActivity:recentActivity, 
    preferences_and_recent_activity_version:date,
    preferences_and_recent_activity_isDisabled:date,
    preferences_and_recent_activity_last_visited_timestamp:date

}
 
var record = {

    interpreted_preferences_and_recent_activity:interpreted_preferences_and_recent_activity,

}

var json = JSON.stringify( record );

 console.log(json);

 
