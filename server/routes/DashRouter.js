const express = require("express");
const router = express.Router();

const getAllUsers = require("../controllers/GetAllUsers");
const getOneUser = require("../controllers/GetOneUser");
const AddMatch = require("../controllers/AddMatch");
const getMatchedUsers = require("../controllers/GetMatchedUsers");

// GET
router.route("/users").get(getAllUsers);
router.route("/user/:id").get(getOneUser);
router.route("/users/matches").get(getMatchedUsers);
// PUT
router.route("/user/addmatch").put(AddMatch);

module.exports = router;
