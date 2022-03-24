"use strict";

const AuthStorage = require("./AuthStorage");

class Auth {
  constructor(req) {
    this.body = req.body;
  }

  async signUp() {
    const body = this.body;

    const signUp = await AuthStorage.signUp(body);

    return signUp;
  }
}

module.exports = Auth;
