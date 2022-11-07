require("dotenv").config();
require("async-error-handler");
const express = require("express");
const cors = require("cors");

const app = express();
const myRouter = require("./routes/Router");

app.use(cors());
app.use(express.json());
app.use(express.static("./public/build"));

// routes
app.use("/", myRouter);
// app.use("/signup", myRouter);
// app.use("/login", myRouter);
// app.use("/user", myRouter);
// app.use("/user/addmatch", myRouter);
// app.use("/users", myRouter);
// app.use("/users/matches", myRouter);
// app.use("/messages", myRouter);

const port = process.env.PORT || 8000;

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server running on port: ${port}`);
    });
  } catch (error) {}
};

start();
