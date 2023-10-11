const faker = require('faker');

const generateVitalSigns = (date) => {
  const vitalSigns = {
    heart_rate: faker.datatype.number({ min: 60, max: 120 }), // Heart rate in beats per minute
    breaths: faker.datatype.number({ min: 20, max: 60 }), // Breaths per minute
    temperature: faker.datatype.float({ min: 36.0, max: 40 }), // Temperature in Celsius
    blood_pressure: `${faker.datatype.number({ min: 90, max: 140 })}/${faker.datatype.number({ min: 60, max: 80 })}`, // Blood pressure in mmHg
    oxygen_saturation: faker.datatype.number({ min: 95, max: 100 }), // Oxygen saturation in percentage
    timestamp: date.toISOString() // Use provided date
  };

  return vitalSigns;
};

const generateDataForDays = (days) => {
  const records = [];
  let currentDate = new Date();

  for (let i = 0; i < days; i++) {
    records.push(generateVitalSigns(currentDate));
    currentDate.setDate(currentDate.getDate() - 1); // Move back one day
  }

  return records;
};

const vitalSignsData = generateDataForDays(10);
const json = JSON.stringify(vitalSignsData, null, 2);

console.log(json);
