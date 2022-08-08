var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

var date =  faker.date.past();
var requested_timestamp =     (date.getMonth() + 1)+ "/" +  date.getDate()+ "/" + date.getFullYear()+  " " +   +  " " +date.getHours()+":"+ date.getMinutes()+":"+ date.getSeconds() +" UTC";
var flag = ['follow','unfollow'];

let record = {
 

    "First Name":faker.name.firstName(),
    "Last Name":faker.name.lastName(),
    "Maiden Name":"",
    "Address":faker.address.streetAddress(),
    "Birth Date":faker.date.past(),
    "Headline":"",
    "Summary":"",
    "Industry":"",
    "Zip Code":faker.address.zipCode(),
    "Geo Location":"",
    "Twitter Handles":"",
    "Websites":"",
    "Instant Messengers":"",
}

 

var json = JSON.stringify( record );

 console.log(json);
