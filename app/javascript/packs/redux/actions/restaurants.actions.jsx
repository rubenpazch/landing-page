import * as actionsTypes from '../actionsType';

export const setRestaurantListAction = result => ({
  type: actionsTypes.FETCH_RESTAURANTS,
  restaurants: result,
});

export const setCurrentRestaurant = result => ({
  type: actionsTypes.CURRENT_RESTAURANT,
  current_restaurant: result,
});