const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VehicleSchema = new Schema({
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    license_plate: {
        type: String,
        required: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
});

const Vehicle = mongoose.model('Vehicle', VehicleSchema);

module.exports = Vehicle;
