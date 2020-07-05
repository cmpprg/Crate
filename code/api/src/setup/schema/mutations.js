// This file aggregates graphql mutations for all resources. We will need to add
// to this file if we add a table in the database only if we plan on changing rescords
// through graphql. Exports out to ./index.js - Ryan

// Imports
import { GraphQLObjectType } from 'graphql'

// App Imports
import * as user from '../../modules/user/mutations'
import * as product from '../../modules/product/mutations'
import * as crate from '../../modules/crate/mutations'
import * as subscription from '../../modules/subscription/mutations'

// Mutation
const mutation = new GraphQLObjectType({
  name: 'mutations',
  description: 'API Mutations [Create, Update, Delete]',

  // spreads defined mutation types and resolvers into the fields option of the
  // GraphQLObjectType. - Ryan
  fields: {
    ...user,
    ...product,
    ...crate,
    ...subscription
  }
})

export default mutation
