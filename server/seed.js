const mongoose = require('mongoose');
const Post = require('./src/model/post.Model');


mongoose.connect('mongodb://127.0.0.1:27017/infiniteScroll')
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));


const users = ["Rahul", "Aman", "Priya", "Neha", "Arjun", "Simran", "Karan"];
const titles = [
  "How I learned Node.js in 30 days",
  "MongoDB tips you should know",
  "My coding journey 🚀",
  "Best VS Code extensions",
  "Frontend vs Backend - which is better?",
  "React vs Angular comparison",
  "Top 10 JavaScript tricks"
];
const descriptions = [
  "Today I learned about Node.js and Express.js.",
  "MongoDB aggregation pipeline is very powerful.",
  "My coding journey wasn’t easy, but it was worth it.",
  "Coding feels incomplete without VS Code.",
  "Both frontend and backend have their own importance.",
  "React is fast, but Angular is more structured.",
  "Some hidden JavaScript tricks you should know."
];
const tagsList = [
  ["nodejs", "backend"],
  ["mongodb", "database"],
  ["javascript", "coding"],
  ["react", "frontend"],
  ["webdev", "programming"]
];


const generatePosts = () => {
  const posts = [];

  for (let i = 0; i < 500; i++) {
    posts.push({
      userName: users[Math.floor(Math.random() * users.length)],
      title: titles[Math.floor(Math.random() * titles.length)],
      description: descriptions[Math.floor(Math.random() * descriptions.length)],
      tags: tagsList[Math.floor(Math.random() * tagsList.length)]
    });
  }

  return posts;
};


const seedPosts = async () => {
  try {
    await Post.deleteMany(); 

    const posts = generatePosts();

    await Post.insertMany(posts);

    console.log(" 500 Realistic Feed Posts Inserted");
    process.exit();

  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seedPosts();