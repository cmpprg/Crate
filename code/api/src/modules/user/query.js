// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

// App Imports
import { UserType, UserLoginType, UserGenderType } from './types'
import { getAll, getById, login, getGenders } from './resolvers'

// Querys are essentially the same as get's. Each query has a name with an
// expected incoming format and then calls to the appropriate resolver. 
// All, returns all users
export const users = {
  type: new GraphQLList(UserType),
  resolve: getAll
}

// By ID, accessing a user just by id
export const user = {
  type: UserType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: getById
}
// Should be able to access users, style_survey, style just from the getById resolver

// Auth, logging a user in with email and password, calls on the login resolve
export const userLogin = {
  type: UserLoginType,
  args: {
    email: {
      name: 'email',
      type: GraphQLString
    },

    password: {
      name: 'password',
      type: GraphQLString
    },

    role: {
      name: 'role',
      type: GraphQLString
    }
  },
  resolve: login
}

// Genders, returns a user gender type object, calling on the getGenders resolver
export const userGenders = {
  type: new GraphQLList(UserGenderType),
  resolve: getGenders
}
