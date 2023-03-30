const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const faker = require('faker');

const dom = new JSDOM(`<!DOCTYPE html><html><head></head><body></body></html>`);
const document = dom.window.document;

// Format the current date and time as "DD MMM YYYY, HH:mm:ss Pacific Time"
 
const date = faker.date.recent();
// Get the abbreviated month name
const monthAbbr = date.toLocaleString('default', { month: 'short' });

// Format the date in the desired format
const formattedDate = `${date.getDate()} ${monthAbbr} ${date.getFullYear()}, ${date.toLocaleTimeString('en-US')} Pacific Time`;


// Generate fake data for the ad message using faker
const website = faker.internet.domainName();
const dateTime = faker.date.between('2023-02-01', '2023-02-07').toLocaleString('en-US', {
  timeZone: 'America/Los_Angeles'
});
const products = faker.commerce.productName();
const adSource = faker.random.arrayElement(['Google Ads', 'Facebook Ads', 'Instagram Ads']);

const message = `Visited ${website}
${formattedDate}
Products: ${products}
Details: From ${adSource}
Why is this here? This activity was saved to your Google Account because the following settings were on: Web & App Activity. You can control these settings here.`;

// Create a div element
const div = document.createElement('div');

// Create a text node with the message
const text = document.createTextNode(message);

// Set the text node as the content of the div
div.appendChild(text);

// Add a class to the div for styling purposes
div.classList.add('inbox-message');

// Create a label element with the "Ads" label
const label = document.createElement('label');
const labelText = document.createTextNode('Ads');
label.appendChild(labelText);

// Add a class to the label for styling purposes
label.classList.add('inbox-label');

// Append the label to the div
div.appendChild(label);

// Add the div to the document body
document.body.appendChild(div);

// Print the HTML page
console.log(dom.serialize());
