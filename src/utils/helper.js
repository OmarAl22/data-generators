export function getFakeNumber(a, b) {
    return faker.datatype.number({ min: a, max: b });
  }
 
  export function getJSON(obj){
    
    let json =  JSON.stringify(obj);
    console.log(json);
     
  }
 
 
  export  function getCSV(obj){
    var csv = converter.json2csv(json, (err, csv) => {
      if (err) {
        throw err;
      } 
       console.log(csv);
    }); 
   
 
  
  }