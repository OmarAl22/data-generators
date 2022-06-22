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
    fieldName: "level",
    integerValue: helper.getFakeNumber(0, 10000),
  
  };
  let value2 = {
    fieldName: 'duration',
    integerValue: helper.getFakeNumber(0, 100000),
  
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
     sportHealthPaceMap:pace,
     partTimeMap:pace,
     avgPace:helper.getFakeNumber(0, 10000),
    bestPace:helper.getFakeNumber(0, 10000),
  }

 let activitySummary = {
  activityFeature:dataSummary,
    dataSummary:dataSummary,
 }

  let activityRecord = {
    id: helper.getFakeNumber(0, 100000000),
    desc: "jumping_rope",

    startTime:helper.getFakeNumber(0, 100000000000),
    endTime:helper.getFakeNumber(0, 100000000000),
    modifyTime:helper.getFakeNumber(0, 100000000000),
    activitySummary:activitySummary,
    details:[details,details],
    appInfo:appInfo,
     activityType :helper.getFakeNumber(0, 1000),
    activeTime :helper.getFakeNumber(0, 100000000000),
     
}
let response = {
    activityRecord:[activityRecord],
    deletedActivityRecord: [ ],
}

  if (sync) helper.getJSON(response);
 

   
 
  }

 
