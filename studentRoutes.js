const express = require("express");
const router = express.Router();

const {
    getStudents,
    addStudent,
    getError
} = require("./studentController");

router.get("/", getStudents);

router.post("/", addStudent);

router.get("/error", getError);

module.exports = router;