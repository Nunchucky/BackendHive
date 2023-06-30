const express = require("express");
const connectToMongoDB = require("./config");
const MongoClient = require("mongodb").MongoClient;
const {Applicationrouter} = require('./routes/applicant.route')
const cors = require("cors")

const app = express();
app.use(cors())
app.use(express.json())
// Connect to MongoDB
connectToMongoDB();

app.get("/", (_req, res) => {
    res.send("hi")
})

app.use(Applicationrouter)
// Add your routes and other server logic here

// Start the server
app.listen(3030)