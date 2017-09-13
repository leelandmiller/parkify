const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    ph_num: {
        type: String,
        // required: true
    },
    pw_hash: {
        type: String,
    },
    current_reservation: [
        {
    		type: Schema.Types.ObjectId,
    		ref: 'Reservation'
        }
    ],
    current_rented_spot: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Spot'
        }
    ],
    uuid: {
        type: String,
    },
    provider: {
        type: String,
    },
    passport_id: {
        type: String
    },
    total_spent: {
        type: Number
    },
    total_earned: {
        type: Number
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
