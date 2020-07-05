// This file imports from both ./queries and ./mutations and forms a graphql schema
// to be exported to and used by setup/graphql.js. We will not need to change this
// file for the project. - Ryan

// Imports
import { GraphQLSchema } from 'graphql'

// App Imports
import query from './queries'
import mutation from './mutations'

// Schema
const schema = new GraphQLSchema({
  query,
  mutation
})

export default schema
