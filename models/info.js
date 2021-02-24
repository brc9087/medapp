const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const infoSchema = new Schema({

  age: {
    type: Number,
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



const Info = mongoose.model("Info", infoSchema);

module.exports = Info;