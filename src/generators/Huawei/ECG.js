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
    fieldName: "ecg_type",
    integerValue: helper.getFakeNumber(0, 10),
  
  };
  let value2 = {
    fieldName: 'avg_heart_rate',
    integerValue: helper.getFakeNumber(50, 100),
  
  };

  let value3 = {
    fieldName: 'ecg_arrhythmia_typ',
    integerValue: helper.getFakeNumber(0, 10),
  
  };

  let value4 = {
    fieldName: 'user_symptom',
    integerValue: helper.getFakeNumber(0, 10),
  
  };

  let value5 = {
    fieldName: 'ecg_algorithm_versio',
    integerValue: "V1.0.0.39",
  
  };


  let samplePoints = {

    id: helper.getFakeNumber(0, 100000000),
    resource_state: helper.getFakeNumber(0, 100),
     startTime:helper.getFakeNumber(0, 100000000000),
    endTime:helper.getFakeNumber(0, 100000000000),
    dataTypeName:"com.huawei.continuous.steps.total",
    originalDataCollectorId:"raw: com.huawei.instantaneous.blood_glucose:300013102:sinocare:mp:1234567890",
    value:[value1,value2],

  
  };
  let appInfo = {
    appName:"app" +helper.getFakeNumber(0, 100)+'',
    appVersion:helper.getFakeNumber(0, 10)+'',
    desc:helper.getFakeNumber(0, 10000)+'',
    clientId:helper.getFakeNumber(0, 10000)+'',
  };

  let deviceInfo = {
    uniqueId:helper.getFakeNumber(0, 10000)+'',
    devType:"Phone",
    modelNum:"UAWEI Health",
    manufacturer:"HUAWEI Health"
 }

  
  let details = {
    startTime:helper.getFakeNumber(0, 100000000000),
    endTime:helper.getFakeNumber(0, 100000000000),
    dataCollectorId:"derived:com.huawei.instantaneous.blood_glucose:com.huawei.hms.hihealth.service:merged",
    samplePoints:[samplePoints],
  }


  let dataSummary = {
    startTime:helper.getFakeNumber(0, 100000000000),
    endTime:helper.getFakeNumber(0, 100000000000),
    dataTypeName:"com.huawei.continuous.steps.total",
    value:value1,
  };

  let sampleSet = {
    dataCollectorId:"derived:com.huawei.instantaneous.blood_glucose:com.huawei.hms.hihealth.service:merged",
    samplePoints:[samplePoints],

  };

  let pace = {
    "Value":helper.getFakeNumber(0, 10000),
  }
  
  let activityFeature = {

    paceMap:pace,
     
     partTimeMap:pace,
     avgPace:helper.getFakeNumber(0, 10000),
    bestPace:helper.getFakeNumber(0, 10000),
  }

 let activitySummary = {
    paceSummary:activityFeature,
    dataSummary:dataSummary,
 }
 
  let activityRecord = {

   
    startTime:helper.getFakeNumber(0, 100000000000),
    endTime:helper.getFakeNumber(0, 100000000000),
     dataTypeName :"com.huawei.continuous.ecg_record",
    value: [value1, value2, value3, value4, value5],
    activitySummary:activitySummary,
    timeZone:"+0800",
    details:[details,details],
    deviceInfo:deviceInfo,
    appInfo:appInfo,
     activityType :helper.getFakeNumber(0, 1000),
    activeTime :helper.getFakeNumber(0, 100000000000),
     
}
let response = {
    healthRecords:[activityRecord],
 }

  if (sync) helper.getJSON(response);
 

   
 
  }

 
