// Imports
import { GraphQLInt, GraphQLString } from 'graphql'

// App Imports
import SurveyType from './types'
import { create } from './resolvers'

// Create Survey
export const surveyCreate = {
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
    tops: {
      name: 'tops',
      type: GraphQLString
    },
    bottoms: {
      name: 'bottoms',
      type: GraphQLString
    },
    dresses: {
      name: 'dresses',
      type: GraphQLString
    },
    shoes: {
      name: 'shoes',
      type: GraphQLString
    },
    accessories: {
      name: 'accessories',
      type: GraphQLString
    }
  },
  resolve: create
}
