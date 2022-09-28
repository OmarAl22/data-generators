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
 let attachments = 
    {
        "data":[
            {
               "life_event":{
                  "title":"Left Job at Prifina",
                  "start_date":{
                    "year": helper.getFakeNumber(1970,2010),
                    "month":helper.getFakeNumber(1,12),
                    "day":helper.getFakeNumber(1,30)
                  },
                  "end_date":{
                    "year": helper.getFakeNumber(1970,2010),
                    "month":helper.getFakeNumber(1,12),
                    "day":helper.getFakeNumber(1,30)
                  },
                  "place":{
                     "name":faker.address.city(),
                     "coordinate":{
                        "latitude":37.7793,
                        "longitude":-122.419
                     },
                     "address":"San Francisco, CA, US"
                  }
               }
            }

        ]}
    

let profile_updates = {

    "type_INTERNAL":"",
    "timestamp":helper.getFakeNumber(1111111,99999999),
    "title":fname + " " + lname + " event's title ",
    "attachments":[attachments]
}



let profile_v2 = {
    
        "profile_updates_v2":[profile_updates
        ]
     
}
 
     var json = JSON.stringify( profile_v2 );

     console.log(json);