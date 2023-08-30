const express = require("express");
const router = express.Router();
const productSchema = require("../models/products");

router.get("/products", (req, res) => {
  const { id } = req.params;
  productSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json);
});

router.post("/products", (req, res) => {
  console.log(req.body);
  const product = new productSchema(req.body); // Crear una nueva instancia del modelo
  product
    .save()
    .then((data) => {
      res.json({ message: "Producto guardado exitosamente", data }); // Enviar una respuesta JSON
    })
    .catch((error) => {
      res.status(500).json({ message: "Error al guardar el producto", error });
    });
});

// router.post("/products", (req, res) => {
//   console.log(req);
//   res.send(req);
//   const product = productSchema(req.body);
//   product
//     .save()
//     .then((data) => res.json(data))
//     .catch((error) => res.json({ message: error }));
// });

router.put("/products/:id", (req, res) => {
  res.send("Product actualize");
});

router.delete("/items/:id", (req, res) => {
  res.send("Product delete");
});
module.exports = router;
