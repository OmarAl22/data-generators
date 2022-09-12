var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
var flag = ["Apple ID Number",
    "Topic Index",
   " Likely Product Index"
    ];
  
let record = { 	

 "Category":flag[helper.getFakeNumber(0.3)],
    "Values": helper.getFakeNumber(0.3),
 
}

 

var json = JSON.stringify( record );

 console.log(json);
