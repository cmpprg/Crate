// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { UserType } from '../user/types'

// Survey type
const SurveyType = new GraphQLObjectType({
  name: 'survey',
  description: 'Survey type',

  fields: () => ({
    id: { type: GraphQLInt },
    user: { type: UserType },
    style: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export default SurveyType
