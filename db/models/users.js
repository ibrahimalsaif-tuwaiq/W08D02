const mongoose = require("mongoose");

// Users Schema
const usersSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "roles",
  },
});

const usersModel = mongoose.model("users", usersSchema);

module.exports = usersModel;
