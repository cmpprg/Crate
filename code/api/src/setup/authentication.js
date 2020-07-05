// This file takes care of user authentication when making requests, don't quite
// know how it is working, but I don't believe we will need to change it at all
// for this project. - Ryan

// Imports
import jwt from 'jsonwebtoken'
import serverConfig from '../config/server.json'

// Authentication middleware
export default function (request, response, next) {
  let authToken = request.headers.authorization

  if (authToken && authToken !== null) {
    try {
      const token = authToken.split(' ')
      request.user = jwt.verify(token[1], serverConfig.secret)
    } catch (e) {
      console.warn('Invalid token detected.')
    }
  } else {
    request.user = {}
  }

  next()
}
