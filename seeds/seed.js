const sequelize = require("../config/connection");
const { User, Pick } = require("../models");

const userData = require("./userData.json");
const pickData = require("./pickData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Pick.bulkCreate(pickData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
