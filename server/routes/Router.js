const express = require("express");
const router = express.Router();

const getHomePage = require("../controllers/GetHomePage");
const createUser = require("../controllers/CreateUser");
const getAllUsers = require("../controllers/GetAllUsers");
const loginUser = require("../controllers/LoginUser");
const updateUser = require("../controllers/UpdateUser");
const getOneUser = require("../controllers/GetOneUser");
const AddMatch = require("../controllers/AddMatch");
const getMatchedUsers = require("../controllers/GetMatchedUsers");
const getUserMessages = require("../controllers/GetUserMessages");

// POST
router.route("/signup").post(createUser);
router.route("/login").post(loginUser);
// GET
router.route("/").get(getHomePage);
router.route("/users").get(getAllUsers);
router.route("/user/:id").get(getOneUser);
router.route("/users/matches").get(getMatchedUsers);
router.route("/messages").get(getUserMessages);
// PUT
router.route("/user").put(updateUser);
router.route("/user/addmatch").put(AddMatch);

module.exports = router;
