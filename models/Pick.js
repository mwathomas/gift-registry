const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Pick extends Model {}

Pick.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.INTEGER,
    },
    url: {
      type: DataTypes.STRING,
      Validate: {
        is: true,
      },
    },
    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      references: {
        model: "user",
        key: "email",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "pick",
  }
);

module.exports = Pick;
