var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

var date =  faker.date.past();
 
let data = {
    data:{
        "name":"Reduce (default)",
        "value":"These posts may be moved lower in Feed so your\'e less likely to see them "
    }  
}
let reduce ={
    "name":"Low-quality content",
    "description":"Content that usually reduced based on feedback, such as clickbait and spam",
    "entries":[data,data],
}

 let record = {
    reduce:[reduce,reduce],
}

 

var json = JSON.stringify( record );

 console.log(json);
