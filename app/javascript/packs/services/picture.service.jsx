import axios from 'axios';

export const PICTURE_ENDPOINT = 'https://desolate-reef-34872.herokuapp.com/api/v1/pictures';

export function getPicturesAsync() {
  return axios.get(PICTURE_ENDPOINT);
}