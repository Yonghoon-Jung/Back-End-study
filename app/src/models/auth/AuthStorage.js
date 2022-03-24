"use strict";
const mysql = require("../../config/mysql");

class AuthStorage {
  static async signUp(body) {
    try {
      const { id, password, name } = body;
      const query = `INSERT INTO users(id, password, name) 
                  VALUES (?, ?, ?);`;

      const signUp = await mysql.query(query, [id, password, name]);

      if (!signUp[0].affectedRows) {
        throw { success: false };
      }

      return { success: true };
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = AuthStorage;
