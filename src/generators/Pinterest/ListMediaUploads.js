var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');

let items = {
    media_id: helper.getFakeNumber(0,1000)+"",
    media_type: "video",
    status: "succeeded"
};
let property = {
   
    items:     [items,items],
    bookmark:"string"

};

var json = JSON.stringify(property);
 console.log(json);
