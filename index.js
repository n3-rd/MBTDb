const express = require("express");
const app = express();
const fs = require("fs");

const database = fs.readFileSync("db.json");
const db = JSON.parse(database);
console.log(db);

app.get("/", (req, res) => {
    res.send(db);
});

app.get("/ping", (req, res) => {
    res.sendStatus(200);
})


app.listen(3000, () => {
    console.log("Server running on port 3000");
});