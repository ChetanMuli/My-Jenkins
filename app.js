const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Checking 🚀");
});

app.listen(3000, () => {
  console.log("Running on Ubuntu at port 3000");
});
