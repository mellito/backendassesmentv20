const mongooseConnect = require("mongoose");

const URI = process.env.MONGO_DB_URI;

async function connectDB() {
  try {
    await mongooseConnect.connect(URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

module.exports = connectDB;
