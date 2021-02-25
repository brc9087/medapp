const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const newDxSchema = new Schema({

    name: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      treatment: {
        type: String,
        required: true
      },
      symptoms: {
        type: String,
        required: true
      },
    });
    



const Newdx = mongoose.model("Newdx", newDxSchema);

module.exports = Newdx;