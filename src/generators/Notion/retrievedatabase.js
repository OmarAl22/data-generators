const faker = require("faker");

const groceryList = {
  object: "database",
  id: faker.datatype.uuid(),
  created_time: faker.date.past().toISOString(),
  last_edited_time: faker.date.recent().toISOString(),
  icon: {
    type: "emoji",
    emoji: faker.random.arrayElement(["🎉", "🍎", "🥦", "🍕"]),
  },
  cover: {
    type: "external",
    external: {
      url: faker.image.imageUrl(),
    },
  },
  url: faker.internet.url(),
  title: [
    {
      type: "text",
      text: {
        content: faker.commerce.productName(),
        link: null,
      },
      annotations: {
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: "default",
      },
      plain_text: faker.commerce.productName(),
      href: null,
    },
  ],
  description: [
    {
      type: "text",
      text: {
        content: faker.lorem.sentence(),
        link: null,
      },
      annotations: {
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: "default",
      },
      plain_text: faker.lorem.sentence(),
      href: null,
    },
  ],
  properties: {
    "+1": {
      id: faker.random.alphaNumeric(4),
      name: "+1",
      type: "people",
      people: {},
    },
    "In stock": {
      id: faker.random.alphaNumeric(4),
      name: "In stock",
      type: "checkbox",
      checkbox: {},
    },
    Price: {
      id: faker.random.alphaNumeric(4),
      name: "Price",
      type: "number",
      number: {
        format: "dollar",
      },
    },
    Description: {
      id: faker.random.alphaNumeric(4),
      name: "Description",
      type: "rich_text",
      rich_text: {},
    },
    "Last ordered": {
      id: faker.random.alphaNumeric(4),
      name: "Last ordered",
      type: "date",
      date: {},
    },
    Meals: {
      id: faker.random.alphaNumeric(4),
      name: "Meals",
      type: "relation",
      relation: {
        database_id: faker.datatype.uuid(),
        synced_property_name: "Related to Grocery List (Meals)",
      },
    },
    "Number of meals": {
      id: faker.random.alphaNumeric(4),
      name: "Number of meals",
      type: "rollup",
      rollup: {
        rollup_property_name: "Name",
        relation_property_name: "Meals",
        rollup_property_id: "title",
        relation_property_id: "mxp^",
        function: "count",
      },
    },
    "Store availability": {
      id: faker.random.alphaNumeric(4),
      name: "Store availability",
      type: "multi_select",
      multi_select: {
        options: [
          {
            id: faker.datatype.uuid(),
            name: "Duc Loi Market",
            color: faker.random.arrayElement([
              "blue",
              "gray",
              "purple",
              "yellow",
            ]),
          },
          {
            id: faker.datatype.uuid(),
            name: "Rainbow Grocery",
            color: faker.random.arrayElement([
              "blue",
              "gray",
              "purple",
              "yellow",
            ]),
          },
          {
            id: faker.datatype.uuid(),
            name: "Whole Foods",
            color: faker.random.arrayElement([
              "blue",
              "gray",
              "purple",
              "yellow",
            ]),
          },
          {
            id: faker.datatype.uuid(),
            name: "Trader Joes",
            color: faker.random.arrayElement([
              "blue",
              "gray",
              "purple",
              "yellow",
            ]),
          },
        ],
      },
    },
    Tags: {
      id: faker.random.alphaNumeric(4),
      name: "Tags",
      type: "multi_select",
      multi_select: {
        options: [
          {
            id: faker.datatype.uuid(),
            name: "Produce",
            color: faker.random.arrayElement([
              "blue",
              "gray",
              "purple",
              "yellow",
            ]),
          },
          {
            id: faker.datatype.uuid(),
            name: "Dairy",
            color: faker.random.arrayElement([
              "blue",
              "gray",
              "purple",
              "yellow",
            ]),
          },
          {
            id: faker.datatype.uuid(),
            name: "Bakery",
            color: faker.random.arrayElement([
              "blue",
              "gray",
              "purple",
              "yellow",
            ]),
          },
          {
            id: faker.datatype.uuid(),
            name: "Snacks",
            color: faker.random.arrayElement([
              "blue",
              "gray",
              "purple",
              "yellow",
            ]),
          },
        ],
      },
    },
  },
};

console.log(groceryList);
