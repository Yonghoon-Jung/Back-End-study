"use strict";
const mysql = require("../../config/mysql");

class ServerStorage {
  static async serverData() {
    const query = `SELECT * FROM servers;`;

    return await mysql.query(query);
  }
}

module.exports = ServerStorage;
