"use strict";

const Auth = require("../../models/auth/Auth");

const process = {
  signUp: async (req, res) => {
    const auth = new Auth(req);
    const response = await auth.signUp();

    return res.json(response);
  },
};

module.exports = { process };
