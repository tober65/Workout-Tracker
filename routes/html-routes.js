const path = require("path");

const db = require("../models");

module.exports = function (app) {
    app.get("/exercise", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    app.get("/stats", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });

    // app.get("/exercise/:id", function (req, res) {
    //     db.Workout.findOne({_id : req.params.id}).then((dbResult) => {
    //         res.json(dbResult);
    //     });
        
    // });
}