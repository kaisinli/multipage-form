const db = require('../db');
const {STRING, INTEGER} = require('sequelize');

const Education = db.define('educations', {
    school: {
        type: STRING,
        allowNull: false
    }
})

module.exports = Education;