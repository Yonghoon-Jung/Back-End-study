"use strict";

const express = require("express");
const authCtrl = require("./auth.Ctrl");

const router = express.Router();

router.post("/signup", authCtrl.process.signUp);

module.exports = router;
