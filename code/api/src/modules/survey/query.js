// Imports
import { GraphQLInt } from 'graphql'

// App Imports
import SurveyType from './types'
import { getByUser } from './resolvers'

export const surveyByUser = {
  type: SurveyType,
  args: {
    userId: {
      name: 'userId',
      type: GraphQLInt
    }
  },
  resolve: getByUser
}
