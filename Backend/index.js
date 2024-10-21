const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const mainRouter = require("./routes/index");

const app = express();
app.use(express.json());

app.use(cors());

const mongodbUrl = process.env.mongodbUrl;

const PORT = process.env.PORT || 3004;

app.use("/api/v1", cors(), mainRouter);
// console.log(mongodbUrl);
mongoose.connect(mongodbUrl).then(
  app.listen(PORT, () => {
    console.log(`MongoDb connected and server is running on ${PORT}`);
  })
);
