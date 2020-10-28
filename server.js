const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
const mongoose = require("mongoose")

const PORT = process.env.PORT || 3000;

const databaseUrl = "workout";
const collections = ["test"];
const db = mongojs(databaseUrl, collections);

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", {
    useNewUrlParser: true,
    useFindAndModify: false
});

app.use(require("./routes/api.js"));


db.on("error", error => {
    console.log("Database Error:", error);
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});