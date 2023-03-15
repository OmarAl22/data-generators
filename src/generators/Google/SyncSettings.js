var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
var flag = [true,false];


let apps = {
    "app_launch_ordinal":"t",
    "extension":{
       "incognito_enabled":flag[helper.getFakeNumber(0,1)],
       "remote_install":flag[helper.getFakeNumber(0,1)],
       "disable_reasons":helper.getFakeNumber(0,1),
       "update_url":"",
       "id":"ahfgeienlihckogmohjhadlkjgocpleb",
       "version":helper.getFakeNumber(0,10),
       "enabled":flag[helper.getFakeNumber(0,1)],
    },
    "page_ordinal":"n"
}

let Preferences = {
    "name":"profile.content_settings.exceptions.images",
    "value":"{}"
}



let themes = {
    "use_system_theme_by_default":flag[helper.getFakeNumber(0,1)],
    "use_custom_theme":flag[helper.getFakeNumber(0,1)],
}



let SearchEngine = {

    "Apps":Array.from({length: helper.getFakeNumber(1,7)}, () => apps),
    "App Settings":[],
    "Preferences":Array.from({length: helper.getFakeNumber(1,7)}, () => Preferences),
    "Themes":Array.from({length: helper.getFakeNumber(1,7)}, () => themes),

      
}
 
  
 

 

var json = JSON.stringify( SearchEngine );

 console.log(json);
