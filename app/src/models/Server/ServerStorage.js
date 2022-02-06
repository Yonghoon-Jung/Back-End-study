"use strict";
const mysql = require("../../config/mysql");

class ServerStorage {
  static async serverData() {
    const query = `select * from servers;`;
    return await mysql.query(query);
  }
}
