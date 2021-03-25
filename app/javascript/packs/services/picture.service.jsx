import axios from 'axios';

export const PICTURE_ENDPOINT = 'http://localhost:5000/api/v1/pictures';

export function getPicturesAsync() {
  return axios.get(PICTURE_ENDPOINT);
}