// Imports
import axios from "axios";
import { query, mutation } from "gql-query-builder";


// App Imports
import { routeApi } from '../../../setup/routes'

// Actions Types
export const ADD_STYLE = 'ADD_STYLE';
export const SET_STYLE = 'SET_STYLE';

// Actions

export function addStyle(category, style) {
    return {
      type: 'ADD_STYLE',
      category,
      style
    }
  }


  export function determineStyle(surveyData) {     
    return dispatch => {
      return axios.post(routeApi, mutation({

        operation: 'surveyCreate',
        variables: surveyData,
        fields: ['style']
      }))
      .then((response) => {
				if (response.status === 200) {
                    const style = response.data.data.surveyCreate.style                
					dispatch({
						type: SET_STYLE,
						style,
					});
				} else {
					console.log("error");
				}
			});
  }
}
