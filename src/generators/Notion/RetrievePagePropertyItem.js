const faker = require('faker');
 
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');// generate synthetic data
const data = {
  object: 'list',
  results: [],
  next_cursor: faker.random.uuid(),
  has_more: faker.random.boolean(),
  property_item: {
    id: faker.random.alphaNumeric(4),
    next_url: faker.internet.url(),
    type: 'rollup',
    rollup: {
      function: faker.random.arrayElement(['sum', 'average', 'count']),
      type: 'incomplete',
      incomplete: {}
    }
  },
  type: 'property_item'
};

// generate 3 fake results
for (let i = 0; i < 3; i++) {
  const result = {
    object: 'property_item',
    id: faker.random.alphaNumeric(4),
    type: 'relation',
    relation: {
      id: faker.random.uuid()
    }
  };
  data.results.push(result);
}

const json = JSON.stringify(data, null, 2);
console.log(json);
