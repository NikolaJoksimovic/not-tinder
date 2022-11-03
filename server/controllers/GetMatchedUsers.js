require("dotenv").config();
const { MongoClient } = require("mongodb");

const GetMatchedUsers = async (req, res) => {
  const client = new MongoClient(process.env.MONGO_URI);
  const userIds = JSON.parse(req.query.userIds);

  try {
    await client.connect();
    const database = client.db("app-data");
    const users = database.collection("users");

    const pipeline = [
      {
        $match: {
          user_id: {
            $in: userIds,
          },
        },
      },
    ];

    const foundUsers = await users.aggregate(pipeline).toArray();

    res.status(201).send(foundUsers);
  } catch (error) {
    console.log(error);
  }
};

module.exports = GetMatchedUsers;
