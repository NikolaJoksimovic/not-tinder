require("dotenv").config();
const { MongoClient } = require("mongodb");

const GetOneUser = async (req, res) => {
  const client = new MongoClient(process.env.MONGO_URI);
  const userId = req.params.id;
  try {
    await client.connect();
    const database = client.db("app-data");
    const users = database.collection("users");
    const user = await users.findOne({ user_id: userId });

    res.status(201).json({ ...user });
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};
module.exports = GetOneUser;
