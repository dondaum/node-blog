'use strict';

const bcrypt = require("bcrypt");


module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    admin: DataTypes.BOOLEAN
  }, {});
  Users.associate = function(models) {
    // associations can be defined here
  };
  return Users;
};
