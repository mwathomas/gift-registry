const { User } = require("../models");

const userdata = [
  {
    email: "madeline@gmail.com",
    password: "password12345",
  },
  {
    email: "joe@gmail.com",
    password: "hello",
  },
  {
    email: "amiko2k20@aol.com",
    password: "password12345",
  },
  {
    email: "jordan99@msn.com",
    password: "password12345",
  },
  {
    email: "the_blake@yahoo.com",
    password: "password12345",
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
