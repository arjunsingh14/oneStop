const express = require("express");
require("dotenv").config();
//Sequalize is an object relational mapper (ORM) that converts Postgres to JSON
const { Sequelize, Model, DataTypes } = require("sequelize");

const app = express();
app.use(express.json());

//connecting to database
// eslint-disable-next-line no-undef
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

//models


class User extends Model {}

//model initializization
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
    modelName: "user",
    timestamps: false
  }
);

app.get("/api/v1/user", async (req, res) => {
  const allUsers = await User.findAll();
  res.json({ allUsers });
});

app.post("/api/v1/user", async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    console.log(error)
  }
 
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
