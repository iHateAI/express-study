'use strict';

class UserStorage {
  static #users = {
    id: ['hhs', 'sss', 'kkk'],
    psword: ['1234', '333', '111'],
    name: ['하하', '호호', '히히'],
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

module.exports = UserStorage;
