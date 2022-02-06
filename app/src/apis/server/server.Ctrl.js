"use strict";

const Server = require("../../models/Server/Server");

const process = {
  all: async (req, res) => {
    const server = new Server(req);
    const response = await server.serverAll();
  },
};

module.exports = { process };
