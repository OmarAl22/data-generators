var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
var date =  faker.date.past();

let board_owner = {
    board_owner: "string"
};
let media ={
    media_type:"string",
}

let items = {
    id:helper.getFakeNumber(1,10000),
         name:"name",
        
         created_at: date,
         link: "https://www.pinterest.com/",
         title: "string",
         description: "string",
         dominant_color: "#6E7874",
         alt_text: "string",
         board_id: "string",
         board_section_id: "string",
         board_owner:board_owner,
         media:media,
};
let property = {
   
    items:     items,
 

};

var json = JSON.stringify(property);
 console.log(json);
