// Imports

// App Imports
import {
   ADD_STYLE,
} from './actions'

// Style Survey

// Initial State
export const surveyInitialState = {
userId: null,
tops: '',
bottoms: '',
dresses: '',
shoes: '',
accessories: ''
// isCompleted: false,
}

// State
export function styles(state = surveyInitialState, action) {
switch (action.type) {
    case 'ADD_STYLE':
    return {
        ...state,
        [action.category]: action.style
    };
    default:
    return state;
}
}
