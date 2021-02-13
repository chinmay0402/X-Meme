const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const memeSchema = new Schema({ // create a model for "meme" using the Schema contructor
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    }
},);

// mongoose.model(name_of_model, name_of_schema_for_model)
const Meme = mongoose.model("Meme", memeSchema);

module.exports = Meme;