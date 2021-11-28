// import models
const User = require("./User");
const Pick = require("./Pick");

// Users have many Picks
User.hasMany(Pick, {
  foreignKey: "user_email",
});

Pick.belongsTo(User, {
  foreignKey: "user_email",
});

module.exports = { User, Pick };
