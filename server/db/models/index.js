const User = require('./users');
const Location= require('./locations');
const Education= require('./educations');

// associations
User.belongsTo(Location);

//This will add methods getUsers, setUsers, addUser,addUsers to Education, and getEducations, setEducations, addProject, and addEducations to User.
Education.belongsToMany(User, {through: 'students'});
User.belongsToMany(Education, {through: 'students'});

module.exports = {
  User,
  Location,
  Education
}
