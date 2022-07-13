var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
var date =  faker.date.past();


let owner = {
     
        username:"string"
      
};
let board_owner = {
    board_owner: "string"
};
let media ={
    media_type:"string",
}

let items = {
    id:helper.getFakeNumber(1,10000),
         name:"name",
         description:"description",
         owner: owner,
         privacy:"PUBLIC"


};
let property = {
   
    items:     [items,items],
    bookmark:"string"

};

var json = JSON.stringify(property);
 console.log(json);
