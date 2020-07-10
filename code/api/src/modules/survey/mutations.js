// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
// import { SurveyType } from './types'
// const SType = require('./types').SurveyType;
import { SurveyType } from './types'
import { create } from './resolvers'

// Create
export const addSurvey = {
  type: SurveyType,
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
