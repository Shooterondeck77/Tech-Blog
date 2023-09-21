const { User } = require('../models');

const userData = [
  {
    username: "Timothy",
    email: "tim@icloud.com",
    password: "password1234"
  },
  {
    username: "Peter",
    email: "peter@gmail.com",
    password: "password1234"
  },
  {
    username: "Kevin",
    email: "kev1780@gmail.com",
    password: "password1234"
  },
  {
    username: "Lily",
    email: "Lillobeu@gmail.com",
    password: "password1234"
  },
  {
    username: "sunflower",
    email: "sunflower@gmail.com",
    password: "password1234"
  }
];

const seedUsers = () => User.bulkCreate(userData);


module.exports = seedUsers;