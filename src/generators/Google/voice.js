const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const faker = require('faker');

const dom = new JSDOM(`<!DOCTYPE html><html><head></head><body></body></html>`);
const document = dom.window.document;

// Generate a random number of call logs between 1 and 10
const numCallLogs = Math.floor(Math.random() * 10) + 1;

// Create a div for each call log
for (let i = 0; i < numCallLogs; i++) {
  const div = document.createElement('div');
  div.classList.add('call-log');

  // Generate a random date and time for the call log
  
  const date = faker.date.recent();
// Get the abbreviated month name
const monthAbbr = date.toLocaleString('default', { month: 'short' });

// Format the date in the desired format
const formattedDate = `${date.getDate()} ${monthAbbr} ${date.getFullYear()}, ${date.toLocaleTimeString('en-US')} Pacific Time`;


  // Generate fake data for the call log
  let message, label;
  const type = faker.random.arrayElement(['Voicemail', 'Placed call to', 'Missed call from']);
  if (type === 'Voicemail') {
    const name = faker.name.firstName();
    const company = faker.company.companyName();
    const callbackNumber = faker.phone.phoneNumberFormat();
    message = `${formattedDate}: Hi, this is ${name} calling from ${company}. I'm calling because I saw your resume online and I think you might be a good fit for a position we have available. Please call me back at ${callbackNumber} when you have a chance. Thank you.`;
    label = 'Voicemail';
  } else if (type === 'Placed call to') {
    const number = faker.phone.phoneNumber();
    message = `(${faker.random.number({min: 1, max: 10})}:${faker.random.number({min: 0, max: 59})})`;
    label = 'Placed';
  } else {
    const name = faker.name.firstName();
    message = `${formattedDate}: Hi ${name}, sorry I missed your call. Can you give me a call back when you have a chance? Thanks!`;
    label = 'Missed';
  }

  // Create a text node with the message
  const text = document.createTextNode(message);

  // Set the text node as the content of the div
  div.appendChild(text);

  // Create a label element with the label text
  const labelElement = document.createElement('label');
  const labelText = document.createTextNode(label);
  labelElement.appendChild(labelText);

  // Add a class to the label for styling purposes
  labelElement.classList.add('call-log-label');

  // Append the label to the div
  div.appendChild(labelElement);

  // Add the div to the document body
  document.body.appendChild(div);
}

// Print the HTML page
console.log(dom.serialize());