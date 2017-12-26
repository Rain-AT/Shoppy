/*
 * ItemList reducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  FETCH_DATA_SUCCESS,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  productList: [],
});

function itemListReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:    	
      return state
        .set('productList', action.payload);

    default:
      return state;
  }
}

export default itemListReducer;
