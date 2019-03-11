import { LOADING, ERROR, SUCCESS } from "../actions";


const initialState = {
  characters: [],
  error: null,
  isFetching: false
  // Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state,  isFetching: true };
    
    case SUCCESS:
      return { ...state, isFetching: false, characters: action.payload, error: '' };

    case ERROR: 
      return { ...state, isFetching: false, characters: [], error: action.payload }

    default: 
      return state;
  }
};

// Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.