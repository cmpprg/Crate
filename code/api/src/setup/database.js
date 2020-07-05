// This file sets up the connects the database to our app using Sequelize as the ORM.
// No need to change this file for our project - Ryan

// Imports
import { Sequelize } from 'sequelize'

// App Imports
import { NODE_ENV } from '../config/env'
import databaseConfig from '../config/database.json'

// Load database config
const databaseConfigEnv = databaseConfig[NODE_ENV]

// Create new database connection
const connection = new Sequelize(databaseConfigEnv.database, databaseConfigEnv.username, databaseConfigEnv.password, {
  host: databaseConfigEnv.host,
  dialect: databaseConfigEnv.dialect,
  logging: false
})

// Test connection
console.info('SETUP - Connecting database...')

connection
  .authenticate()
  .then(() => {
    console.info('INFO - Database connected.')
  })
  .catch(err => {
    console.error('ERROR - Unable to connect to the database:', err)
  })

export default connection
