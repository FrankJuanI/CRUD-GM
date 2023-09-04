const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const productosRoutes = require("./routes/products");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(productosRoutes);

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
