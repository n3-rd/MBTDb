import express from "express";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 3000;
const database = fs.readFileSync("./json/db.json");
const db = JSON.parse(database);

app.get("/", (req, res) => {
  res.send(db);
});

app.get("/ping", (req, res) => {
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log("Server running on port 3000");
});
