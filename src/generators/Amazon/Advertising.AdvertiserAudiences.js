var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
var topics = ["Aha Insurance","American Eagle","AT&T Corporation","BMO (Bank of Montreal)","Clever Cutter","Crucial","GKIDS","Great Wolf Lodge","LuminAID","Mars - Petcare","Medical Guardian","MetLife","National Presto Industries","Pepsi","Philips","Plexaderm","Rocket Mortgage","Starcom","Starz Entertainment LLC","Unilever"]
var size = helper.getFakeNumber(1,topics.length);

console.log("Advertisers who brought audiences in which you are included");

for(var i=0;i<size;i++)
    console.log(topics[helper.getFakeNumber(1,topics.length)]);
