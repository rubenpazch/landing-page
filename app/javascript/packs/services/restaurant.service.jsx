import axios from 'axios';

export const RESTAURANT_ENDPOINT = 'http://localhost:5000/api/v1/restaurants';

export function getRestaurantsAsync() {
  return axios.get(RESTAURANT_ENDPOINT);
}

