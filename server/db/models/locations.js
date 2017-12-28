const db = require('../db');
const {STRING, ENUM} = require('sequelize');

const Location = db.define('locations', {
    city: {
        type: STRING,
        allowNull: false
    },
    state: STRING,
    country: {
        type: STRING,
        allowNull: false
    },
})

module.exports = Location;