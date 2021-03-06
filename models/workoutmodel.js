const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    exercises: [{
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
            default: 0,
        },
        reps: {
            type: String,
        },
        sets: {
            type: String,
        }
    }],
    day: {
        type: Date,
        default: Date.now
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;