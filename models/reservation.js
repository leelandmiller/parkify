const mongoose = require("mongoose");
const deepPopulate = require('mongoose-deep-populate')(mongoose);


// Create a Schema class with mongoose
const Schema = mongoose.Schema;

// Create a NoteSchema with the Schema class
const ReservationSchema = new Schema({
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
    renter: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    created_at: {
        type: Date,
        deafult:Date.now()
    }
});


ReservationSchema.plugin(deepPopulate, {
  whitelist: [
    'spot',
    'spot.schedule'
  ]
});
// Make a Spot model with the SpotSchema
const Reservation = mongoose.model("Reservation", ReservationSchema);

// Export the Note model
module.exports = Reservation;