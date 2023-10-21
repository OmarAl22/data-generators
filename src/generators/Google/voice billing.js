const faker = require('faker');

const generateBillingRecord = () => {
  const dateTime = faker.date.recent();
  const formattedDate = dateTime.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short',
    timeZone: 'America/Los_Angeles', // Pacific Time
  });

  const type = faker.random.arrayElement(['Port number into Google Voice', 'Purchase credit', 'Call charges']);
  const callInfo = '';
  const money = (Math.floor(Math.random() * 100) + 1) + '.00'; // Assuming dollars
  const callingCredit = type === 'Purchase credit' ? money : '';
  const balance = type === 'Call charges' ? money : '';

  return [formattedDate, type, callInfo, money, callingCredit, balance];
};

const generateCSV = (numRecords) => {
  const records = [];
  records.push(['Date/Time', 'Type', 'Call Info', 'Money', 'Calling credit', 'Balance']);

  for (let i = 0; i < numRecords; i++) {
    records.push(generateBillingRecord());
  }

  return records.map(row => row.join('\t')).join('\n');
};

const csvData = generateCSV(10);

console.log(csvData);
