import * as actionsTypes from '../actionsType';

const initialState = {
  pictures: [],
  current_pictures: [],
};

const picturesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.FETCH_PICTURES:
      return {
        ...state,        
        pictures: action.pictures,
      };
    case actionsTypes.CURRENT_PICTURES:
        return {
          ...state,        
          current_pictures: action.current_pictures,
        };
    default:
      return state;
  }
};

export default picturesReducer;
