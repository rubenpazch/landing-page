import * as actionsTypes from '../actionsType';

export const setRestaurantListAction = result => ({
  type: actionsTypes.FETCH_RESTAURANTS,
  restaurants: result,
});