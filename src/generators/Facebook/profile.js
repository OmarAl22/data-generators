var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

var date =  faker.date.past();
 var fname = faker.name.firstName();
 var lname = faker.name.lastName();
 var flag = ['male','female']; 
 var flag2 = ['Single','Married','Divorced']; 
 var flag3 = [true,false]; 
let education_experiences = {

    "name":"University Name",
    "start_timestamp":helper.getFakeNumber(1111111,99999999),
    "end_timestamp":helper.getFakeNumber(1111111,99999999),
    "graduated":flag3[helper.getFakeNumber(0,1)],
    "concentrations":[
       
    ],
    "degree":" ",
    "school_type":"University",
    "timestamp":helper.getFakeNumber(1111111,99999999),

}

let work_experiences = 
    {
       "employer": faker.company.companyName(),
       "title": faker.name.jobTitle(),
       "description":"",
       "start_timestamp":helper.getFakeNumber(1111111,99999999),
       "timestamp":helper.getFakeNumber(1111111,99999999),
    }


let profile_v2 = {
    "profile_v2":{
        "name":{
           "full_name":fname + " " + lname,
           "first_name":fname,
           "middle_name":"",
           "last_name":lname
        },
        "emails":{
           "emails":Array.from({length: helper.getFakeNumber(0,2)}, () => faker.internet.exampleEmail()),
           "previous_emails":Array.from({length: helper.getFakeNumber(0,2)}, () => faker.internet.exampleEmail()),
           "pending_emails":Array.from({length: helper.getFakeNumber(0,2)}, () => faker.internet.exampleEmail()),
           "ad_account_emails":Array.from({length: helper.getFakeNumber(0,2)}, () => faker.internet.exampleEmail()),
            "birthday":{
           "year": helper.getFakeNumber(1970,2010),
           "month":helper.getFakeNumber(1,12),
           "day":helper.getFakeNumber(1,30)
        },
        "gender":{
           "gender_option": flag[helper.getFakeNumber(0,1)],

           "pronoun":flag[helper.getFakeNumber(0,1)],

        },
        "previous_names":[
           
        ],
        "other_names":[
           
        ],
        "current_city":{
           "name":faker.address.city(),
           "timestamp":0
        },
        "relationship":{
           "status":flag2[helper.getFakeNumber(0,2)],
           "timestamp":helper.getFakeNumber(1111111,99999999),
        },
        "education_experiences":Array.from({length: helper.getFakeNumber(0,2)}, () => education_experiences),
        "work_experiences": Array.from({length: helper.getFakeNumber(0,2)}, () => work_experiences),
        "blood_info":{
           "blood_donor_status":"unregistered"
        },
        "websites":[
           
        ],
        "phone_numbers":[
           {
              "phone_type":"Mobile",
              "phone_number":  faker.phone.phoneNumber(),      
              "verified":flag3[helper.getFakeNumber(0,1)],
           }
        ],
        "registration_timestamp":helper.getFakeNumber(1111111,99999999),
        "profile_uri":"https://www.facebook.com/"+fname,
     }
    }
}
 
     var json = JSON.stringify( profile_v2 );

     console.log(json);