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
    fieldName: "wakeup_time",
    integerValue: helper.getFakeNumber(0, 10),
  
  };
  let value2 = {
    fieldName: 'sleep_score',
    integerValue: helper.getFakeNumber(50, 100),
  
  };

  let value3 = {
    fieldName: 'fall_asleep_time',
    integerValue: helper.getFakeNumber(0, 10),
  
  };

  let value4 = {
    fieldName: 'dream_time',
    integerValue: helper.getFakeNumber(0, 10),
  
  };

  let value5 = {
    fieldName: 'deep_sleep_part',
    integerValue: helper.getFakeNumber(0, 10),
  
  };

  

  let value6 = {
    fieldName: 'light_sleep_time',
    integerValue: helper.getFakeNumber(0, 10),
  };

  let value7 = {
    fieldName: 'wakeup_count',
    integerValue: helper.getFakeNumber(0, 10),
  };


  let value8 = {
    fieldName: 'all_sleep_time',
    integerValue: helper.getFakeNumber(0, 10),
  };

  let value9 = {
    fieldName: 'go_bed_time',
    integerValue: helper.getFakeNumber(0, 10),
  };

  let value10 = {
    fieldName: 'awake_time',
    integerValue: helper.getFakeNumber(0, 10),
  };

  let value11 = {
    fieldName: 'deep_sleep_time',
    integerValue: helper.getFakeNumber(0, 10),
  };

  let value12 = {
    fieldName: 'sleep_state',
    integerValue:  helper.getFakeNumber(0, 10),
  
  };
  
  let samplePoints = {
    startTime:helper.getFakeNumber(0, 100000000000),
    endTime:helper.getFakeNumber(0, 100000000000),
     dataTypeName :"com.huawei.health.record.sleep",
     value:[value12],
     modifyTime:helper.getFakeNumber(0, 100000000000),

      }

  let ecg_detail = {

  
     startTime:helper.getFakeNumber(0, 100000000000),
    endTime:helper.getFakeNumber(0, 100000000000),
    dataCollectorId:"raw:com.huawei.continuous.sleep.fragment:uu.txt:huawei:mp:1234567890",
    samplePoints:[samplePoints],
};


   

  


 let subData = {
    "com.huawei.continuous.sleep.fragment":ecg_detail,
 }
 
  let activityRecord = {

   
    startTime:helper.getFakeNumber(0, 100000000000),
    endTime:helper.getFakeNumber(0, 100000000000),
     dataTypeName :"com.huawei.health.record.sleep",
     originalDataCollectorId:"raw:com.huawei.health.record.sleep:uu.txt:google:mp:1234567890",

    value: [value1, value2, value3, value4, value5, value6, value7, value8, value9, value10, value11],
    modifyTime:helper.getFakeNumber(0, 100000000000),

    id: helper.getFakeNumber(99999,999999999999)+"",
    subData: subData,
    
     
}
let response = {
    healthRecords:[activityRecord],
 }

  if (sync) helper.getJSON(response);
 

   
 
  }

 
