// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
// import { SurveyType } from './types'
const SType = require('./types').SurveyType;
import { create } from './resolvers'

// Create
export const addSurvey = {
  type: SType,
  args: {
    userId: {
      name: 'userId',
      type: GraphQLInt
    },

    style: {
      name: 'style',
      type: GraphQLString
    },

  },
  resolve: create
}
