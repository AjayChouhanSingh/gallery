// contactModel.js

var mongoose = require("mongoose");

// Setup schema
var loginSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
  },

  PhoneNumber: {
    type: String,
    unique: true,
    required: true
  },
  Password: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});


// Export Contact model
var Contact = (module.exports = mongoose.model("contact", loginSchema));
