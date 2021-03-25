import * as actionsTypes from '../actionsType';

const initialState = {
  pictures: [],
};

const picturesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.FETCH_PICTURES:
      return {
        ...state,        
        pictures: action.pictures,
      };
   
    default:
      return state;
  }
};

export default picturesReducer;
