require("dotenv").config();
const { MongoClient } = require("mongodb");

const GetUserMessages = async (req, res) => {
  const client = new MongoClient(process.env.MONGO_URI);
  try {
    await client.connect();
    const database = client.db("app-data");
    const messages = database.collection("messages");

    const foundMessages = await messages
      .find({
        from_userId: req.query.userId,
        to_userId: req.query.matchedUserId,
      })
      .toArray();
    res.status(201).send(foundMessages);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

module.exports = GetUserMessages;
