require("dotenv").config();
const express = require("express");
const path = require("path");

// global variables
const port = process.env.PORT || 5000;
const staticDir = path.resolve("./client/public");
const app = express();


app.get("/*", (req, res) => {
    res.sendFile(staticDir + "/index.html");
  });


app.listen(port, () => {
    console.log("server is running");
  });