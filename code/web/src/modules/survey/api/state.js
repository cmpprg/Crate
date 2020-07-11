// Imports

// App Imports
import {
   ADD_STYLE,
} from './actions'
  
// Style Survey

// Initial State
export const surveyInitialState = {
tops: '',
bottoms: '',
dresses: '',
shoes: '',
accessories: '',
isCompleted: false,
}

// State
export function styles(state = surveyInitialState, action) {
switch (action.type) {
    case 'ADD_STYLE':
        console.log('fuck', action);
    return {
        ...state,
        [action.category]: action.style
    };
    default:
    return state;
}
}
