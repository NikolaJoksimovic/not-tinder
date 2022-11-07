const express = require("express");
const router = express.Router();

const updateUser = require("../controllers/UpdateUser");
const getUserMessages = require("../controllers/GetUserMessages");

// GET
router.route("/messages").get(getUserMessages);

// PUT
router.route("/user").put(updateUser);

module.exports = router;
