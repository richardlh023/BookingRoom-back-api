const Sequelize = require("sequelize");

// Create a new instance of Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

// Synchronize the model with the database
sequelize
  .sync()
  .then(() => {
    console.log("Table created successfully");
  })
  .catch((error) => {
    console.error("Unable to create table:", error);
  });

// Export the sequelize instance and model
module.exports = { sequelize };
