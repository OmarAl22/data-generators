var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
 

const richTextLength = faker.datatype.number({ min: 1, max: 5 });

const richText = Array.from({ length: richTextLength }).map(() => ({
  type: 'text',
  text: {
    content: faker.lorem.words(),
    link: null
  },
  annotations: {
    bold: faker.datatype.boolean(),
    italic: faker.datatype.boolean(),
    strikethrough: faker.datatype.boolean(),
    underline: faker.datatype.boolean(),
    code: faker.datatype.boolean(),
    color: 'default'
  },
  plain_text: faker.lorem.words(),
  href: null
}));

const Browser_History = {
  object: 'block',
  id: faker.datatype.uuid(),
  parent: {
    type: 'page_id',
    page_id: faker.datatype.uuid()
  },
  created_time: faker.date.recent().toISOString(),
  last_edited_time: faker.date.recent().toISOString(),
  created_by: {
    object: 'user',
    id: faker.datatype.uuid()
  },
  last_edited_by: {
    object: 'user',
    id: faker.datatype.uuid()
  },
  has_children: faker.datatype.boolean(),
  archived: faker.datatype.boolean(),
  type: 'heading_2',
  heading_2: {
    richText,
    color: 'default',
    is_toggleable: faker.datatype.boolean()
  }
};

var json = JSON.stringify(Browser_History);
console.log(json);