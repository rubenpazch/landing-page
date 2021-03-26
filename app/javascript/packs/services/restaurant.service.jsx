import axios from 'axios';

export const RESTAURANT_ENDPOINT = 'https://desolate-reef-34872.herokuapp.com/api/v1/restaurants';

export function getRestaurantsAsync() {
  return axios.get(RESTAURANT_ENDPOINT);
}

