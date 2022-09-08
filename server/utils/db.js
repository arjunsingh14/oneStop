import { Sequelize } from "sequelize";
import { DATABASE_URL } from "./config.js";
//connect db 
const sequelize = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
}); 

process.setMaxListeners(0);

const connectToDb = async () => {
  try {
    await sequelize.authenticate()
    console.log('connected to database')
  } catch (error) {
    console.log(`error: ${error}`)
  }
}

export {connectToDb, sequelize}





