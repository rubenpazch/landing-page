import axios from 'axios';

export const COMMENT_ENDPOINT = 'http://localhost:5000/api/v1/comments';

export function getCommentsAsync() {
  return axios.get(COMMENT_ENDPOINT);
}