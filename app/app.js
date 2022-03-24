"use strict";

const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = require("./src/apis/server");
const auth = require("./src/apis/auth");

app.use("/server", server);
app.use("/auth", auth);
app.use("/", (req, res) => {
  res.send("Hello World");
});

module.exports = app;
