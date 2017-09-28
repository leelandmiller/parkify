const mongoose = require("mongoose");
const deepPopulate = require('mongoose-deep-populate')(mongoose);


// Create a Schema class with mongoose
const Schema = mongoose.Schema;

// Create a NoteSchema with the Schema class
const QrCodesSchema = new Schema({
    spot: {
        type: Schema.Types.ObjectId,
        required: true,
        ref:"Spot"
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    vehicle:{
        type:Schema.Types.ObjectId,
        required:true,
        ref: 'Vehicle'
    },
    token:{
        type:String,
        required:true
    }
});


QrCodesSchema.plugin(deepPopulate, {
  whitelist: [
    'spot',
    'spot.schedule'
  ]
});
// Make a Spot model with the SpotSchema
const QrCodes = mongoose.model("QrCodes", QrCodesSchema);

// Export the Note model
module.exports = QrCodes;