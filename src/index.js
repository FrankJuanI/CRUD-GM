const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (err, res) => {
  res.send("TABLITAS");
});

mongoose
  .connect(process.env.MONGO_URI)

  .then(() => {
    console.log("Database conected");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
