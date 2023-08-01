var faker = require('faker');

function generateUberPaymentData() {
  const dateCreated = formatDate(faker.date.past().toISOString());
  const dateUpdated = formatDate(faker.date.past().toISOString());
  const bankName = faker.random.arrayElement([
    "Bank of America - Consumer Credit",
    "Apple Pay Visa",
  ]);
  const billingCountry = "US";
  const paymentMethodType = faker.random.arrayElement([
    "Visa",
    "stored_value",
    "apple_pay_display",
  ]);

  return {
    "Date Created": dateCreated,
    "Date Updated": dateUpdated,
    "Bank/Issuer Name": bankName,
    "Billing Country": billingCountry,
    "Payment Method Type": paymentMethodType,
  };
}

function formatDate(a) {
  return a.replace("T", " ").substring(0, a.length - 5) + " +0000 UTC";
}

function generateCSVRow(data) {
  return Object.values(data).join("\t");
}

function generateCSV(numRows) {
  const header = "Date Created\tDate Updated\tBank/Issuer Name\tBilling Country\tPayment Method Type";
  console.log(header);

  for (let i = 0; i < numRows; i++) {
    const uberPaymentData = generateUberPaymentData();
    const csvRow = generateCSVRow(uberPaymentData);
    console.log(csvRow);
  }
}

generateCSV(5);
