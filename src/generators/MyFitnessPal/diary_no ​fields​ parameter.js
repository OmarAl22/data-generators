var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

var date =  faker.date.past();
var requested_timestamp =    date.getFullYear()+  "-" + (date.getMonth() + 1) +  "-" +  date.getDate();
 var descriptions = ["Running , 5 mph","Walking, 1.0 mph","Elliptical Trainer","Walking 3.0 mph",
 "Running , 4.5 mph","Walking, 2.0 mph","Running  6.0 mph"];
var  meal = ["Breakfast", "Lunch", "Dinner"];
var tags = ["cardio","outdoors", "indoors"];


let excercise = {
    "type":"exercise",
    "id":helper.makeid(15),
    "date":requested_timestamp,
    "tags":Array.from({length: helper.getFakeNumber(1,7)}, () => tags[helper.getFakeNumber(0,2)]),
    "start_time":date,
    "duration":helper.getFakeNumber(100,7000),
    "energy":{
       "unit":"calories",
       "value":helper.getFakeNumber(10,700)
    },
    "exercise":{
       "id":helper.makeid(15),
       "version":helper.makeid(15),
       "type":"cardio",
       "description":descriptions[helper.getFakeNumber(0,6)],
       "mets":helper.getFakeNumber(10,700),
       "public":true
    }
 

}

let diary_meal = {
    "type":"diary_meal",
    "date":requested_timestamp,
    "diary_meal": meal[helper.getFakeNumber(0,2)],
    "nutritional_contents":{
       "energy":{
          "unit":"calories",
          "value":helper.getFakeNumber(10,700),
       },
       "fat":helper.getFakeNumber(0,50),
       "protein":helper.getFakeNumber(0,50),
       "sugar":helper.getFakeNumber(0,50),
       "cholesterol":helper.getFakeNumber(0,50),
       "fiber":helper.getFakeNumber(0,50),
       "vitamin_a":helper.getFakeNumber(0,50),
       "vitamin_c":helper.getFakeNumber(0,50),
 

}
}
let item = {
 
    "items":  [excercise,excercise, diary_meal], 
}
 

var json = JSON.stringify( item );
 console.log(json);

