const faker = require('faker');

// Function to generate a random date in 'YYYY-MM-DD' format
const generateRandomDate = () => {
  const year = faker.datatype.number({ min: 2020, max: 2023 });
  const month = faker.datatype.number({ min: 1, max: 12 }).toString().padStart(2, '0');
  const day = faker.datatype.number({ min: 1, max: 28 }).toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// Function to generate a random targeting type
const generateRandomTargetingType = () => {
  const targetingTypes = [
    "KEYWORD",
    "APPTYPE",
    "GENDER",
    "LOCATION",
    "PLACEMENT",
    "COUNTRY",
    "TARGETED_INTEREST",
    "PINNER_INTEREST",
    "AUDIENCE_INCLUDE",
    "GEO",
    "AGE_BUCKET",
    "REGION",
  ];
  return faker.random.arrayElement(targetingTypes);
};

// Function to generate the JSON data
const generateJsonData = () => {
  const jsonData = {
    data: [],
  };

  // Generate data for 15 records
  for (let i = 0; i < 15; i++) {
    const record = {
      targeting_type: generateRandomTargetingType(),
      targeting_value: faker.random.word(),
      metrics: {
        AD_GROUP_ID: faker.datatype.number({ min: 2680000000000, max: 2690000000000 }),
        DATE: generateRandomDate(),
        SPEND_IN_DOLLAR: faker.datatype.number({ min: 100, max: 1000 }),
      },
    };
    jsonData.data.push(record);
  }

  return jsonData;
};

// Generate JSON data
const jsonData = generateJsonData();

// Convert JSON data to a string
const jsonString = JSON.stringify(jsonData, null, 2);

// Print the JSON data
console.log(jsonString);

 
