require("dotenv").config();
const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  const generatedUserId = uuidv4();
  const { email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  if (!hashedPassword) {
    console.log("Something wrong with hashedPassword..");
  }

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

    // const sanitizedEmail = email.toLowerCase();

    const data = {
      user_id: generatedUserId,
      email: email,
      password: hashedPassword,
    };

    const insertedUser = await users.insertOne(data);
    const token = jwt.sign({ generatedUserId, email }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_TIMELIMIT,
    });
    res.status(201).json({ user: { ...insertedUser }, token: token });
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong with creating the user..");
  }
};

module.exports = createUser;
