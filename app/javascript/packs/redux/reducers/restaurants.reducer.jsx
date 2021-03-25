import * as actionsTypes from '../actionsType';

const initialState = {
  restaurants: [],
  current_restaurant: [],
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.FETCH_RESTAURANTS:
      return {
        ...state,        
        restaurants: action.restaurants,
      };
    case actionsTypes.FETCH_RESTAURANTS:
      return {
        ...state,        
        current_restaurant: action.current_restaurant,
      };
   
    default:
      return state;
  }
};

export default restaurantReducer;
