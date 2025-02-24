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

  let value6 = {
    fieldName: 'ecg_type',
    integerValue:  helper.getFakeNumber(0, 10),
  
  };

  let value7 = {
    fieldName: 'voltage_datas',
    integerValue: '[' + Array.from({length: 40}, () => Math.sqrt(helper.getFakeNumber(0,9))) +"]",
  
  };



  let ecg_detail = {

  
     startTime:helper.getFakeNumber(0, 100000000000),
    endTime:helper.getFakeNumber(0, 100000000000),
    dataTypeName:"com.huawei.continuous.ecg_detail",
    dataCollectorId:"raw:com.huawei.continuous.ecg_detail:com.huawei.health:Huawei:006S:123456:300000000005047066",
    value:[value6,value7],

  
  };


   

  let pace = {
    "Value":helper.getFakeNumber(0, 10000),
  }
  


 let subData = {
    "com.huawei.continuous.ecg_detail":ecg_detail,
 }
 
  let activityRecord = {

   
    startTime:helper.getFakeNumber(0, 100000000000),
    endTime:helper.getFakeNumber(0, 100000000000),
     dataTypeName :"com.huawei.continuous.ecg_record",
    value: [value1, value2, value3, value4, value5],
    id: helper.getFakeNumber(99999,999999999999)+"",
    subData: subData,
    
     
}
let response = {
    healthRecords:[activityRecord],
 }

  if (sync) helper.getJSON(response);
 

   
 
  }

 
