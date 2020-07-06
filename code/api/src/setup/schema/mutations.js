// Imports
import { GraphQLObjectType } from 'graphql'

// App Imports
import * as user from '../../modules/user/mutations'
import * as product from '../../modules/product/mutations'
import * as crate from '../../modules/crate/mutations'
import * as subscription from '../../modules/subscription/mutations'
// need to import in style_surveys as well

// Mutation, creating a way for our graphql database to be updated/posted to.
 // makes these fields accesible for mutation when we create our graphql schema
 // in index.js

const mutation = new GraphQLObjectType({
  name: 'mutations',
  description: 'API Mutations [Create, Update, Delete]',

  fields: {
    ...user,
    ...product,
    ...crate,
    ...subscription
  }
})

// Need to add in style_survey as a field

export default mutation