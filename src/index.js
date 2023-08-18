const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const productosRoutes = require("./routes/products");
const app = express();
const port = process.env.PORT || 3000;

app.use(productosRoutes);
app.use(express.json());

// mongodb atlas conection
mongoose
  .connect(process.env.MONGO_URI)

  .then(() => {
    console.log("Database conected");
  })
  .catch((error) => {
    console.log(error);
  });

// init express server
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
