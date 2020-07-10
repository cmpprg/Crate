// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// App Imports
// import { UserType } from '../user/types'
const UType = require('../user/types').UserType;

// Survey type
const SurveyType = new GraphQLObjectType({
  name: 'survey',
  description: 'Survey Type',

  fields: () => ({
    id: { type: GraphQLInt },
    user: { type: UType },
    style: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export { SurveyType }
