import * as actionsTypes from '../actionsType';

const initialState = {
  restaurants: [],
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.FETCH_RESTAURANTS:
      return {
        ...state,        
        restaurants: action.restaurants,
      };
   
    default:
      return state;
  }
};

export default restaurantReducer;
