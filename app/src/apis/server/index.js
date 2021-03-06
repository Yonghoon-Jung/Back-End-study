"use strict";

const express = require("express");
const serverCtrl = require("./server.Ctrl");

const router = express.Router();

router.get("/", serverCtrl.process.all);

module.exports = router;
