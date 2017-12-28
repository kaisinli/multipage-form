const db = require('../db');
const {STRING} = require('sequelize');

const User = db.define('users', {
  firstName: {
    type: STRING,
    allowNull: false
  },
  lastName: {
    type: STRING,
    allowNull: false
  },
  email: {
    type: STRING,
    unique: true,
    allowNull: false
  },
  phone: STRING,
  website: STRING
})

module.exports = User;