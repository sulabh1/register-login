//requiring dotenv and configuring it
const dotenv = require("dotenv").config();

//custom module
const { sequelize } = require("./models");
const app = require("./app");

//Defining Port
const port = 8000 || process.env.PORT;

//Creating server and listening to it
app.listen(port, () => {
  sequelize.authenticate().then(() => {
    console.log("db connected");
  });
  console.log(`Listening to the port ${port}`);
});
