var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
var flag = ['male','female']; 
var date =  faker.date.past();
 
let comment ={
    "CITY":[
        faker.address.city()	,
     ],
     "COUNTRY":[
        faker.address.country()	
     ],
     "EMAIL":[
        faker.internet.exampleEmail()
     ],
     "PHONE":[
        faker.phone.phoneNumber(),
     ],
     "JOB_TITLE":[
        faker.name.jobTitle(),
     ],
     "COMPANY_NAME":[
        faker.company.bs()
     ],
     "GENDER":[
        flag[helper.getFakeNumber(0,1)],
     ],
     "FIRST_NAME":[
        faker.name.firstName(),
     ],
     "LAST_NAME":[
        faker.name.lastName(),
     ],
     "FULL_NAME":[
        ""
     ],
     "WORK_EMAIL":[
        faker.internet.exampleEmail()
     ]
}

  

 

var json = JSON.stringify( comment );

 console.log(json);
