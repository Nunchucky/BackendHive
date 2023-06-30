const express = require("express")
const { getApplication, createApplication } = require("../controllers/applicant.controller.js");

const router = express.Router();

router
    .post("/add", createApplication)
    .get("/get", getApplication)

exports.Applicationrouter = router;
