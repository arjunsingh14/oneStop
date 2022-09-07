const { Sequalize, DataTypes } = require("sequelize");

module.exports = (sequalize) => {
  const User = sequalize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.TEXT,
      },
      password: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequalize,
      timestamps: false,
    }
  );
  return User
};
