/*
-require dependencies
-connect with mongoose
-setup express app
-add middleware to express: static, body parsing, loggin with morgan
-api routes
-deploy
-create a readme
*/

const express = require("express");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

const app = express();

app.get("*", (req, res) => {
    res.send("<h1>Hello</h1>");
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));