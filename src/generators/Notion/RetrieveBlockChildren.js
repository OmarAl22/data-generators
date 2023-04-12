var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');// generate synthetic data
const data = {
  object: "list",
  results: [
    {
      object: "block",
      id: faker.datatype.uuid(),
      parent: {
        type: "page_id",
        page_id: faker.datatype.uuid()
      },
      created_time: faker.date.past().toISOString(),
      last_edited_time: faker.date.past().toISOString(),
      created_by: {
        object: "user",
        id: faker.datatype.uuid()
      },
      last_edited_by: {
        object: "user",
        id: faker.datatype.uuid()
      },
      has_children: faker.datatype.boolean(),
      archived: faker.datatype.boolean(),
      type: "heading_2",
      heading_2: {
        rich_text: Array.from({length: faker.datatype.number({min: 1, max: 10})}, () => ({
          type: "text",
          text: {
            content: faker.lorem.sentence(),
            link: null
          },
          annotations: {
            bold: faker.datatype.boolean(),
            italic: faker.datatype.boolean(),
            strikethrough: faker.datatype.boolean(),
            underline: faker.datatype.boolean(),
            code: faker.datatype.boolean(),
            color: "default"
          },
          plain_text: faker.lorem.sentence(),
          href: null
        })),
        color: "default",
        is_toggleable: faker.datatype.boolean()
      }
    },
    {
      object: "block",
      id: faker.datatype.uuid(),
      parent: {
        type: "page_id",
        page_id: faker.datatype.uuid()
      },
      created_time: faker.date.past().toISOString(),
      last_edited_time: faker.date.past().toISOString(),
      created_by: {
        object: "user",
        id: faker.datatype.uuid()
      },
      last_edited_by: {
        object: "user",
        id: faker.datatype.uuid()
      },
      has_children: faker.datatype.boolean(),
      archived: faker.datatype.boolean(),
      type: "paragraph",
      paragraph: {
        rich_text: Array.from({length: faker.datatype.number({min: 1, max: 10})}, () => ({
          type: "text",
          text: {
            content: faker.lorem.paragraph(),
            link: {
              url: faker.internet.url()
            }
          },
          annotations: {
            bold: faker.datatype.boolean(),
            italic: faker.datatype.boolean(),
            strikethrough: faker.datatype.boolean(),
            underline: faker.datatype.boolean(),
            code: faker.datatype.boolean(),
            color: "default"
          },
          plain_text: faker.lorem.paragraph(),
          href: faker.internet.url()
        })),
        color: "default"
      }
    }
  ],
  next_cursor: null,
  has_more: false,
  type: "block",
  block: {}
};

// convert to JSON string
const jsonString = JSON.stringify(data, null, 2);

// log to console
console.log(jsonString);