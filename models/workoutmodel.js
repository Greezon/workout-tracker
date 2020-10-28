const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    duration: {
        type: Number
    },
    distance: {
        type: String,
    },
    weight: {
        type: String,
    },
    reps: {
        type: String,
    },
    sets: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;