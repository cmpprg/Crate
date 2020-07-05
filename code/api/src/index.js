// This is the main file from which everything else runs!! - Ryan

// Imports
import express from 'express'

// App Imports
import setupLoadModules from './setup/load-modules'
import setupGraphQL from './setup/graphql'
import setupUpload from './setup/upload'
import setupStartServer from './setup/start-server'

// Create express server
const server = express()

// Setup load modules
setupLoadModules(server) //we don't need to mess with this, unless we add other node modules - Ryan

// Setup uploads
setupUpload(server) //I don't think we nee to mess with this - Ryan

// Setup GraphQL
setupGraphQL(server) //<------THIS IS WHERE WE WILL LIVE ON THIS PROJECT, I SUSPECT! - Ryan

// Start server
setupStartServer(server) //just starts a server nothing more. - Ryan
