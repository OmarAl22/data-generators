var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
var flag = [true,false];

var date =  faker.date.past();var date2 =  faker.date.past();


let deviceSettings =
    {
       "deviceTag":helper.getFakeNumber(11111111,999999999),
       "reportingEnabled":flag[helper.getFakeNumber(0,1)],
       "legalCountryCode":"us",
       "devicePrettyName":faker.name.firstName(),
       "platformType":"IOS",
       "deviceCreationTime":date2,
       "latestLocationReportingSettingChange":{
          "reportingEnabledModificationTime":date2
       },
       "iosVersion":helper.getFakeNumber(10,20)+"." + helper.getFakeNumber(0,10),
       "deviceSpec":{
          "device":"device name"
       }
    }



let apps = {
    
    "createdTime":date,
    "modifiedTime":date2,
    "historyEnabled":flag[helper.getFakeNumber(0,1)],
    "deviceSettings":Array.from({length: helper.getFakeNumber(1,7)}, () => deviceSettings),
    "latestLocationHistorySettingChange":{
       "historyEnabledModificationTime":date2
    },
    "retentionWindowDays":helper.getFakeNumber(0,99999999),
    "hasReportedLocations":flag[helper.getFakeNumber(0,1)],
    "hasSetRetention":flag[helper.getFakeNumber(0,1)],
 

}
 


let SearchEngine = {
 
    "locations":Array.from({length: helper.getFakeNumber(1,7)}, () => apps),

      
}
 
  
 

 

var json = JSON.stringify( apps );

 console.log(json);
