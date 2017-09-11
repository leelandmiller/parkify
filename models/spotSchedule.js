const mongoose = require("mongoose");

// Create a Schema class with mongoose
const Schema = mongoose.Schema;

// Create a NoteSchema with the Schema class
const SpotScheduleSchema = new Schema({
    spot:{
        type: Schema.Types.ObjectId,
        required: true,
        ref:"Spot"
    },
    open_times: {
        type: [{
            day: {
                type: String,
            },
            all_day: {
                type: Boolean,
                default: true
            },
            start: {
                type: String
            },
            end: {
                type: String
            }
        }]
    },
    end_dates: {
        end: {
            type: Date
        },
        blackout_days: {
            type: [{
                start: {
                    type: Date
                },
                end: {
                    type: Date
                }
            }]
        }
    }
});

// Make a Spot model with the SpotSchema
const SpotSchedule = mongoose.model("SpotSchedule", SpotScheduleSchema);

// Export the Note model
module.exports = SpotSchedule;