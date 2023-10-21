const faker = require('faker');

function generatePlaceData() {
  const title = faker.company.companyName();
  const note = faker.lorem.sentence();
  const url = faker.internet.url();
  const comment = '';

  return `${title}\t${note}\t${url}\t${comment}`;
}

function generateCSV(numEntries) {
  let csvData = 'Title\tNote\tURL\tComment\n';

  for (let i = 0; i < numEntries; i++) {
    csvData += generatePlaceData() + '\n';
  }

  return csvData;
}

const numEntries = 10; // Change this to generate a different number of entries
const csvContent = generateCSV(numEntries);

console.log(csvContent);
