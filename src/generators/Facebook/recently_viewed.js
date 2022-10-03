var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');




let entries ={
 
        "timestamp":helper.getFakeNumber(111111111,999999999),
    "data": {
        "name":"",
        "uri":"https://www.facebook.com/username"
     }

}
let viewed ={
    "name":"People",
    "description":"People you've viewed when new friends were suggested to you",
    "entries":Array.from({length: helper.getFakeNumber(1,7)}, () => entries),
}

 
let recently_viewed ={
    "name":"Facebook Watch videos and shows",
    "description":"Videos and shows you've recently visited or viewed from Facebook Watch and time you've spent watching shows",
    children:Array.from({length: helper.getFakeNumber(1,7)}, () => viewed),
}

 
 let record = {
    recently_viewed:Array.from({length: helper.getFakeNumber(1,7)}, () => recently_viewed),
}

 

var json = JSON.stringify( record );

 console.log(json);
