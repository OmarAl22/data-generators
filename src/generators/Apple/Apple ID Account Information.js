var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

var date =  faker.date.past();
var requested_timestamp =     (date.getMonth() + 1)+ "/" +  date.getDate()+ "/" + date.getFullYear()+  " " +   +  " " +date.getHours()+":"+ date.getMinutes()+":"+ date.getSeconds()+ " PM";
 var prefix = ["Mr.", "Mrs.", "Miss."];
 var gender = ['female','male'];
 var flag = ['ON', 'OFF', 'N/A'];
 var lang = ["ar-SA","bn-BD","bn-IN","cs-CZ","da-DK","de-AT","de-CH","de-DE","el-GR","en-AU","en-CA","en-GB","en-IE","en-IN","en-NZ","en-US","en-ZA","es-AR","es-CL","es-CO","es-ES","es-MX","es-US","fi-FI","fr-BE","fr-CA","fr-CH","fr-FR","he-IL","hi-IN","hu-HU","id-ID","it-CH","it-IT","jp-JP"];
let record = {
 
    "Apple ID Number":helper.getFakeNumber(1111111111,99999999999),
    "Apple ID": "**************@gmail.com",
    "Create Date":requested_timestamp,
    "Prefix":prefix[helper.getFakeNumber(0,2)],
    "First Name":faker.name.firstName(),
    "Middle Name":faker.name.middleName(),
    "Last Name":faker.name.lastName(),
    "Nickname":faker.name.firstName(),
    "Title":"N/A",
    "Suffix":faker.name.suffix(),

    "Gender":gender[helper.getFakeNumber(0,1)],
    "Language":lang[helper.getFakeNumber(0,40)],
    "Last Update Date":requested_timestamp,
    "Phonetic Prefix":"N/A",
    "Phonetic First Name":"N/A",
    "Phonetic Middle Name":"N/A",
    "Phonetic Last Name":"N/A",
    "Phonetic Nickname":"N/A",
    "Phonetic Title":"N/A",
    "Phonetic Suffix":"N/A",
    "Legal Name":"N/A",
    "TimeZone":"N/A",
    "Company Name":faker.company.companyName(),
    "Apple ID Alias":"N/A",
    "Organization Name":"N/A",
    "Last Password Change Date":"N/A",
    "Trusted Devices":"N/A",
    "Trusted Phone Numbers 1":"N/A",
    "Trusted Phone Numbers 2":"N/A",
    "iMessage Phone":helper.getFakeNumber(1111111111,9999999999),
    "Emails":"N/A",
    "iCloud Mail Aliases":"N/A",
    "Phones":"N/A",
    "Official Address":faker.address.streetAddress(),
    "Residence Address":"N/A",
    "Mailing Address":"N/A",
    "Shipping Address":"N/A",
    "Billing Address":"N/A",
    "Payment Type":"N/A",
    "Billing Info Prefix":"N/A",
    "Billing Info First Name":"N/A",
    "Billing Info Last Name":"N/A",
    "Billing Info Suffix":"N/A",
    "Billing Info Phonetic First Name":"N/A",
    "Billing Info Phonetic Last Name":"N/A",
    "Shipping Info Prefix":"N/A",
    "Shipping Info First Name":"N/A",
    "Shipping Info Last Name":"N/A",
    "Shipping Info Suffix":"N/A",
    "Shipping Info Phonetic First Name":"N/A",
    "Shipping Info Phonetic Last Name":"N/A",
    "App Store Announcements and Offers":    flag[helper.getFakeNumber(0,3)],
    "Apps, Music, Movies, and More":    flag[helper.getFakeNumber(0,3)],
    "Apple News Updates":    flag[helper.getFakeNumber(0,3)],
    "Apple Music":    flag[helper.getFakeNumber(0,3)],
    "Beats Email Subscription":    flag[helper.getFakeNumber(0,3)],
    "Teacher Engagement Program":    flag[helper.getFakeNumber(0,3)],
    "Apple Survey":"N/A",
    "Share iCloud Analytics":"N/A",
    "Compliance Phone":"N/A",
    "Family Sharing":"N/A",
    "Third Party Email Permission":"N/A",
    "Apple Store App Communications":"N/A",
    "Recovery Contacts":"N/A",
    "Recovery ID":"N/A",
    "Recovery Initiated Device Class":"N/A",
    "Recovery Initiated Device Locale":"N/A",
    "Recovery Initiated Client IP":"N/A",
    "Beneficiary Contacts":"N/A",
    "AppleCare+ Communications":  flag[helper.getFakeNumber(0,3)],
    


}

 

var json = JSON.stringify( record );

 console.log(json);
