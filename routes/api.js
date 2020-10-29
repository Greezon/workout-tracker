const router = require("express").Router();
const db = require("./models/workoutmodel.js")
    // prototyping model

router.post("/api/workouts", ({ body }, res) => {
    db.create(body)
        .then(dbWorkout => {
            console.log(dbWorkout, "post route successful")
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts", (req, res) => {
    db.find({})
        .sort({ date: -1 })
        .then(dbWorkout => {
            console.log("Get route, and successfully got this route", dbWorkout)
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts/range", (req, res) => {
    db.find({}).limit(14)
        .sort({ date: -1 })
        .then(dbWorkout => {
            console.log("Get route, and successfully got this route", dbWorkout)
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put("/api/workouts/:id", (req, res) => {
    db.findByIdAndUpdate(req.perams.id, { $push: { exercises: req.body } }, { new: true })
        .then(dbWorkout => {
            console.log("put route, successful", dbWorkout)
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router