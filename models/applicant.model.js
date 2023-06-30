const mongoose = require("mongoose")

const ApplicantsSchema = new mongoose.Schema({
    email: String,
    fullName: String,
    gender: String,
    birthday: String,
    address: String,
    phone: String,
    highSchool: String,
    gradDate: String,
    essay: String,
})

const Application = mongoose.model("Application", ApplicantsSchema)
module.exports = Application
