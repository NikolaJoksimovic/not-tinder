require("dotenv").config();
const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const CustomAPIError = require("../errors/CustomAPIError");

const createUser = async (req, res) => {
  // generate unique id
  const generatedUserId = uuidv4();
  const { email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const client = new MongoClient(process.env.MONGO_URI);

  try {
    await client.connect();
    const database = client.db("app-data");
    const users = database.collection("users");
    const userExists = await users.findOne({ email });
    if (userExists) {
      return res.status(409).json({
        email: `${email}`,
        msg: "User with this email alredy exists.",
      });
    }
    const data = {
      user_id: generatedUserId,
      email: email,
      password: hashedPassword,
    };
    try {
      await users.insertOne(data);
    } catch (error) {
      throw new CustomAPIError(
        "Server is unavelable right now... Please try again later."
      );
    }
    const token = jwt.sign({ generatedUserId, email }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_TIMELIMIT,
    });
    res
      .status(201)
      .json({ user: { userId: generatedUserId, email: email }, token: token });
  } catch (error) {
  } finally {
    await client.close();
  }
};

module.exports = createUser;
