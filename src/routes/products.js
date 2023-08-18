const express = require("express");
const router = express.Router();
const productSchema = require("../models/products");

router.get("/products", (req, res) => {
  res.send("Productos get");
});

router.post("/products", (req, res) => {
  res.send(req);
  const product = productSchema(req.body);
  product
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.put("/products/:id", (req, res) => {
  res.send("Product actualize");
});

router.delete("/items/:id", (req, res) => {
  res.send("Product delete");
});
module.exports = router;
