var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
 
 
// Generate random data
const id = faker.datatype.uuid();
const createdTime = faker.date.past().toISOString();
const lastEditedTime = faker.date.between(createdTime, new Date()).toISOString();
const createdBy = { object: 'user', id: faker.datatype.uuid() };
const lastEditedBy = { object: 'user', id: faker.datatype.uuid() };
const coverUrl = faker.image.imageUrl();
const foodGroup = { id: faker.datatype.uuid(), type: 'select', select: { id: faker.datatype.uuid(), name: faker.lorem.word(), color: faker.internet.color() } };
const price = { id: faker.datatype.uuid(), type: 'number', number: faker.finance.amount(1, 10, 2) };
const responsiblePerson = { id: faker.datatype.uuid(), type: 'people', people: [{ object: 'user', id: faker.datatype.uuid(), name: faker.name.findName(), avatar_url: faker.internet.avatar(), type: 'person', person: { email: faker.internet.email() } }] };
const lastOrdered = { id: faker.datatype.uuid(), type: 'date', date: { start: faker.date.past().toISOString().substr(0, 10), end: null, time_zone: null } };
const costOfNextTrip = { id: faker.datatype.uuid(), type: 'formula', formula: { type: 'number', number: 0 } };
const recipes = { id: faker.datatype.uuid(), type: 'relation', relation: [{ id: faker.datatype.uuid() }, { id: faker.datatype.uuid() }], has_more: false };
const richText = { id: faker.datatype.uuid(), type: 'rich_text', rich_text: Array.from({ length: faker.datatype.number(10) }, () => ({ type: 'text', text: { content: faker.lorem.sentence(), link: null }, annotations: { bold: false, italic: false, strikethrough: false, underline: false, code: false, color: faker.internet.color() }, plain_text: faker.lorem.sentence(), href: null })) };
const storeAvailability = { id: faker.datatype.uuid(), type: 'multi_select', multi_select: Array.from({ length: faker.datatype.number(5) }, () => ({ id: faker.datatype.uuid(), name: faker.company.companyName(), color: faker.internet.color() })) };
const parent = { type: 'database_id', database_id: faker.datatype.uuid() };
const archived = faker.datatype.boolean();

// Construct the JSON object
const jsonObject = {
  object: 'page',
  id,
  created_time: createdTime,
  last_edited_time: lastEditedTime,
  created_by: createdBy,
  last_edited_by: lastEditedBy,
  cover: { type: 'external', external: { url: coverUrl } },
  food_group: foodGroup,
  price,
  responsible_person: responsiblePerson,
  last_ordered: lastOrdered,
  cost_of_next_trip: costOfNextTrip,
  recipes,
  description: richText,
  store_availability: storeAvailability,
  parent,
  archived,
};

// Convert the JSON object to a string
const jsonString = JSON.stringify(jsonObject, null, 2);

console.log(jsonString);
