const express = require("express");
const app = express();

app.get("/", (req, res) => {

  res.send("AUTO DEPLOY IS WORKING 🔥");
  res.send("Checking 🚀");
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Running on port 3000");
});

