"use strict";

const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = require("./src/apis/server");

app.use("/server", server);

module.exports = app;
// 테스트
