// This file sets up the sequelize schema for the users table of our database, Unless
// We add an attribute to User we will not need to change this file. - Ryan

'use strict'

// User
module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define('users', {
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.TEXT
    },
    password: {
      type: DataTypes.TEXT
    },
    role: {
      type: DataTypes.TEXT
    }
  })

  // This associates a hasMany subscriptions relationship to the User model. - Ryan
  User.associate = function(models) {
    User.hasMany(models.Subscription)
  }

  return User
}
