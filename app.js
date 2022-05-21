const dotenv = require("dotenv");
const express = require("express");

const envFile = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : ".env";
dotenv.config({ path: envFile });

const env = process.env.NODE_ENV;

const configExpress = require("./config/express");
const connectDB = require("./config/database");

const routes = require("./routes");

const app = express();

if (env !== "test") {
  connectDB();
}

configExpress(app);
routes(app);
module.exports = app;
