// userObj = {
//   name:"userName",
//   email:"Email",
//   phNum:"18001234567",
//   pw_hash: "asdasdasdasdasd",
//   current_rented_spot:"spotObj",
//   posted_spots:["populate-spot-id"],
//   uuid: "uuid",
//   total_spent: 0,
//   total_earned:0
// }

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
        required: true
    },
    pw_hash: {
        type: String,
        required: true
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
    facebookId: {
        type: String,
    },
    googleId: {
        type: String
    },
    total_spent: {
        type: Number
    },
    total_earned: {
        type: Number
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
