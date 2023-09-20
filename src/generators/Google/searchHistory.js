const faker = require('faker');
faker.locale = 'en'; // Set locale to English

// Define an array of search queries
const searchQueries = [
  "How to grow tomatoes in containers",
  "Best sci-fi movies of all time",
  "Symptoms of gluten intolerance in children",
  "How to grow tomatoes in containers",
  "Best sci-fi movies of all time",
  "Symptoms of gluten intolerance in children",
  "Comparison of noise-cancelling headphones",
  "Step-by-step guide to painting a sunset",
  "Effective time management techniques for students",
  "Healthy breakfast recipes for weight loss",
  "Tips for reducing plastic waste at home",
  "Review of the latest iPhone camera features",
  "How to meditate for stress relief",
  "DIY home organization hacks",
  "Best travel destinations for solo female travelers",
  "Signs of a healthy romantic relationship",
  "Top 10 books on mindfulness and self-care",
  "Beginner's guide to learning a new language",
  "Natural remedies for a sore throat",
  "Comparison of streaming services for movies",
  "Effective ways to improve posture",
  "Tips for starting a successful small business",
  "How to make homemade ice cream without a machine",
  "Best online courses for digital marketing",
  "Symptoms and treatment of seasonal affective disorder",
  "Review of the latest video game releases",
  "How to do yoga for flexibility and relaxation",
  "DIY tips for home improvement projects",
  "Healthy lunch ideas for work",
  "Tips for organizing a cluttered closet",
  "Guide to choosing the right pet for your family",
  "Signs of a healthy work environment",
  "Top 10 classic novels everyone should read",
  "Beginner's guide to investing in the stock market",
  "Natural remedies for anxiety and panic attacks",
  "Comparison of electric vs. gas lawn mowers",
  "Effective ways to boost your immune system",
  "Tips for creating a stunning flower garden",
  "How to start a successful blog",
  "Best exercises for building core strength",
  "Symptoms and treatment of common allergies",
  "Review of the latest makeup products",
  "How to do home workouts without equipment",
  "DIY ideas for upcycling old furniture",
  "Healthy dinner recipes for the whole family",
  "Tips for saving money on home energy bills",
  "Guide to adopting a rescue pet",
  "Signs of a healthy parent-child relationship",
  "Top 10 classic movies for film buffs",
  "Beginner's guide to photography techniques",
  "Natural remedies for headache relief",
  "Comparison of popular streaming music services",
  "Effective ways to improve your sleep quality",
];


const visitedPages = [
    "https://example.com/page1",
    "https://example.com/page2",
    "https://example.com/page3",
    // ... Add more visited pages here
  ];
  
  
  
  const generateSearchHistory = (numSearches) => {
    const searchHistory = [];
  
    for (let i = 0; i < numSearches; i++) {
      const isSearch = faker.datatype.boolean(); // Randomly choose between search and visited
      const value = isSearch ? `searched ${faker.random.arrayElement(searchQueries)}` : `visited ${faker.random.arrayElement(visitedPages)}`;
      const timestamp = `${faker.date.recent().toLocaleDateString()}, ${faker.date.recent().toLocaleTimeString()} GMT${-new Date().getTimezoneOffset() / 60}:00`;
  
      searchHistory.push({ value, timestamp });
    }
  
    return searchHistory;
  };
  
  const numSearches = 5; // You can change this to generate a different number of searches
  const searchHistory = generateSearchHistory(numSearches);
  const json = JSON.stringify(searchHistory, null, 2);
  
  console.log(json);