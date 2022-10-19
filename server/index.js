require("dotenv").config();
const express = require("express");
const app = express(); // Ovo nam daje dosta metoda OOP ;)
const myRouter = require("./routes/Router");
const connectDB = require("./db/ConnectDB");

app.use(express.json());
app.use("/", myRouter);
app.use("/signup", myRouter);
app.use("/users", myRouter);

const port = process.env.PORT || 8000;
// ne treba trenutno async ali videcemo za kasnije...
const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server running on port: ${port}`);
    });
  } catch (error) {}
};

start();
