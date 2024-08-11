const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/Moneytracker");
var db = mongoose.connection;
db.on("error", () => {
  console.log("error is connecting database");
});
db.once("open", () => {
  console.log(" connecting  to database");
});
app.post("/add", (req, res) => {
  var category_sel = req.body.category_sel;
  var amount_inp = req.body.amount_inp;
  var info_inp = req.body.info_inp;
  var date_inp = req.body.date_inp;

  var data = {
    Category: category_sel,
    Amount: amount_inp,
    Info: info_inp,
    Date: date_inp,
  };
  db.collection("users").insertOne(data, (err, collection) => {
    if (err) {
      throw err;
    }
    console.log("record insert successfully");
  });
});
app
  .get("/", (req, res) => {
    res.set({
      "allow-access-allow-": "*",
    });
    return res.redirect("index.html");
  })
  .listen(3000);

console.log("listening on port 3000");
