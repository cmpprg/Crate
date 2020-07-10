// Imports
import { GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import SurveyType from './types'
import { getByUser } from './resolvers'

// Survey by user
export const surveyByUser = {
  type: SurveyType,
  args: {
    userId: { type: GraphQLInt}
  },
  resolve: getByUser
}
