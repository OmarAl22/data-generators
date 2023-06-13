const faker = require('faker');

const generateData = () => {
  const data = {
    type: 'FeatureCollection',
    features: [
      {
        geometry: {
          type: 'point',
          coordinates: [
            parseFloat(faker.address.longitude()),
            parseFloat(faker.address.latitude()),
            0
          ]
        },
        properties: {
          scan_id: faker.datatype.uuid(),
          created_at: faker.date.recent().toISOString()
        }
      }
    ]
  };

  return data;
};

const jsonData = generateData();
const json = JSON.stringify(jsonData, null, 2);

console.log(json);
