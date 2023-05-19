const express = require("express");
require("dotenv").config();

//express app
const app = express();

//routes
app.get("/", (req, res) => {
  res.json({ mssg: "Welcom to the App" });
});

//listen for requests
app.listen(process.env.PORT, () => {
  console.log("Listening on port", process.env.PORT);
});
