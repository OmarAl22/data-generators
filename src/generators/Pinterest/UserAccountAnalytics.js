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


let daily_metrics = [{
     data_status :"READY",
     date :requested_timestamp,
     metrics:metrics,

}];

let summary_metrics = {
    metrics:metrics,


};

let property = {
    property1: {daily_metrics,summary_metrics},

    property2:     {daily_metrics,summary_metrics},


};

var json = JSON.stringify(property);
 console.log(json);
