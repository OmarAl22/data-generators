const faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
const comment = {
  object: 'comment',
  id: faker.random.uuid(),
  parent: {
    type: 'page_id',
    page_id: faker.random.uuid()
  },
  discussion_id: faker.random.uuid(),
  created_time: faker.date.recent().toISOString(),
  last_edited_time: faker.date.recent().toISOString(),
  created_by: {
    object: 'user',
    id: faker.random.uuid()
  },
  rich_text: [
    {
      type: 'text',
      text: {
        content: faker.lorem.sentence(),
        link: null
      },
      annotations: {
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'default'
      },
      plain_text: faker.lorem.sentence(),
      href: null
    }
  ]
};

const syntheticJSON = {
  object: 'list',
  results:  Array.from({length: helper.getFakeNumber(0,7)}, () =>  comment),
  next_cursor: null,
  has_more: false,
  type: 'comment',
  comment: {}
};

const jsonString = JSON.stringify(syntheticJSON, null, 2);
console.log(jsonString);
