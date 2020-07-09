// App Imports
import Login from '../../modules/user/Login'
import Signup from '../../modules/user/Signup'
import Profile from '../../modules/user/Profile'
import Subscriptions from '../../modules/user/Subscriptions'
import StyleSurvey from '../../modules/user/styleSurvey'

// User routes
export default {
  login: {
    path: '/user/login',
    component: Login
  },

  signup: {
    path: '/user/signup',
    component: Signup
  },

  profile: {
    path: '/user/profile',
    component: Profile,
    auth: true
  },

//we will need to check if user has a style survey if yes then we will route them to Subscriptions
//if no then we will route them to new path where style survey will live
  subscriptions: {
    path: '/user/subscriptions',
    component: Subscriptions,
    auth: true
  },
  
  survey: {
    path: '/user/styleSurvey',
    component: StyleSurvey,
    auth: true
  }
}
