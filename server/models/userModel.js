import { sequelize } from "../utils/db.js";
import { DataTypes, Model } from "sequelize";


//declare user model for login/registration using sequalize ORM models
class User extends Model {}
User.init(
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
    sequelize,
    timestamps: false,
    modelName: "user",
  }
);

export default User;
