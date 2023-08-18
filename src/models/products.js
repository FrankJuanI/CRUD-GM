const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: { type: String, require: true }, // String is shorthand for {type: String}
  precio: { type: Number, require: true },
  description: { type: String, require: true },
  cantidad: { type: Number, require: true },
  url: { type: String, require: true },
});

module.export = mongoose.model("Product", productSchema);
