const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: String, require: true },
  name: { type: String, require: true },
  lastname: { type: String, require: true },
  password: { type: String, require: true },
});

module.export = mongoose.model("userSchema", userSchema);
