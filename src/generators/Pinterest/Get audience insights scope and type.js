const faker = require('faker');

const generateAudienceInsights = () => {
  const audienceInsights = {
    items: [
      {
        date: faker.date.past().toISOString().split('T')[0], // Generate a random past date
        scope: faker.random.arrayElement(["PARTNER", "BRAND", "AGENCY"]), // Randomly select scope
        type: faker.random.arrayElement(["IMPRESSION_PLUS_ENGAGEMENT", "IMPRESSION_ONLY", "ENGAGEMENT_ONLY"]) // Randomly select type
      }
    ]
  };

  return audienceInsights;
};

const audienceInsightsData = generateAudienceInsights();
const json = JSON.stringify(audienceInsightsData, null, 2);

console.log(json);
