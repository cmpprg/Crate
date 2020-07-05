'use strict'
// This file set up our user model, attributes and relationship to be created
// User
// Need to add in style_survey_id with DataTypes.INTEGER as an attribute

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
// Establishing database relationships
  User.associate = function(models) {
    User.hasMany(models.Subscription)
  }

// Need to add in User.hasOne(models.StyleSurvey)

  return User
}

//
