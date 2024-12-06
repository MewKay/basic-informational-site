const express = require("express");
const path = require("path");

const PORT = 8080;
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "./about.html"));
});

app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "./contact-me.html"));
});

//For unmatched routes
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "./404.html"));
});

app.listen(PORT);
