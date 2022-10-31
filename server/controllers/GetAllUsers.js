require("dotenv").config();
const { MongoClient } = require("mongodb");

const getAllUsers = async (req, res) => {
  const client = new MongoClient(process.env.MONGO_URI);

  try {
    await client.connect();
    const db = client.db("app-data");
    const users = db.collection("users");
    const returnedUsers = await users.find().toArray(); //OVDE mora da se pretvori u array!
    res.status(200).json({ returnedUsers });
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

module.exports = getAllUsers;
