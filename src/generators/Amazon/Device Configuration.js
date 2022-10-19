var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
 var flag = ['ENABLED', 'DISABLED'];
console.log("TYPE,	NAME,	REGISTRY ID,	MANUFACTURER NAME,	DESCRIPTION,	MODEL NAME,	REACHABILITY,	CREATED AT,	CAPABILITIES,	APPLIANCE TYPES,	SECURITY VOICE CODE,	SECURITY VOICE CODE FAILURES,	SECURITY 3P PIN TYPE,	DOORBELL CUSTOM CHIME FILE NAME,	DOORBELL CUSTOM CHIME DISPLAY NAME,	MANAGED NETWORK ACCESS DEVICE,	TARGET REGISTRY ID,	GROUP MEMBERS");

for(var i=0;i<3;i++)
    console.log("APPLIANCE,", faker.date.past(),  ", " + faker.name.firstName()+"'s iOS Device,"+  "Amazon,Amazon Smart Device,null,REACHABLE,null,null,ALEXA_VOICE_" + flag[helper.getFakeNumber(0,1)]   +",null,null,null,null,null,null,null,null");

faker.date.past()