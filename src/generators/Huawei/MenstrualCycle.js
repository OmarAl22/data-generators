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
    fieldName: "recordDay",
    integerValue: helper.getFakeNumber(2015, 2023) + "" +  helper.getFakeNumber(1, 12) + "" +  helper.getFakeNumber(1, 30),
  
  };
  let value2 = {
    fieldName: 'status',
    integerValue: helper.getFakeNumber(50, 100),
  
  };

  let value3 = {
    fieldName: 'subStatus',
    integerValue: helper.getFakeNumber(0, 10),
  
  };

  let value4 = {
    fieldName: 'timeZone',
    integerValue: "+0800",
  
  };

  let value5 = {
    fieldName: 'volume',
    integerValue: helper.getFakeNumber(0, 10),
  
  };

  

  let value6 = {
    fieldName: 'dysmenorrhoea',
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
    dataTypeName :"com.huawei.continuous.menstrual_flow",
     value:[value5],
 
      }

      let samplePoints2 = {
        startTime:helper.getFakeNumber(0, 100000000000),
        endTime:helper.getFakeNumber(0, 100000000000),
        dataTypeName :"raw:com.huawei.dysmenorrhoea:com.huawei.health:HUAWEI Health:HUAWEI Health:1000:300000000150011553",
         value:[value6],
     
          }


      let detail = {

  
        startTime:helper.getFakeNumber(0, 100000000000),
       endTime:helper.getFakeNumber(0, 100000000000),
       dataCollectorId:"raw:com.huawei.continuous.sleep.fragment:uu.txt:huawei:mp:1234567890",
       samplePoints:[samplePoints],
   };
   

   let detail2 = {

  
    startTime:helper.getFakeNumber(0, 100000000000),
   endTime:helper.getFakeNumber(0, 100000000000),
   dataCollectorId:"raw:com.huawei.continuous.sleep.fragment:uu.txt:huawei:mp:1234567890",
   samplePoints:[samplePoints2],
};


  


 let subData = {
    "com.huawei.continuous.menstrual_flow":detail,
    "com.huawei.dysmenorrhoea":detail2,
 }
  let activityRecord = {

   
    startTime:helper.getFakeNumber(0, 100000000000),
    endTime:helper.getFakeNumber(0, 100000000000),
     dataTypeName :"com.huawei.health.record.menstrual_cycle",
     originalDataCollectorId:"raw:com.huawei.health.record.menstrual_cycle:com.huawei.health:default",

    value: [value1, value2, value3, value4],

    id: helper.getFakeNumber(99999,999999999999)+"",
    subData: subData,
    
     
}
let response = {
    healthRecords:[activityRecord],
 }

  if (sync) helper.getJSON(response);
 

   
 
  }

 
