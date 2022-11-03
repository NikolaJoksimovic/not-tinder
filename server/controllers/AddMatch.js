require("dotenv").config();
const { MongoClient } = require("mongodb");

const AddMatch = async (req, res) => {
  const client = new MongoClient(process.env.MONGO_URI);
  const { userId, matchedUserId } = req.body;
  try {
    await client.connect();
    const database = client.db("app-data");
    const users = database.collection("users");
    const updatedDoc = await users.updateOne(
      { user_id: userId },
      { $push: { matches: { user_id: matchedUserId } } }
    );

    res.status(201).json(updatedDoc);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

module.exports = AddMatch;
