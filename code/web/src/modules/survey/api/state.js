// Imports

// App Imports
import {
   ADD_STYLE,
   SET_STYLE,
} from './actions'

// Style Survey

// Initial State
export const surveyInitialState = {
    userId: null,
    tops: '',
    bottoms: '',
    dresses: '',
    shoes: '',
    accessories: '',
}

export const userStyle = {
    userStyle: null
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

export function survey(state = userStyle, action) {
    
    switch (action.type) {
        case 'SET_STYLE':
        return {
            userStyle: action.style
        };

        default:
        return state;
    }
}
