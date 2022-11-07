const express = require("express");
const router = express.Router();

const getHomePage = require("../controllers/GetHomePage");
const createUser = require("../controllers/CreateUser");
const loginUser = require("../controllers/LoginUser");

// POST
router.route("/").get(getHomePage);
router.route("/signup").post(createUser);
router.route("/login").post(loginUser);

module.exports = router;
