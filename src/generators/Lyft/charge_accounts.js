var faker = require('faker');

function generateCSVRecord() {
  let created_at = formatDate(faker.date.past().toISOString());
  let method = "card";
  let card_brand = faker.random.arrayElement(["Visa", "MasterCard", "American Express"]);
  let email = faker.internet.email();
  let expiry_month = faker.datatype.number({ min: 1, max: 12 });
  let expiry_year = faker.datatype.number({ min: 2022, max: 2025 });
  let last_four = faker.datatype.number({ min: 1000, max: 9999 });

  let record = {
    created_at: created_at,
    method: method,
    card_brand: card_brand,
    email: email,
    expiry_month: expiry_month,
    expiry_year: expiry_year,
    last_four: last_four
  };

  return record;
}

function formatDate(dateString) {
  return dateString.replace("T", " ").substring(0, dateString.length - 5) + " UTC";
}

function generateCSV(records) {
  let csv = "created_at\tmethod\tcard_brand\temail\texpiry_month\texpiry_year\tlast_four\n";

  records.forEach((record) => {
    csv += `${record.created_at}\t${record.method}\t${record.card_brand}\t${record.email}\t${record.expiry_month}\t${record.expiry_year}\t${record.last_four}\n`;
  });

  return csv;
}

function printCSVInConsole(csv) {
  console.log(csv);
}

function generateAndPrintCSV(numRecords) {
  let records = [];

  for (let i = 0; i < numRecords; i++) {
    let record = generateCSVRecord();
    records.push(record);
  }

  let csv = generateCSV(records);
  printCSVInConsole(csv);
}

// Generate and print 3 records for demonstration
generateAndPrintCSV(3);
