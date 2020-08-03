// Requiring our models
const db = require("../models");
const mongojs = require("mongojs");

module.exports = function (app) {
    app.get("/api/workouts", function (req, res) {
        db.Workout.find({}).sort({day: 1}).then((dbWorkouts) => {
            res.json(dbWorkouts.map(w => w.toObject({virtuals: true})));
        });
    });

    app.get("/api/workouts/range", function (req, res) {
        db.Workout.find({}).then((dbWorkouts) => {
            res.json(dbWorkouts);
        });
    });

    app.post("/api/workouts", function (req, res) {
        db.Workout.create(req.body).then((dbResults) => {
            res.json(dbResults);
        });
    });

    app.put("/api/workouts/:id", function (req, res) {
        console.log(req.body);
        console.log(req.params.id);
        db.Workout.findOne({ _id: mongojs.ObjectId(req.params.id) }, (err, workout) => {
            const newWorkout = [...workout.exercises, req.body];
            db.Workout.updateOne({ _id: mongojs.ObjectId(req.params.id) }, { day: Date.now(), exercises: newWorkout }).then((dbResults) => {
                console.log(dbResults);
                res.json(dbResults);
            });
        });
    });
}