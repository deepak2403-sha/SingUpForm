const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  phone: {
    type: Number,
    require: true,
    unique: true,
  },
  age: {
    type: Number,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  confirmpassword: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: new Date()
}
});

//

const Register = new mongoose.model("Register", userSchema);

module.exports = Register;
