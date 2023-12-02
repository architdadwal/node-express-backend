console.log("newapp");
require("dotenv").config();
const express = require("express");
const app = express();

const port = 4000;

app.get("/", (req, res) => {
  res.send("hey!! catch me baby");
});

app.get("/insta", (req, res) => {
  res.send("hey dekh insat khul gya hai");
});

app.get("/facebook", (req, res) => {
  res.send("<h1>hii facebookwalsaaaaaa</h1>");
});
app.listen(process.env.PORT, () => {
  console.log("app is listening on", { port });
});
