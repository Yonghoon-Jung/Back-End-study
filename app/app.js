"use strict";

const express = require("express");
const dotenv = require("dotenv");
const app = express();
const path = require("path");
const http = require("http");
const server = http.createServer(app);
const socketIO = require("socket.io");
const io = socketIO(server);
const moment = require("moment");
dotenv.config();

app.use(express.static(path.join(__dirname, "src")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

io.on("connection", (socket) => {
  socket.on("chatting", (data) => {
    console.log(data);
    io.emit("chatting", data);
  });
});

server.listen(3000, () => {
  console.log("서버온");
});

const ser = require("./src/apis/server");
const auth = require("./src/apis/auth");

app.use("/server", ser);
app.use("/auth", auth);
app.use("/", (req, res) => {
  res.send("Hello World");
});

// module.exports = app;
