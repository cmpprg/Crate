// App Imports
import Home from '../../modules/pages/Home'
import Men from '../../modules/pages/Men'
import Women from '../../modules/pages/Women'
import HowItWorks from '../../modules/pages/HowItWorks'
import WhatsNew from '../../modules/pages/WhatsNew'


//if we make a style survey button in the header we will need to add a route for that here,
//if we don't get to that we will not have to change anything here 
// Home routes
export default {
  home: {
    path: '/',
    component: Home,
    exact: true
  },

  men: {
    path: '/men',
    component: Men
  },

  women: {
    path: '/women',
    component: Women
  },

  howItWorks: {
    path: '/how-it-works',
    component: HowItWorks
  },

  whatsNew: {
    path: '/whats-new',
    component: WhatsNew
  }
}
