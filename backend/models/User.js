// TEMP in-memory user store (later DB)
const users = [];

class User {
  constructor({ name, email, password }) {
    this.id = Date.now();
    this.name = name;
    this.email = email;
    this.password = password;
  }

  static findOne({ email }) {
    return users.find((u) => u.email === email);
  }

  save() {
    users.push(this);
    return this;
  }
}

module.exports = User;
