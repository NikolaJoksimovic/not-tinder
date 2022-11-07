require("dotenv").config();
require("async-error-handler");
const express = require("express");
const cors = require("cors");

const app = express();
const mainRouter = require("./routes/Router");
const dashRouter = require("./routes/DashRouter");
const onboardRouter = require("./routes/OnboardRouter");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(cors());
app.use(express.json());
app.use(express.static("./public/build"));

// routes
app.use("/", mainRouter);
app.use("/dashboard", dashRouter);
app.use("/onboarding", onboardRouter);

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 8000;

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server running on port: ${port}`);
    });
  } catch (error) {}
};

start();
