var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
var ip = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));

var date =  faker.date.past();
var flag = ["Yes","No"]; 
var paymenttype = ["visa","none"]; 
var prefix = ["Mr.", "Mrs.", "Miss."];
 let record = {
      "Apple ID Number":	helper.getFakeNumber(111111111,99999999),
     "Billing Information ID":helper.getFakeNumber(111111111,99999999),
     "Active":flag[helper.getFakeNumber(0,1)],
     "Rank":helper.getFakeNumber(1,5)	,
     "Billing Information Created Date":date	,
     "E-mail Address":"a*****@gmail.com"	,
     "Billing Name Prefix":	prefix[helper.getFakeNumber(0,2)],
     "Billing First Name":faker.name.firstName(),
     "Billing Last Name":faker.name.lastName(),
     "Billing Street Address":	faker.address.streetAddress(),
     "Billing Street Address 2":""	,
     "Billing Street Address 3":""	,
     "Billing Address City":faker.address.city()	,
     "Billing Address County":faker.address.county()	,
     "Billing District":""	,
     "Billing Address Suburb":""	,
     "Billing State/Province":faker.address.stateAbbr()	,
     "Billing Postal Code":	faker.address.zipCode(),
     "Billing Phone Area Code":	faker.phone.phoneNumber(),
     "Billing Phone Number":faker.phone.phoneNumber(),
     "Billing Storefront Country":faker.address.country()		,
     "Payment Type":	paymenttype[helper.getFakeNumber(0,1)],
     "Apple Pay Indicator":""	,
     "Carrier Billing Country Dial Code":	"",
     "Carrier Billing Phone Number":	"",
     "Carrier Billing Carrier":	"",
     "Carrier Billing Account Type":""	,
     "Device IP Address":ip	,
     "Device Details":'StoreKitUIService/1.0 iOS/14.0 model/iPhone12,1 hwp/t8030 build/18A373 (6; dt:203)'	,
     "Billing First Name (Phonetic)":''	,
     "Billing Last Name (Phonetic)":''	,
     "Card Issuing Bank Name":''	,
     "Card Issuing Country":faker.address.country()		,
     "Card Number":	helper.getFakeNumber(0000,9999),
     "Payment Card Category":"",
}

 

var json = JSON.stringify( record );

 console.log(json);
