'use strict'

// Survey
module.exports = function(sequelize, DataTypes) {
  let Survey = sequelize.define('surveys', {
    userId: {
      type: DataTypes.INTEGER
    },
    style: {
      type: DataTypes.string
    }
  })
}

Survey.associate = function(models) {
  Survey.belongsTo(models.User)
}

return Survey
}
