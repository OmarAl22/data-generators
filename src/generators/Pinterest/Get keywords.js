const faker = require('faker');

const generateKeyword = () => {
  const keyword = {
    archived: false,
    id: faker.datatype.uuid(),
    parent_id: faker.datatype.uuid(),
    parent_type: "campaign",
    type: "keyword",
    bid: faker.datatype.number(100000, 1000000), // Bid value in micro currency
    match_type: faker.random.arrayElement(["BROAD", "PHRASE", "EXACT"]),
    value: faker.lorem.word()
  };

  return keyword;
};

const keywords = [generateKeyword()];
const json = JSON.stringify({ items: keywords, bookmark: faker.random.word() }, null, 2);

console.log(json);
