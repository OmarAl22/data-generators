var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
 
 var array = ['A','G','C','T'];
let position =  1;
 

console.log("rsid\tchromosome\tposition\tallele1\tallele2");
for (let i = 0; i < 100; i++) {
     
    
  let rsid = "rs" +  helper.getFakeNumber(1000000,100000000);
  let tchromosome =  helper. getFakeNumber(5000000,100000000);
 
  let allele1 = array[Math.floor(Math.random()*array.length)] ;
  let allele2 = array[Math.floor(Math.random()*array.length)];
  console.log(rsid + "\t" + tchromosome + "\t" + position + "\t" + allele1+ "\t" + allele2);
  position = position + 1;
}

 
 
 
