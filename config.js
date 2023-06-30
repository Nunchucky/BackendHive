const mongoose = require("mongoose");
const MongoClient = require("mongodb").MongoClient;

// Replace <mongodb-uri> with your MongoDB connection string
const MONGODB_URI = "mongodb+srv://ztuushii:Chuckyplayz0424@cluster0.ocgwv3j.mongodb.net/?retryWrites=true&w=majority";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    throw error;
  }
};

module.exports = connectToMongoDB;