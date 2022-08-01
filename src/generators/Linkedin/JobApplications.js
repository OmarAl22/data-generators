var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

var date =  faker.date.past();
var requested_timestamp =     (date.getMonth() + 1)+ "/" +  date.getDate()+ "/" + date.getFullYear()+  ", " +   +  " " +date.getHours()+":"+ date.getMinutes()+ " PM";
 
let record = {
 
    "Application Date":requested_timestamp,
    "Contact Email": faker.internet.email(),
    "Contact Phone Number":faker.phone.phoneNumber(),
    "Company Name":faker.company.companyName(),
    "Job Title":faker.name.jobTitle(),
    "Job Url":"http://www.linkedin.com/jobs/view/"+helper.getFakeNumber(10000000,99999999),
    "Resume Name":"Resume.pdf",
    "Question And Answers":""
    
 
}

 

var json = JSON.stringify( record );

 console.log(json);

