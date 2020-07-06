// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'


// User type, defines a graphql type to be returned with all the possible attributes
// of that type

const UserType = new GraphQLObjectType({
  name: 'user',
  description: 'User type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    role: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})
// Need to add in style_survey as a GraphQLInt


// User Login type, establising what fields a logged in user has.
const UserLoginType = new GraphQLObjectType({
  name: 'userAuth',
  description: 'User Authentication Type',

  fields: () => ({
    user: { type: UserType },
    token: { type: GraphQLString }
  })
})

// User Gender type, defines a user gender type

const UserGenderType = new GraphQLObjectType({
  name: 'userGender',
  description: 'User Gender Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString }
  })
})

export { UserType, UserLoginType, UserGenderType }
