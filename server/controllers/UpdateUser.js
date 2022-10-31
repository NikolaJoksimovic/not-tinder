require("dotenv").config();
const { MongoClient } = require("mongodb");

const UpdateUser = async (req, res) => {
  const client = new MongoClient(process.env.MONGO_URI);
  try {
    await client.connect();
    const database = client.db("app-data");
    const users = database.collection("users");
    const formData = req.body.formData;
    const query = { user_id: formData.user_id };
    const updateDocument = {
      $set: {
        first_name: formData.first_name,
        dob_day: formData.dob_day,
        dob_month: formData.dob_month,
        dob_year: formData.dob_year,
        show_gender: formData.show_gender,
        gender_identity: formData.gender_identity,
        gender_interest: formData.gender_interest,
        url: formData.url,
        about: formData.about,
        matches: formData.matches,
      },
    };

    const updatedUser = await users.updateOne(query, updateDocument);
    res.status(201).json({ ...updatedUser });
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};
module.exports = UpdateUser;
