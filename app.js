//requiring third party library
const express = require("express");
const http = require("http");
const morgan = require("morgan");
const cors = require("cors");
//importing the custom module
const userRoutes = require("./routes/userRoutes");

//configuring express
const app = express();

//logging the node_env into the console
console.log(process.env.NODE_ENV);
//loging the request
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//reading the body of json data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cross origin resource sharing (CORS) middleware configuration
app.use(
  cors({
    origin: "*",
    method: "POST",
    allowedHeaders: "Content-Type",
    exposedHeaders: "Content-Range",
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

//route configuration
app.use("/api/v1/user", userRoutes);

//exporting configured express app module
module.exports = app;
