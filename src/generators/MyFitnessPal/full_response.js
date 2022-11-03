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
    
    "id":helper.makeid(20),
"type":"exercise",
"date":requested_timestamp,
"exercise":{
   "id":helper.getFakeNumber(111111111,99999999)
},
"duration":helper.getFakeNumber(100,10000),
"energy":{
   "unit":"calories",
   "value":helper.getFakeNumber(0,1)
},
"start_time":date,
"avg_heart_rate":helper.getFakeNumber(70,120),
"max_heart_rate":helper.getFakeNumber(70,120),
"distance":helper.getFakeNumber(70,120),
"max_speed":helper.getFakeNumber(3,6),
"elevation_change":helper.getFakeNumber(70,120),
 

}

let diary_meal = {
    "type":"diary_meal",
    "date":requested_timestamp,
    "diary_meal":meal[helper.getFakeNumber(0,1)],
    "nutritional_contents":{
       "protein":helper.getFakeNumber(0,60),
       "fat":helper.getFakeNumber(0,60),
       "saturated_fat":helper.getFakeNumber(0,60),
       "polyunsaturated_fat":helper.getFakeNumber(0,60),
       "monounsaturated_fat":helper.getFakeNumber(0,60),
       "trans_fat":helper.getFakeNumber(0,60),
       "cholesterol":helper.getFakeNumber(0,60),
       "sodium":helper.getFakeNumber(0,60),
       "potassium":helper.getFakeNumber(0,60),
       "fiber":helper.getFakeNumber(0,60),
       "sugar":helper.getFakeNumber(0,60),
       "vitamin_a":helper.getFakeNumber(0,60),
       "vitamin_c":helper.getFakeNumber(0,60),
       "calcium":helper.getFakeNumber(0,60),
       "iron":helper.getFakeNumber(0,60),
       "carbohydrates":helper.getFakeNumber(0,60),
       "energy":{
          "unit":"calories",
          "value":helper.getFakeNumber(0,600),
       }
    }
}




let item = {
 
    "items":  [diary_meal,diary_meal, excercise], 
}
 

var json = JSON.stringify( item );
 console.log(json);

