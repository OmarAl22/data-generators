var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
 
 
    var date =  faker.date.past();
var requested_timestamp =     (date.getMonth() + 1)+ "/" +  date.getDate()+ "/" + date.getFullYear()+  " " +   +  " " +date.getHours()+":"+ date.getMinutes()+":"+ date.getSeconds()+ " PM";
var price = helper.getFakeNumber(0,4000);
var tax = helper.getFakeNumber(0,20);

let record = { 	

 "Invoice Number": "A" + helper.getFakeNumber(9999999.99999999),
    "Invoice Date": requested_timestamp,
 "Customer Order Number":"W" + helper.getFakeNumber(9999999.99999999),
 "Order Date":requested_timestamp,
 "Ship To Name":"A*****A B****B ",
 "Ship To Street 1":faker.address.streetAddress(),
 "Ship To Street 2":"",
 "Ship To City":faker.address.city()	,
 	"Ship To State":faker.address.stateAbbr()		,
"Ship To Postcode":	faker.address.zipCode(),
"Ship To Country":	faker.address.country(),
"Bill To Name": "A*****A B****B ",
"Bill To Street 1": faker.address.streetAddress(),
"Bill To Street 2": "	",
 "Bill To City": faker.address.city()	,
"Bill To State": faker.address.stateAbbr()		,
 "Bill To Postcode": faker.address.zipCode(),
"Bill To Country": faker.address.country(),
"Line Item": helper.getFakeNumber(0.20),
"Description": "Description",
"Qty": helper.getFakeNumber(0.20),
 "Currency": "USD",
"Price":price,
"Price Including Tax": price + ( (tax/100)*price) ,
"Tax Rate": tax +"%",
 "Payment Method": "Visa",
"Trade-in Device ID": "N/A",
 "DHL Subscription ID":"N/A"
}

 

var json = JSON.stringify( record );

 console.log(json);
