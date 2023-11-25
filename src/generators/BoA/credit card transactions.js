const faker = require('faker');

const generateTransaction = () => {
  const postedDate = faker.date.past();
  const referenceNumber = faker.finance.account();
  const payee = faker.company.companyName();
  const city = faker.address.city();
  const state = faker.address.stateAbbr();
  const address = faker.address.streetAddress() + `, ${city}, ${state}`;
  const amount = parseFloat(faker.finance.amount(-100, 100, 2)).toFixed(2);

  return {
    postedDate,
    referenceNumber,
    payee,
    address,
    amount,
  };
};

const generateCSV = (count) => {
  const transactions = Array.from({ length: count }, generateTransaction)
    .sort((a, b) => a.postedDate - b.postedDate)
    .map((transaction) => `${transaction.postedDate.toLocaleDateString('en-US')}\t${transaction.referenceNumber}\t${transaction.payee}\t${transaction.address}\t${transaction.amount}`);

  return transactions.join('\n');
};

const csvData = generateCSV(10);
console.log("Posted Date\tReference Number\tPayee\tAddress\tAmount");
console.log(csvData);
