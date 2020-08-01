// Requiring our models
var db = require("../models");

module.exports = function(app) {
  app.get("/api/workouts", function(req, res) {
    db.Workout.find({}).then((dbWorkouts) => {
        res.json(dbWorkouts);
    });
  });
}