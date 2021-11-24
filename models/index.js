// import models
const User = require("./User");
const Pick = require("./Pick");

// Users have many Picks
User.hasMany(Pick, {
  foreignKey: "user_email",
});

module.exports = {
  Pick,
  User,
};
