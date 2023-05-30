const faker = require('faker');
const fs = require('fs');

// Set start date and time
const startDate = new Date(2023, 4, 1, 0, 0, 0);

// Set end date and time
const endDate = new Date(2023, 4, 30, 23, 59, 59);

// Generate data for each sensor for the whole month
const temperatureData = [];
const humidityData = [];
const lightData = [];
const accelerationData = [];

for (let currentDate = startDate; currentDate <= endDate; currentDate.setDate(currentDate.getDate() + 1)) {
  // Generate data for each sensor for each day
  for (let i = 0; i < 24; i++) {
    // Generate temperature data
    const temperature = parseFloat(faker.fake('{{random.number({"min": 18, "max": 26, "precision": 0.1})}}'));
    temperatureData.push([currentDate.getTime() + (i * 3600 * 1000), temperature]);

    // Generate humidity data
    const humidity = parseFloat(faker.fake('{{random.number({"min": 40, "max": 60, "precision": 0.1})}}'));
    humidityData.push([currentDate.getTime() + (i * 3600 * 1000), humidity]);

    // Generate light data
    const light = parseFloat(faker.fake('{{random.number({"min": 200, "max": 800, "precision": 0.1})}}'));
    lightData.push([currentDate.getTime() + (i * 3600 * 1000), light]);

    // Generate acceleration data
    const accelerationX = parseFloat(faker.fake('{{random.number({"min": -2, "max": 2, "precision": 0.1})}}'));
    const accelerationY = parseFloat(faker.fake('{{random.number({"min": -2, "max": 2, "precision": 0.1})}}'));
    const accelerationZ = parseFloat(faker.fake('{{random.number({"min": -2, "max": 2, "precision": 0.1})}}'));
    const accelerationMagnitude = Math.sqrt(Math.pow(accelerationX, 2) + Math.pow(accelerationY, 2) + Math.pow(accelerationZ, 2));
    accelerationData.push([currentDate.getTime() + (i * 3600 * 1000), [accelerationX, accelerationY, accelerationZ, accelerationMagnitude]]);
  }
}

// Group data for each sensor for the whole month
const data = [
  {
    sensor_id: 0,
    data: temperatureData,
  },
  {
    sensor_id: 4,
    data: humidityData,
  },
  {
    sensor_id: 5,
    data: lightData,
  },
  {
    sensor_id: 3,
    data: accelerationData,
  },
];


// Write the data to a JSON file
var json = JSON.stringify(data);
console.log(json);
 