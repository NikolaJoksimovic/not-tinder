require("dotenv").config();
const express = require("express");
const app = express();
const myRouter = require("./routes/Router");
const cors = require("cors");

app.use(cors());
app.use(express.json());

// routes
app.use("/", myRouter);
app.use("/signup", myRouter);
app.use("/users", myRouter);

const port = process.env.PORT || 8000;

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server running on port: ${port}`);
    });
  } catch (error) {}
};

start();
