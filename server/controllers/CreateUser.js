require("dotenv").config();
const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");
const uri = process.env.MOGNO_URI;
const createUser = async (res, req) => {
  const client = new MongoClient(uri);
  const { user } = req.body;
  const generatedUserId = uuidv4();
  const hashedpassword = await bcrypt.hash(passowrd, 10);
  // TO BE CONTINUED..
};

module.exports = createUser;
