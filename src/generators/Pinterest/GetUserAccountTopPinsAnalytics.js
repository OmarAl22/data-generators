var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
var date =  faker.date.past();
var requested_timestamp =   date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() ;

let metrics = {
   
    ENGAGEMENT:helper.getFakeNumber(1,10000),
    CLICKTHROUGH_RATE:helper.getFakeNumber(1,10000)/3,
    CLICKTHROUGH:helper.getFakeNumber(1,10000),
    CLOSEUP:helper.getFakeNumber(1,10000),
    CLOSEUP_RATE:helper.getFakeNumber(1,10)/3,
    ENGAGEMENT_RATE:helper.getFakeNumber(1,10)/3,
    SAVE:helper.getFakeNumber(1,10),
    SAVE_RATE:helper.getFakeNumber(1,10),
    IMPRESSION:helper.getFakeNumber(1,100)

};


let data_status = {
    property1:"READY",
    property2:"READY"

};

let pins = {
    metrics:metrics,
    data_status:data_status,
    pin_id:helper.getFakeNumber(1,100000000),
};


let date_availability = {
     latest_available_timestamp :helper.getFakeNumber(1,100000000),
     is_realtime :false


};
let property = {
    date_availability: date_availability,

    pins:     [pins,pins],
    sort_by:"IMPRESSION"

};

var json = JSON.stringify(property);
 console.log(json);
