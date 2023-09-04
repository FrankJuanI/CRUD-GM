const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  titulo: { type: String, require: true }, // String is shorthand for {type: String}
  precio: { type: Number, require: true },
  descripcion: { type: String, require: true },
  cantidad: { type: Number, require: true },
  url: { type: String, require: true },
});

module.exports = mongoose.model("Product", productSchema);
