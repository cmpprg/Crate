// This file, I believe, activates each models sequelize model schema imported from
// modules/<resource>/model by linking them with the sequelize database connection
// imported from ./database.js. If we add a new table for 'style survey' we will
// need to connect its model schema to the database here. - Ryan

// Imports
import Sequelize from 'sequelize' //<-- loads up Sequelize from node modules - Ryan

// App Imports
import databaseConnection from './database' //<-- imports the Sequelize database connection

const models = {
  User: databaseConnection.import('../modules/user/model'), //<-- connects User model
  Product: databaseConnection.import('../modules/product/model'), //<-- connects Product model
  Crate: databaseConnection.import('../modules/crate/model'), //<-- connects Crate model
  Subscription: databaseConnection.import('../modules/subscription/model') //<-- connects Subsctiption model
}

//This block sets up the relationships for sequelize models - Ryan
Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models)
  }
})

//I have no clue what this little part does. - Ryan
models.sequelize = databaseConnection
models.Sequelize = Sequelize

// exports models so we can import and manipulate elswhere in app. - Ryan
export default models
