const faker = require('faker');

const generateWatchedVideo = () => {
  const title = faker.lorem.sentence();
  const channel = faker.internet.userName();
  const date = faker.date.recent();
  
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const formattedDate = `${String(date.getDate()).padStart(2, '0')} ${months[date.getMonth()]} ${date.getFullYear()}, ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')} GMT${date.getTimezoneOffset() > 0 ? '-' : '+'}${String(Math.floor(Math.abs(date.getTimezoneOffset()) / 60)).padStart(2, '0')}:00`;

  return {
    Title: title,
    Channel: channel,
    Date: formattedDate,
  };
};

const watchedHistory = [];

for (let i = 0; i < 10; i++) {
  watchedHistory.push(generateWatchedVideo());
}

const json = JSON.stringify(watchedHistory, null, 2);

console.log(json);
