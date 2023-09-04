const express = require("express");
const router = express.Router();
const productSchema = require("models/products");

router.get("/products", (req, res) => {
  productSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json);
});

router.get("/products/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  productSchema
    .findById(id)
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

router.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const { titulo, precio, descripcion, cantidad, url } = req.body;
  console.log(req.body);
  console.log(id);
  console.log(titulo, precio, descripcion, cantidad, url);
  productSchema
    .updateOne(
      { _id: id },
      {
        $set: {
          titulo,
          precio,
          descripcion,
          cantidad,
          url,
        },
      }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json);
});

router.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  productSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) =>
      res.json({ message: "Error al eliminar el producto", error })
    );
});

module.exports = router;
