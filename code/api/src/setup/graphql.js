// This file sets up GraphQL endpoint, it imports configuration settings, schema,
// and authentication from other files and exports itself to index.js.
// We won't need to change anything in this file - Ryan

// Imports
import graphqlHTTP from 'express-graphql' //<-- this is needed to set up graphql endpoint. - Ryan

// App Imports
import serverConfig from '../config/server.json'
import authentication from './authentication'
import schema from './schema'

// Setup GraphQL
export default function (server) {
  console.info('SETUP - GraphQL...')

  server.use(authentication) // <-- Authentication, We don't need to worry about this!! - Ryan

  // API (GraphQL on route `/`)
  server.use(serverConfig.graphql.endpoint, graphqlHTTP(request => ({
    schema, //<-- Sets schema for graphql - Ryan
    graphiql: serverConfig.graphql.ide, // <-- Ensures the graphiql can be accessed through endpoint. - Ryan
    pretty: serverConfig.graphql.pretty,// <-- pretty print json response - Ryan
    context: {
      auth: {
        user: request.user,
        isAuthenticated: request.user && request.user.id > 0
      }
    }
  })))
}
