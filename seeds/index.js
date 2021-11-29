const sequelize = require("../config/connection");
const seedUser = require("./userData");
const seedPick = require("./pickData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedPick();

  process.exit(0);
};

seedAll();
