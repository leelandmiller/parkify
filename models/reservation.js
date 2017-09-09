const mongoose = require("mongoose");

// Create a Schema class with mongoose
const Schema = mongoose.Schema;

// Create a NoteSchema with the Schema class
const ReservationSchema = new Schema({
    spot: {
        type: Schema.Type.ObjectId,
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
        type: Schema.Types.objectId,
        required: true,
        ref: "User"
    }
});

// Make a Spot model with the SpotSchema
const Reservation = mongoose.model("Reservation", ReservationSchema);

// Export the Note model
module.exports = Reservation;