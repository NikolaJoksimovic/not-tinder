require("dotenv").config();
const { MongoClient } = require("mongodb");
const uri = process.env.MONGO_URI;

const getAllUsers = async (req, res) => {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("app-data");
    const users = db.collection("users");
    const returnedUsers = await users.find().toArray(); //OVDE mora da se pretvori u array!
    console.log(returnedUsers);
    res.send(returnedUsers);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

module.exports = getAllUsers;
