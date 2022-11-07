require("dotenv").config();
const { MongoClient } = require("mongodb");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const CustomAPIError = require("../errors/CustomAPIError");

const LoginUser = async (req, res) => {
  const { email, password } = req.body;
  const client = new MongoClient(process.env.MONGO_URI);
  try {
    await client.connect();
    const database = client.db("app-data");
    const users = database.collection("users");
    const user = await users.findOne({ email });
    const potentialPassword = bcrypt.compare(password, user.password);

    if (user && potentialPassword) {
      const userId = user.user_id;
      const token = jwt.sign({ userId, email }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_TIMELIMIT,
      });
      res.status(201).json({ user: { email: email, userId: userId }, token });
    } else {
    }
  } catch (error) {
    throw new CustomAPIError(
      "Server is unavelable right now... Please try again later."
    );
  } finally {
    await client.close();
  }
};

module.exports = LoginUser;
