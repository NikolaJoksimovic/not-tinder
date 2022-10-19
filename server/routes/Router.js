const express = require("express");
const router = express.Router();

const getHomePage = require("../controllers/GetHomePage");
const createUser = require("../controllers/CreateUser");
const getAllUsers = require("../controllers/GetAllUsers");

router.route("/").get(getHomePage);
router.route("/signup").post(createUser);
router.route("/users").get(getAllUsers);

module.exports = router;
