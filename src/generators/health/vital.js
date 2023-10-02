const faker = require('faker');

const generateVitalSigns = () => {
  const vitalSigns = {
    heart_rate: faker.datatype.number({ min: 60, max: 120 }), // Heart rate in beats per minute
    breaths: faker.datatype.number({ min: 12, max: 30 }), // Breaths per minute
    temperature: faker.datatype.float({ min: 36.0, max: 40 }), // Temperature in Celsius
    blood_pressure: `${faker.datatype.number({ min: 90, max: 140 })}/${faker.datatype.number({ min: 60, max: 80 })}`, // Blood pressure in mmHg
    oxygen_saturation: faker.datatype.number({ min: 95, max: 100 }), // Oxygen saturation in percentage
    timestamp:  new Date().toISOString() // Current date and time in ISO format

    };

  return vitalSigns;
};

const vitalSignsData = generateVitalSigns();
const json = JSON.stringify(vitalSignsData, null, 2);

console.log(json);
