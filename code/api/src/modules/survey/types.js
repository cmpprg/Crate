// Imports
import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql'

// App Imports
import { UserType } from '../user/types'

const SurveyType = new GraphQLObjectType({
  name: 'survey',
  description: 'Survey Type',

  fields: () => ({
    id: { type: GraphQLInt },
    user: { type: UserType },
    style: { type: GraphQLString },
    tops: { type: GraphQLString },
    bottoms: { type: GraphQLString },
    dresses: { type: GraphQLString },
    shoes: { type: GraphQLString },
    accessories: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export default SurveyType
