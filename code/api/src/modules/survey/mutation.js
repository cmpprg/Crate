// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { SurveyType } from './types'
import { create } from './resolvers'

// Create
export const addSurvey = {
  type: SurveyType,
  args: {
    userId: {
      name: 'name',
      type: GraphQLInt
    },

    style: {
      name: 'style',
      type: GraphQLString
    },

  },
  resolve: create
}
