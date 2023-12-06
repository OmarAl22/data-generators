const faker = require('faker');

// Function to generate a random transaction
const generateRandomTransaction = (date) => {
  return {
    Date: date,
    Description: faker.lorem.words(),
    Amount: faker.datatype.number({ min: -100, max: 100, precision: 2 }),
    RunningBalance: 0, // Placeholder for running balance
    'Summary Amt.': 0, // Placeholder for Summary Amt.
  };
};

// Function to generate a random date in the format MM/DD/YYYY
const generateRandomDate = () => {
    const month = faker.datatype.number({ min: 1, max: 12 });
    const day = faker.datatype.number({ min: 1, max: 28 }); // Adjust max day as needed
    const year = 2022; // You can adjust the start year as needed
  
    // Use padStart to ensure MM and DD are two digits
    const formattedMonth = month.toString().padStart(2, '0');
    const formattedDay = day.toString().padStart(2, '0');
  
    return `${formattedMonth}/${formattedDay}/${year}`;
  };

// Function to generate a random bank account statement
const generateBankStatement = (transactionCount) => {
  let transactions = [];

  // Generate random transactions
  for (let i = 0; i < transactionCount; i++) {
    const date = generateRandomDate();
    const transaction = generateRandomTransaction(date);
    transactions.push(transaction);
  }

  // Sort transactions by date
  transactions.sort((a, b) => new Date(a.Date) - new Date(b.Date));

  // Calculate summary
  let beginningBalance = 2289.8; // You can set the starting balance
  let totalCredits = 0;
  let totalDebits = 0;

  for (const transaction of transactions) {
    transaction.RunningBalance = beginningBalance + transaction.Amount;

    // Set the Summary Amt. for each transaction
    transaction['Summary Amt.'] = transaction.RunningBalance.toFixed(2);

    beginningBalance = transaction.RunningBalance;

    if (transaction.Amount > 0) {
      totalCredits += transaction.Amount;
    } else {
      totalDebits += transaction.Amount;
    }
  }

  const endingBalance = beginningBalance;

  // Update the 'Description' for the initial balance transaction
  transactions[0].Description = 'Beginning balance as of ' + transactions[0].Date;

  // Add summary to transactions
  transactions.unshift({ Description: 'Beginning balance as of ' + transactions[0].Date, 'Summary Amt.': beginningBalance.toFixed(2) });
  transactions.push({ Description: 'Total credits', 'Summary Amt.': totalCredits.toFixed(2) });
  transactions.push({ Description: 'Total debits', 'Summary Amt.': totalDebits.toFixed(2) });
  transactions.push({ Description: 'Ending balance as of ' + transactions[transactions.length - 1].Date, 'Summary Amt.': endingBalance.toFixed(2) });

  // Add header for the statement
  const statementHeader = 'Date\tDescription\tAmount\tRunning Bal.';
  const summaryHeader = 'Description\t\tSummary Amt.';

// Print the summary
console.log('Description\t\tSummary Amt.');
console.log(`Beginning balance as of ${transactions[0].Date}\t\t${transactions[0]['Summary Amt.']}`);
console.log(`Total credits\t\t${totalCredits.toFixed(2)}`);
console.log(`Total debits\t\t${totalDebits.toFixed(2)}`);
console.log(`Ending balance as of ${transactions[transactions.length - 1].Date}\t\t${endingBalance.toFixed(2)}`);


 // Print the statement
 console.log('\n' + statementHeader);
 for (const transaction of transactions.slice(4)) {
   console.log(`${transaction.Date}\t${transaction.Description}\t${transaction.Amount}\t${transaction.RunningBalance}`);
 }
};

// Generate and print the bank statement
generateBankStatement(10); // You can adjust the transaction count