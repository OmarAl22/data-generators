var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
 let faker = require("faker");
 
var sync = true;

for (let i = 0; i < 1; i++) { 
  let date = faker.date.past();
  let date_end = new Date(date.getTime());
  date_end.setHours(date.getHours() + 24);


  let value1 = {
    fieldName: "threshold",
    integerValue: helper.getFakeNumber(0, 10),
  
  };
  let value2 = {
    fieldName: 'avg_heart_rate',
    integerValue: helper.getFakeNumber(50, 100),
  
  };

  let value3 = {
    fieldName: 'max_heart_rate',
    integerValue: helper.getFakeNumber(0, 10),
  
  };

  let value4 = {
    fieldName: 'min_heart_rate',
    integerValue: helper.getFakeNumber(0, 10),
  
  };



  let value12 = {
    fieldName: 'bpm',
    integerValue:  helper.getFakeNumber(50, 100),
  
  };
  
  let samplePoints = {
    startTime:helper.getFakeNumber(0, 100000000000),
    endTime:helper.getFakeNumber(0, 100000000000),
     dataTypeName :"com.huawei.instantaneous.heart_rate",
     value:[value12],
 
      }

  let ecg_detail = {

  
     startTime:helper.getFakeNumber(0, 100000000000),
    endTime:helper.getFakeNumber(0, 100000000000),
    dataCollectorId:"raw:com.huawei.instantaneous.heart_rate:300013102:huawei:mp:1234567890",
    samplePoints:[samplePoints],
};


   

  


 let subData = {
    "com.huawei.instantaneous.heart_rate":ecg_detail,
 }
 
  let activityRecord = {

   
    startTime:helper.getFakeNumber(0, 100000000000),
    endTime:helper.getFakeNumber(0, 100000000000),
     originalDataCollectorId:"com.huawei.health.record.tachycardia",
    value: [value1, value2, value3, value4],
    subData: subData,
    
     
}
let response = {
    healthRecords:[activityRecord],
 }

  if (sync) helper.getJSON(response);
 

   
 
  }

 
