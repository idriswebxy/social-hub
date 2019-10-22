const mongoose = require("mongoose");
const config = require("config");
require("dotenv").config();
const db = config.get("MONGODB_URI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log("MongoDB Connected!");
  } 
  catch (err) {
    console.error(err.message);

    process.exit(1);
  }
};

module.exports = connectDB;
