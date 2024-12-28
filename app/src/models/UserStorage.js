"use strict";

class UesrStorage {
  static #users = {
    id: ["aaa"],
    pw: ["1111"],
    name: ["sjkim"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UesrStorage;
