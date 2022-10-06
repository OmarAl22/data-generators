var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

var topics = ["Alexa Identity","Shopping Needs","Skill Suggestions","Shopping Needs","Guard","Guard","Alexa Identity","Alexa Identity 3rd Party","Alexa Identity for Calls","Skill Education","Announcement Education","Shopping Delivery Notification","Alexa Identity Generic","Announcements","Shopping Notifications","Alexa Identity high Frequency","Smart Properties Guest Identification","Announcement Education","Feedback Elicitation - All","Smart Properties Guest Identification","Education Notifications","Feedback Elicitation","Alexa Identity Generic","Routines","Alexa Identity for Calls","Answer Updates","Smart Home","Calling","Education Notifications","GEO Reminders","Alexa Identity for Shopping","Announcements","Alexa Identity for Shopping","Video Education","Pleasantries","Feedback Elicitation - All","Notifications","Hints","Video Education","Feature Discovery","Getting Started","Notifications","Feedback Elicitation","Hints","Alexa Identity for Calendar","Smart Home","Daily Briefing","Notification Delivery","Routines","Skill Education","Shopping Delivery Notification","Pleasantries","Notification Delivery","Start My Commute Education","Alexa Identity high Frequency","Calling","Alexa Identity for Calendar","Skill Suggestions","Alexa Identity 3rd Party","Daily Briefing","GEO Reminders","Answer Updates","Shopping Notifications","Getting Started","Feature Discovery","Start My Commute Education"];
 
 var list = Array.from({length: helper.getFakeNumber(8,20)}, () => "Voice recommendation from " + topics[helper.getFakeNumber(1,topics.length)] + " in last 180 days");
var long = "";
var counter ="";
 
for(var i=0;i<list.length;i++)
        long = long + list[i] +",";
 for(var i=0;i<list.length;i++)
        counter = counter + helper.getFakeNumber(0,20) +",";

 console.log(long);
 console.log(counter);
    