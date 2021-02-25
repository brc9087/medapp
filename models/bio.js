const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const bioSchema = new Schema({

  age: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  medhistory: {
    type: String,
    required: true
  },
  symptoms: {
    type: String,
    required: true
  },
});



const Bio = mongoose.model("Bio", bioSchema);

module.exports = Bio;