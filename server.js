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
const morgan = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(morgan("dev"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.get("*", (req, res) => {
    res.send("<h1>Hello</h1>");
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));