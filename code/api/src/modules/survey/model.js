'use strict';

//Style Survey
module.exports = (sequelize, DataTypes) => {
  let Survey = sequelize.define('surveys', {
    userId: {
      type: DataTypes.INTEGER
    },
    style: {
      type: DataTypes.STRING
    },
    tops: {
      type: DataTypes.STRING
    },
    bottoms: {
      type: DataTypes.STRING
    },
    dresses: {
      type: DataTypes.STRING
    },
    shoes: {
      type: DataTypes.STRING
    },
    accessories: {
      type: DataTypes.STRING
    }
  })

  Survey.associate = function(models) {
    Survey.belongsTo(models.User)
  }

  return Survey
};
