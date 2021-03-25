import * as actionsTypes from '../actionsType';

const initialState = {
  comments: [],
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.FETCH_COMMENTS:
      return {
        ...state,        
        comments: action.comments,
      };
   
    default:
      return state;
  }
};

export default commentReducer;
