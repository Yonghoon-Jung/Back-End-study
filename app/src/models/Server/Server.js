"use strict";

const ServerStorage = require("./ServerStorage");

class Server {
  constructor(req) {
    this.params = req.params;
    this.body = req.body;
    this.query = req.query;
  }

  async serverAll() {
    return await ServerStorage.serverData();
  }
}

module.exports = Server;
