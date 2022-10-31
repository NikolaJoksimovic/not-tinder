const express = require("express");
const router = express.Router();

const getHomePage = require("../controllers/GetHomePage");
const createUser = require("../controllers/CreateUser");
const getAllUsers = require("../controllers/GetAllUsers");
const LoginUser = require("../controllers/LoginUser");
const UpdateUser = require("../controllers/UpdateUser");

router.route("/").get(getHomePage);
router.route("/users").get(getAllUsers);
router.route("/signup").post(createUser);
router.route("/login").post(LoginUser);
router.route("/user").put(UpdateUser);

module.exports = router;
