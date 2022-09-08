import { sequelize } from "../utils/db.js";
import { DataTypes, Model } from "sequelize";
import bcrypt from "bcrypt"

//declare user model for login/registration using sequalize ORM models
class User extends Model {
}
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
    hooks: {
      beforeCreate: async (user) => {
        if (user.password){
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(user.password, salt)
        }
      }
    }
  }
);

export default User;
