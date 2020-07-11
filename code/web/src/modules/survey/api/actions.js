// Imports
// import axios from 'axios'


// App Imports
import { routeApi } from '../../../setup/routes'

// Actions Types
export const ADD_STYLE = 'ADD_STYLE';

// Actions

export function addStyle(category, style) {
    return {
      type: 'ADD_STYLE',
      category,
      style
    }
  }