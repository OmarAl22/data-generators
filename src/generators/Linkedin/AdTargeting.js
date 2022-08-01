var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

var date =  faker.date.past();
var requested_timestamp =     (date.getMonth() + 1)+ "/" +  date.getDate()+ "/" + date.getFullYear()+  ", " +   +  " " +date.getHours()+":"+ date.getMinutes()+ " PM";
 var age = helper.getFakeNumber(20,50);
 let gender = ['male','female'];

let record = {
 
    "Member Age":age + " to " + helper.getFakeNumber(age,age+9),
    "Company Names":faker.company.companyName(),
    "Company Names":faker.company.companyName(),
    "Company Follower of":faker.company.companyName(),
    "Company Names":faker.company.companyName(),
    "Company Category":"Company Category",
    "Company Size":helper.getFakeNumber(0,50) + "to" + helper.getFakeNumber(100,1000),
    "Degrees":"",
    "degreeClass":"",
    "Member Schools":"",
    "Company Growth Rate":"",
    "Fields of Study":"",
    "Company Connections":"",
    "Function By Size":"",
    "Job Functions":"",
    "Member Gender":gender[helper.getFakeNumber(0,1)],
    "Graduation Year": date.getFullYear(),
    "Member Groups":"",
    "Company Industries":"",
    "Member Interests":"",
    "Interface Locales":"",
    "interfaceLocale":"",
    "Member Traits":"",
    "Profile Locations":"",
    "Company Revenue":"",
    "Job Seniorities":"",
    "Member Skills":"",
    "Job Titles":"",
    "Job Titles":"",
    "Job Titles":"",
    "Years of Experience":"",

    
 
}

 

var json = JSON.stringify( record );

 console.log(json);

