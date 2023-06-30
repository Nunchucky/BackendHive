const Application = require("../models/applicant.model.js")

const createApplication = async (req, res) => {
    const { email, fullName, gender, birthday, address, phone, highSchool, gradDate, essay } = req.body;
    const applicant = {  email, fullName, gender, birthday, address, phone, highSchool, gradDate, essay }
    const result = await new Application(applicant).save();
    res.send(result)
};

const getApplication = async (_req, res) => {
    const idk = await Application.find({})
    res.send(idk)
}


module.exports = { createApplication, getApplication }
