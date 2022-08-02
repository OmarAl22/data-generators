var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

var date =  faker.date.past();
var requested_timestamp =     (date.getMonth() + 1)+ "/" +  date.getDate()+ "/" + date.getFullYear();


let record = {
 
    "First Name":faker.name.firstName(),
    	"Last Name":faker.name.lastName(),
        	"Email Address":faker.internet.email(),
            	"Company":faker.company.companyName(),
            	"Position":faker.name.jobTitle(),
            	"Connected On":requested_timestamp


    
 
}

 

var json = JSON.stringify( record );

 console.log(json);

