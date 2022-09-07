const express = require('express')
require("dotenv").config();
//Sequalize is an object relational mapper (ORM) that converts Postgres to JSON
const {
  Sequelize,
  Model,
  DataTypes,
}  = require("sequelize");



const app = express();
app.use(express.json());

//connecting to database
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

//models


//implementing types (typescript)
class User extends Model{}
  

//model initializization
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
      type: DataTypes.TEXT,

    },
    password: {
      type: DataTypes.TEXT
    }
  },
  {
    sequelize,
    modelName: "user",
  }
);



app.get("/api/v1/user", async (_req, res) => {
  const allUsers = await User.findAll()
  res.json({ allUsers });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
