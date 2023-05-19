const mongoose = require("mongoose");

const usermodel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const model = mongoose.model("userdata", usermodel);
// const model2 = mongoose.model("wishlist", wishlist);
module.exports = { model };
