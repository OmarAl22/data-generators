var faker = require('faker');
const haversine = require('haversine-distance');


var requested_timestamp_pure =  faker.date.past();
var requested_timestamp =  formatDate(requested_timestamp_pure.toISOString());

var pickup_timestamp_pure = new Date(requested_timestamp_pure.getTime());
pickup_timestamp_pure.setMinutes(requested_timestamp_pure.getMinutes() + getFakeNumber(1,5));
var pickup_timestamp =  formatDate(pickup_timestamp_pure.toISOString());
var dropoff_timestamp_pure = new Date(pickup_timestamp_pure.getTime());
dropoff_timestamp_pure.setMinutes(requested_timestamp_pure.getMinutes() + getFakeNumber(1,5));
var dropoff_timestamp =  formatDate(dropoff_timestamp_pure.toISOString());
var pickup_address = faker.address.nearbyGPSCoordinate([39.7837304,-100.4458825],1000,false);
var requested_lat= pickup_address[0];
var requested_lng= pickup_address[1];
var destination_address = faker.address.nearbyGPSCoordinate([requested_lat,requested_lng],30,false);

//var pickup_address_text =   getAddress(requested_lat,requested_lng); //'pickup_address_text'; 
//var destination_address_text =  getAddress(destination_address[0],destination_address[1]); //'destination_address_text'; //

var dropoff_lat = destination_address[0];
var  dropoff_long =  destination_address[1];  
 
const a = { latitude: requested_lat, longitude: requested_lng}
const b = { latitude: dropoff_lat, longitude: dropoff_long }
 
var distance = (haversine(a, b) * 0.000621371192).toFixed(2); ; //from meter to mile


 
  
let record = {
  
  city: "1",
  Product_Type: "UberX",
  Trip_or_Order_Status: "COMPLETED",  

  Request_Time: requested_timestamp,
  
  Begin_Trip_Time: pickup_timestamp,
  
  Begin_Trip_Lat: requested_lat,
  Begin_Trip_Lng: requested_lng,
  Begin_Trip_Address: "pickup_address_text",
  
  Dropoff_Time: dropoff_timestamp,
  Dropoff_Lat:dropoff_lat,
  Dropoff_Lng: dropoff_long,
Dropoff_Address: "destination_address_text",
Distance: distance * 1.25,
Fare_Amount: Number((Math.round((distance * 1.35)  * 100) / 100).toFixed(2)), 
Fare_Currency: "USD" 
};
 

var json = JSON.stringify(record);
 console.log(json);


function getFakeNumber(a, b) {
 return faker.datatype.number({ min: a, max: b });             
}

function formatDate(a) {
  return a.replace("T"," ").substring(0,a.length-5) + " +0000 UTC";              
 } 

 